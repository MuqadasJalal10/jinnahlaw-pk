import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import db from '../config/database.js';

const router = express.Router();

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Access token required'
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        error: 'Invalid or expired token'
      });
    }
    req.user = user;
    next();
  });
};

// POST /api/admin/login - Admin login
router.post('/login', [
  body('username').trim().isLength({ min: 3 }).withMessage('Username required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { username, password } = req.body;

    db.get(
      'SELECT * FROM admin_users WHERE username = ? OR email = ?',
      [username, username],
      async (err, user) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({
            success: false,
            error: 'Login failed'
          });
        }

        if (!user) {
          return res.status(401).json({
            success: false,
            error: 'Invalid credentials'
          });
        }

        const validPassword = await bcrypt.compare(password, user.password_hash);
        if (!validPassword) {
          return res.status(401).json({
            success: false,
            error: 'Invalid credentials'
          });
        }

        // Update last login
        db.run(
          'UPDATE admin_users SET last_login = CURRENT_TIMESTAMP WHERE id = ?',
          [user.id]
        );

        // Generate JWT token
        const token = jwt.sign(
          { 
            id: user.id, 
            username: user.username, 
            role: user.role 
          },
          process.env.JWT_SECRET,
          { expiresIn: '24h' }
        );

        res.json({
          success: true,
          message: 'Login successful',
          token,
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
          }
        });
      }
    );
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      error: 'Login failed'
    });
  }
});

// POST /api/admin/register - Create admin user (protected)
router.post('/register', authenticateToken, [
  body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
  body('email').isEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { username, email, password, role = 'admin' } = req.body;

    // Hash password
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const stmt = db.prepare(`
      INSERT INTO admin_users (username, email, password_hash, role)
      VALUES (?, ?, ?, ?)
    `);

    stmt.run([username, email, passwordHash, role], function(err) {
      if (err) {
        if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
          return res.status(400).json({
            success: false,
            error: 'Username or email already exists'
          });
        }
        console.error('Database error:', err);
        return res.status(500).json({
          success: false,
          error: 'Failed to create admin user'
        });
      }

      res.status(201).json({
        success: true,
        message: 'Admin user created successfully',
        userId: this.lastID
      });
    });

    stmt.finalize();
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      error: 'Registration failed'
    });
  }
});

// GET /api/admin/dashboard - Dashboard statistics
router.get('/dashboard', authenticateToken, async (req, res) => {
  try {
    const stats = {};

    // Get contact submissions count
    db.get('SELECT COUNT(*) as count FROM contact_submissions', [], (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({
          success: false,
          error: 'Failed to fetch dashboard data'
        });
      }
      stats.contactSubmissions = result.count;
    });

    // Get admission applications count
    db.get('SELECT COUNT(*) as count FROM admission_applications', [], (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({
          success: false,
          error: 'Failed to fetch dashboard data'
        });
      }
      stats.admissionApplications = result.count;
    });

    // Get recent applications
    db.all(
      'SELECT name, course, created_at FROM admission_applications ORDER BY created_at DESC LIMIT 5',
      [],
      (err, recentApplications) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({
            success: false,
            error: 'Failed to fetch dashboard data'
          });
        }

        stats.recentApplications = recentApplications;

        res.json({
          success: true,
          data: stats
        });
      }
    );
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch dashboard data'
    });
  }
});

// GET /api/admin/verify - Verify token
router.get('/verify', authenticateToken, (req, res) => {
  res.json({
    success: true,
    user: req.user
  });
});

export default router;