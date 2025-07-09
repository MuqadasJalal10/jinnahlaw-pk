import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

// Use environment variables
const FROM_EMAIL = process.env.FROM_EMAIL!;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;

router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      education,
      phone,
      email,
      address,
      course,
      subCourse,
      mode,
      previousExperience,
      additionalInfo,
    } = req.body;

    if (!fullName || !education || !phone || !email || !course || !mode) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // ✅ Send confirmation to applicant
    await resend.emails.send({
      from: `Jinnah Law Academy <${FROM_EMAIL}>`,
      to: email,
      subject: "Your Admission Application Was Received",
      html: `
        <p>Dear ${fullName},</p>
        <p>Thank you for submitting your admission application for <strong>${course}</strong>.</p>
        <p>We will review your details and contact you shortly.</p>
        <p>Best regards,<br/>Jinnah Law Academy</p>
      `,
    });

    // ✅ Notify admin
    await resend.emails.send({
      from: `Admission Form <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: "📥 New Admission Application Received",
      html: `
        <h3>New Admission Inquiry</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Course:</strong> ${course}</p>
        ${subCourse ? `<p><strong>Year/Part:</strong> ${subCourse}</p>` : ""}
        <p><strong>Mode:</strong> ${mode}</p>
        ${address ? `<p><strong>Address:</strong> ${address}</p>` : ""}
        ${
          previousExperience
            ? `<p><strong>Previous Experience:</strong><br/>${previousExperience}</p>`
            : ""
        }
        ${
          additionalInfo
            ? `<p><strong>Additional Info:</strong><br/>${additionalInfo}</p>`
            : ""
        }
      `,
    });

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error: any) {
    console.error("Error sending admission emails:", error);
    res.status(500).json({ error: "Failed to send emails" });
  }
});

export default router;
