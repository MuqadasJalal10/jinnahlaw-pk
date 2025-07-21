import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const htmlBody = `
      <h2>📬 New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
    `;

    // Email to Admin
    await resend.emails.send({
      from: 'Jinnah Law Academy By Wasif Mateen <noreply@jinnahlaw.pk>',
      to: 'info@jinnahlaw.pk',
      subject: `📬 New Contact Message - ${subject}`,
      html: htmlBody,
    });

    // Confirmation Email to User
    await resend.emails.send({
      from: 'Jinnah Law Academy By Wasif Mateen<info@jinnahlaw.pk>',
      to: email,
      subject: '✅ We Received Your Message',
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for contacting Jinnah Law Academy By Wasif Mateen. We have received your message with the subject "<strong>${subject}</strong>" and will get back to you shortly.</p>
        <p><strong>Your Message:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 1em; color: #555;">${message.replace(/\n/g, '<br/>')}</blockquote>
        <br/>
        <p>Warm regards,<br/>Jinnah Law Academy By Wasif Mateen Team</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
