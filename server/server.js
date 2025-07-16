import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


// Import routes
import contactRoutes from './routes/contact.js';
import admissionRoutes from './routes/admission.js';
import adminRoutes from './routes/admin.js';

// Import database initialization
import { initializeDatabase } from './config/database.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: false, // false for TLS/STARTTLS (port 587)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ✅ Test email route
app.get('/api/test-email', async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: 'muqadasjalal4@gmail.com', // <-- change if needed
      subject: '📧 Test Email from Jinnah Law Academy By Wasif Mateen',
      text: 'This is a test email sent from the backend.'
    });
    res.send('✅ Email sent successfully!');
  } catch (error) {
    console.error('❌ Email send failed:', error);
    res.status(500).send('❌ Failed to send email.');
  }
});

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    error: 'Too many requests from this IP, please try again later.'
  }
});

const formLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: {
    error: 'Too many form submissions, please try again later.'
  }
});

app.use(limiter);
app.use('/api/contact', formLimiter);
app.use('/api/admission', formLimiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Initialize database
initializeDatabase();

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Jinnah Law Academy API'
  });
});

// API routes
app.use('/api/contact', contactRoutes);
app.use('/api/admission', admissionRoutes);
app.use('/api/admin', adminRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({
      success: false,
      error: 'Invalid JSON format'
    });
  }

  res.status(500).json({
    success: false,
    error: process.env.NODE_ENV === 'production'
      ? 'Internal server error'
      : err.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Server listen
app.listen(PORT, () => {
  console.log(`🚀 Jinnah Law Academy API running on port ${PORT}`);
  console.log(`📧 Email service configured for: ${process.env.EMAIL_FROM}`);
  console.log(`🏫 Academy: ${process.env.ACADEMY_NAME}`);
});

app.get('/', (req, res) => {
  res.send('🚀 Jinnah Law Academy API is running');
});



app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'PUT'],
  allowedHeaders: ['Content-Type']
}));

