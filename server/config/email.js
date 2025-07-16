// email.js

import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Email templates
export const emailTemplates = {
  contactConfirmation: (data) => ({
    subject: 'Thank you for contacting Jinnah Law Academy',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e293b, #334155); padding: 30px; text-align: center;">
          <h1 style="color: #f59e0b; margin: 0; font-size: 28px;">Jinnah Law Academy</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0;">Learn Law, Lead Justice</p>
        </div>

        <div style="padding: 30px; background: #ffffff;">
          <h2 style="color: #1e293b;">Thank you for your inquiry!</h2>
          <p style="color: #475569;">Dear ${data.name},</p>
          <p style="color: #475569;">
            We’ve received your message about <strong>${data.subject}</strong>. Our team will respond within 24 hours.
          </p>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0; color: #1e293b;">Your Message:</h3>
            <p style="color: #475569;">${data.message}</p>
          </div>

          <p style="color: #475569;">
            For urgent matters, call us at <strong>0300-1186473</strong> or WhatsApp us.
          </p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              Best regards,<br>
              <strong>Jinnah Law Academy Team</strong><br>
              Near Bank Islami, Opp. Sports Hall, Mattu Bhaike Rd, Nowshera Virkan<br>
              Phone: 0300-1186473 | Email: info@jinnahlaw.pk
            </p>
          </div>
        </div>
      </div>
    `
  }),

  admissionConfirmation: (data) => ({
    subject: 'Application Received - Jinnah Law Academy',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e293b, #334155); padding: 30px; text-align: center;">
          <h1 style="color: #f59e0b; margin: 0; font-size: 28px;">Jinnah Law Academy</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0;">Learn Law, Lead Justice</p>
        </div>

        <div style="padding: 30px; background: #ffffff;">
          <h2 style="color: #1e293b;">Application Received Successfully!</h2>
          <p style="color: #475569;">Dear ${data.name},</p>
          <p style="color: #475569;">
            Thank you for applying for <strong>${data.course}</strong>. We have received your application.
          </p>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b;">Application Details:</h3>
            <table style="width: 100%; color: #475569;">
              <tr><td><strong>Course:</strong></td><td>${data.course}</td></tr>
              ${data.subcourse ? `<tr><td><strong>Part:</strong></td><td>${data.subcourse}</td></tr>` : ''}
              <tr><td><strong>Mode:</strong></td><td>${data.mode}</td></tr>
              <tr><td><strong>Education:</strong></td><td>${data.education}</td></tr>
              <tr><td><strong>Phone:</strong></td><td>${data.phone}</td></tr>
            </table>
          </div>

          <p style="color: #475569;">
            Our admissions team will contact you within 24-48 hours.
            For urgent help, call or WhatsApp <strong>0300-1186473</strong>.
          </p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              Best regards,<br>
              <strong>Admissions Team</strong><br>
              Jinnah Law Academy
            </p>
          </div>
        </div>
      </div>
    `
  }),

  adminNotification: (type, data) => ({
    subject: `New ${type} - Jinnah Law Academy`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1e293b; padding: 20px; color: white;">
          <h2 style="margin: 0;">New ${type} Received</h2>
          <p style="margin: 5px 0 0;">Jinnah Law Academy Admin Notification</p>
        </div>

        <div style="padding: 20px; background: #ffffff;">
          <table style="width: 100%; border-collapse: collapse;">
            ${Object.entries(data).map(([key, value]) => `
              <tr>
                <td style="padding: 8px; font-weight: bold; text-transform: capitalize;">
                  ${key.replace('_', ' ')}:
                </td>
                <td style="padding: 8px;">${value || 'N/A'}</td>
              </tr>
            `).join('')}
          </table>

          <p style="margin-top: 20px; color: #64748b; font-size: 14px;">
            Received at: ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}
          </p>
        </div>
      </div>
    `
  })
};

// Send email using Resend
export const sendEmail = async (to, template) => {
  try {
    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM, // e.g., info@jinnahlaw.pk
      to,
      subject: template.subject,
      html: template.html,
      reply_to: process.env.EMAIL_FROM
    });

    console.log('✅ Email sent via Resend:', result.id);
    return { success: true, messageId: result.id };
  } catch (error) {
    console.error('❌ Resend Email Failed:', error);
    return { success: false, error: error.message };
  }
};

export default resend;
