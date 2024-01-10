// pages/api/submitForm.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, description } = req.body;

    // Use nodemailer to send the email
    const transporter = nodemailer.createTransport({
      // Your email configuration (e.g., SMTP server details)
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "your-email-password",
      },
    });

    const mailOptions = {
      from: email,
      to: "sujonali8276@gmail.com",
      subject: "Mail Someone From Your Portfolio Contact",
      text: `Name: ${name}\nEmail: ${email}\nDescription: ${description}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
