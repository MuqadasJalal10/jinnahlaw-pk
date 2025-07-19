// /api/contact.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  try {
    const emailData = await resend.emails.send({
      from: 'Jinnah Law <no-reply@jinnahlaw.pk>', // Use a verified domain
      to: ['info@jinnahlaw.pk'], // Admin email
      subject: `New Contact Form Submission - ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    });

    return res.status(200).json({ success: true, data: emailData });
  } catch (error) {
    console.error('Resend Error:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email.' });
  }
}
