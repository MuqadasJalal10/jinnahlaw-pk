// routes/contact.ts
import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Environment variables
const FROM_EMAIL = process.env.FROM_EMAIL!;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Email to user (confirmation)
    await resend.emails.send({
      from: `Jinnah Law Academy <${FROM_EMAIL}>`,
      to: email,
      subject: "📩 We received your message",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for contacting us regarding <strong>${subject}</strong>.</p>
        <p><em>Your message:</em><br/>${message}</p>
        <p>We will respond to you shortly.</p>
        <p>Best regards,<br/>Jinnah Law Academy By Wasif Mateen</p>
      `,
    });

    // Email to admin (notification)
    await resend.emails.send({
      from: `Website Contact Form <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: `📬 New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <hr/>
        <small>This message was sent from the contact form on the website.</small>
      `,
    });

    res.status(200).json({ message: "Emails sent successfully" });

  } catch (error: any) {
    console.error("❌ Error sending contact form emails:", error.message);
    res.status(500).json({ error: "Failed to send emails. Please try again later." });
  }
});

export default router;
