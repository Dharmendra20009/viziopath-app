import nodemailer from 'nodemailer';

export const mailer = () => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  return transporter;
};

export const sendContactEmail = async ({ name, email, phone, subject, message }) => {
  const to = process.env.CONTACT_TO || process.env.SMTP_USER;
  const transporter = mailer();
  const info = await transporter.sendMail({
    from: `Viziopath Website <${process.env.SMTP_USER}>`,
    to,
    subject: subject || 'New Inquiry from Viziopath.info',
    text: `From: ${name} <${email}>\nPhone: ${phone || 'N/A'}\n\n${message}`,
  });
  return info.messageId;
};