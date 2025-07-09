import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

// Check required env
const FROM_EMAIL = process.env.FROM_EMAIL!;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // ✅ Email to user
    await resend.emails.send({
      from: `Jinnah Law Academy <${FROM_EMAIL}>`,
      to: email,
      subject: "We received your message",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for contacting us regarding <strong>${subject}</strong>.</p>
        <p><em>Your message:</em><br/>${message}</p>
        <p>We will respond shortly.<br/><br/>- Jinnah Law Academy</p>
      `,
    });

    // ✅ Email to admin
    await resend.emails.send({
      from: `Website Contact Form <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h3>New Inquiry Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error: any) {
    console.error("Error sending contact form emails:", error);
    res.status(500).json({ error: "Failed to send emails" });
  }
});

export default router;
