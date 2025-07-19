// /api/admission.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

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

  if (!name || !email || !phone || !education || !address || !course) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  try {
    const emailData = await resend.emails.send({
      from: 'Jinnah Law <no-reply@jinnahlaw.pk>',
      to: ['info@jinnahlaw.pk'],
      subject: `New Admission Request: ${course} (${subcourse || ''})`,
      html: `
        <h2>New Admission Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Sub-Course:</strong> ${subcourse || 'N/A'}</p>
        <p><strong>Mode:</strong> ${mode || 'Not specified'}</p>
      `
    });

    return res.status(200).json({ success: true, data: emailData });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
