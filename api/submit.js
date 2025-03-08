const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, budget, subject, message } = req.body;

    // Nodemailer Configuration
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service (e.g., Gmail, Outlook)
      auth: {
        user: process.env.EMAIL_USER, // Your email address (from environment variables)
        pass: process.env.EMAIL_PASSWORD, // Your email password (from environment variables)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email
      to: process.env.EMAIL_USER, // Your email address
      subject: `New Message from ${name}: ${subject}`, // Email subject
      text: `
        Name: ${name}
        Email: ${email}
        Budget: ${budget}
        Subject: ${subject}
        Message: ${message}
      `, // Email body
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send message." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
};