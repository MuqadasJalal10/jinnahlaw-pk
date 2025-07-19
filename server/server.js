// Register aliases
import 'module-alias/register';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { Resend } from 'resend';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Aliased routes
import contactRoutes from '@/routes/contact.js';
import admissionRoutes from '@/routes/admission.js';
import adminRoutes from '@/routes/admin.js';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Resend Test Route
const resend = new Resend(process.env.RESEND_API_KEY);
app.get('/api/test-email', async (req, res) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: '📧 Test Email from Jinnah Law Academy (Resend)',
      html: '<p>This is a test email sent via Resend.com API.</p>'
    });
    res.send('✅ Test email sent!');
  } catch (error) {
    console.error('❌ Test email failed:', error);
    res.status(500).send('❌ Failed to send email.');
  }
});

// ✅ Middleware
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
app.use(helmet());

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
const formLimiter = rateLimit({ windowMs: 60 * 1000, max: 5 });

app.use(limiter);
app.use('/api/contact', formLimiter);
app.use('/api/admission', formLimiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ✅ Routes
app.use('/api/contact', contactRoutes);
app.use('/api/admission', admissionRoutes);
app.use('/api/admin', adminRoutes);

// ✅ Health & Errors
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', service: 'Jinnah Law Academy API', timestamp: new Date().toISOString() });
});
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
  });
});
app.use('*', (req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});
app.get('/', (req, res) => res.send('🚀 Jinnah Law Academy API is running'));

// ✅ Launch
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
