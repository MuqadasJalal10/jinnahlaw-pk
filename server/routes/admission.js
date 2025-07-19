import express from 'express';
import { Resend } from 'resend';

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/', async (req, res) => {
  const {
    name,
    email,
    phone,
    education,
    address,
    course,
    subcourse,
    mode
  } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Jinnah Law Academy <no-reply@jinnahlaw.pk>',
      to: process.env.ADMIN_EMAIL || 'info@jinnahlaw.pk',
      subject: `📚 New Admission: ${name}`,
      html: `
        <h2>Admission Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Course:</strong> ${course}${subcourse ? ` - ${subcourse}` : ''}</p>
        <p><strong>Mode:</strong> ${mode}</p>
        <p><strong>Address:</strong> ${address || 'N/A'}</p>
        <br><p>Sent from jinnahlaw.pk</p>
      `
    });

    if (error) {
      console.error('❌ Email Error:', error);
      return res.status(500).json({ success: false, error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('❌ Server Error:', err);
    return res.status(500).json({ success: false, error: 'Server error occurred' });
  }
});

export default router;