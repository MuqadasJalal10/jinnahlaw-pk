import express from 'express';
import { body, validationResult } from 'express-validator';
import db from '@config/database.js';
import { sendEmail, emailTemplates } from '@config/email.js';

const router = express.Router();

// Validation rules
const admissionValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),

  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),

  body('phone')
    .isMobilePhone('any')
    .withMessage('Please provide a valid phone number'),

  body('education')
    .isIn(['intermediate', 'bachelor', 'llb', 'master'])
    .withMessage('Please select a valid education level'),

  body('course')
    .isIn(['lat', 'llb-4', 'llb-5', 'law-gat'])
    .withMessage('Please select a valid course'),

  body('mode')
    .isIn(['online', 'on-campus'])
    .withMessage('Please select a valid study mode'),

  body('address')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Address must not exceed 500 characters'),

  body('subcourse')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Invalid subcourse selection')
];

// POST /api/admission - Submit admission application
router.post('/', admissionValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { name, email, phone, address, education, course, subcourse, mode } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');

    const courseNames = {
      'lat': 'LAT - Law Admission Test',
      'llb-4': 'LL.B - 4 Year Program',
      'llb-5': 'LL.B - 5 Year Program',
      'law-gat': 'LAW-GAT Preparation'
    };

    const courseName = courseNames[course] || course;

    const stmt = db.prepare(`
      INSERT INTO admission_applications 
      (name, email, phone, address, education, course, subcourse, mode, ip_address, user_agent)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run([
      name,
      email,
      phone,
      address || null,
      education,
      courseName,
      subcourse || null,
      mode,
      ipAddress,
      userAgent
    ], async function (err) {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({
          success: false,
          error: 'Failed to save admission application'
        });
      }

      console.log(`🎓 New admission application from ${name} for ${courseName}`);

      const userTemplate = emailTemplates.admissionConfirmation({
        name,
        course: courseName,
        subcourse,
        mode: mode === 'online' ? 'Online Classes' : 'On-Campus Classes',
        education,
        phone
      });

      try {
        await sendEmail(email, userTemplate);

        const adminTemplate = emailTemplates.adminNotification('Admission Application', {
          name,
          email,
          phone,
          address: address || 'Not provided',
          education,
          course: courseName,
          subcourse: subcourse || 'Not applicable',
          mode: mode === 'online' ? 'Online Classes' : 'On-Campus Classes',
          ip_address: ipAddress
        });

        await sendEmail(process.env.ADMIN_EMAIL, adminTemplate);

        res.json({
          success: true,
          message: 'Application submitted successfully! We will contact you within 24-48 hours.',
          applicationId: this.lastID
        });
      } catch (emailErr) {
        console.error('Email sending error:', emailErr);
        res.status(500).json({
          success: false,
          error: 'Application saved, but failed to send confirmation email.'
        });
      }
    });

    stmt.finalize();
  } catch (error) {
    console.error('Admission application error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process admission application. Please try again later.'
    });
  }
});

// GET /api/admission - Get all admission applications (admin only)
router.get('/', async (req, res) => {
  try {
    const { status, course, limit = 100 } = req.query;

    let query = 'SELECT * FROM admission_applications';
    let params = [];

    if (status || course) {
      query += ' WHERE';
      const conditions = [];

      if (status) {
        conditions.push(' status = ?');
        params.push(status);
      }

      if (course) {
        conditions.push(' course LIKE ?');
        params.push(`%${course}%`);
      }

      query += conditions.join(' AND');
    }

    query += ' ORDER BY created_at DESC LIMIT ?';
    params.push(parseInt(limit));

    db.all(query, params, (err, rows) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({
          success: false,
          error: 'Failed to fetch admission applications'
        });
      }

      res.json({
        success: true,
        data: rows,
        count: rows.length
      });
    });
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch admission applications'
    });
  }
});

// PUT /api/admission/:id/status - Update application status
router.put('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    if (!['pending', 'approved', 'rejected', 'contacted'].includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status'
      });
    }

    const stmt = db.prepare(`
      UPDATE admission_applications 
      SET status = ?, notes = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `);

    stmt.run([status, notes || null, id], function (err) {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({
          success: false,
          error: 'Failed to update application status'
        });
      }

      if (this.changes === 0) {
        return res.status(404).json({
          success: false,
          error: 'Application not found'
        });
      }

      res.json({
        success: true,
        message: 'Application status updated successfully'
      });
    });

    stmt.finalize();
  } catch (error) {
    console.error('Error updating application:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update application status'
    });
  }
});

export default router;
