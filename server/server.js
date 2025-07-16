import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Routes
import contactRoutes from './routes/contact.js';
import admissionRoutes from './routes/admission.js';
import adminRoutes from './routes/admin.js';

// DB
import { initializeDatabase } from './config/database.js';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Email
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ✅ Test Email Route
app.get('/api/test-email', async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: 'muqadasjalal4@gmail.com',
      subject: '📧 Test Email from Jinnah Law Academy',
      text: 'This is a test email sent from the backend.'
    });
    res.send('✅ Email sent successfully!');
  } catch (error) {
    console.error('❌ Email send failed:', error);
    res.status(500).send('❌ Failed to send email.');
  }
});

// ✅ CORS (ONE TIME ONLY)
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://jinnahlaw.pk',
    'https://jinnahlaw.pk',
    'https://www.jinnahlaw.pk'
  ],
  methods: ['POST', 'GET', 'PUT'],
  credentials: true
}));

// ✅ Security
app.use(helmet());

// ✅ Rate Limiters
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
const formLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5
});

app.use(limiter);
app.use('/api/contact', formLimiter);
app.use('/api/admission', formLimiter);

// ✅ Body Parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ✅ Initialize DB
initializeDatabase();

// ✅ Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Jinnah Law Academy API'
  });
});

// ✅ Mount API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/admission', admissionRoutes);
app.use('/api/admin', adminRoutes);

// ✅ 404 & Error Handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ success: false, error: 'Invalid JSON format' });
  }
  res.status(500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
  });
});

app.use('*', (req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

// ✅ Default Home
app.get('/', (req, res) => {
  res.send('🚀 Jinnah Law Academy API is running');
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
