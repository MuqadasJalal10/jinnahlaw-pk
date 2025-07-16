import express from 'express';
import { body, validationResult } from 'express-validator';
import db from '../config/database.js';
import { sendEmail, emailTemplates } from '../config/email.js';

const router = express.Router();

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('phone')
    .optional()
    .isMobilePhone('any')
    .withMessage('Please provide a valid phone number'),
  
  body('subject')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Subject must be between 5 and 200 characters'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters')
];

// POST /api/contact - Submit contact form
router.post('/', contactValidation, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { name, email, phone, subject, message } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');

    // Save to database
    const stmt = db.prepare(`
      INSERT INTO contact_submissions (name, email, phone, subject, message, ip_address, user_agent)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run([name, email, phone || null, subject, message, ipAddress, userAgent], function(err) {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({
          success: false,
          error: 'Failed to save contact submission'
        });
      }

      console.log(`📧 New contact submission from ${name} (${email})`);
    });

    stmt.finalize();

    // Send confirmation email to user
    const userTemplate = emailTemplates.contactConfirmation({
      name,
      subject,
      message
    });

    await sendEmail(email, userTemplate);

    // Send notification to admin
    const adminTemplate = emailTemplates.adminNotification('Contact Form Submission', {
      name,
      email,
      phone: phone || 'Not provided',
      subject,
      message,
      ip_address: ipAddress
    });

    await sendEmail(process.env.ADMIN_EMAIL, adminTemplate);

    res.json({
      success: true,
      message: 'Thank you for your message. We will get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process contact form. Please try again later.'
    });
  }
});

// GET /api/contact - Get all contact submissions (admin only)
router.get('/', async (req, res) => {
  try {
    db.all(
      'SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 100',
      [],
      (err, rows) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({
            success: false,
            error: 'Failed to fetch contact submissions'
          });
        }

        res.json({
          success: true,
          data: rows,
          count: rows.length
        });
      }
    );
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact submissions'
    });
  }
});

export default router;