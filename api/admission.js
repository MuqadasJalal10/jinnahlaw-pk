import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      education,
      address,
      course,
      subcourse,
      mode,
      terms,
    } = req.body;

    // Validation (basic)
    if (!name || !email || !phone || !education || !course || !mode || !terms) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const htmlBody = `
      <h2>🎓 New Admission Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Education:</strong> ${education}</p>
      <p><strong>Course:</strong> ${course}</p>
      ${subcourse ? `<p><strong>Part:</strong> ${subcourse}</p>` : ''}
      <p><strong>Mode:</strong> ${mode === 'online' ? 'Online' : 'On-Campus'}</p>
      <p><strong>Address:</strong> ${address || 'N/A'}</p>
      <p><strong>Agreed to Terms:</strong> ${terms ? '✅ Yes' : '❌ No'}</p>
    `;

    // Email to admin
    await resend.emails.send({
      from: 'Jinnah Law Academy By Wasif Mateen <noreply@jinnahlaw.pk>',
      to: 'info@jinnahlaw.pk', // change this to your admin email
      subject: '🎓 New Admission Form Submission',
      html: htmlBody,
    });

    // Email to user
    await resend.emails.send({
      from: 'Jinnah Law Academy By Wasif Mateen <info@jinnahlaw.pk>',
      to: email,
      subject: '✅ Admission Form Received - Jinnah Law Academy By Wasif Mateen',
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for applying for the <strong>${course}</strong> program at Jinnah Law Academy By Wasif Mateen.</p>
        <p>We’ve received your application and will reach out to you soon.</p>
        <br/>
        <p>Regards,<br/>Jinnah Law Academy By Wasif Mateen</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
