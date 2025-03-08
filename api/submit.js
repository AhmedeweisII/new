const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "POST") {
    const { name, email, budget, subject, message } = req.body;

    // Nodemailer Configuration
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail as the email service
      auth: {
        user: "mhmdnyrtt@gmail.com", // Your email address
        pass: "01204741212Wesso", // Your email password or app-specific password
      },
    });

    const mailOptions = {
      from: "ahmedeweiso@gmail.com", // Sender email
      to: "ahmedeweiso@gmail.com", // Your email address
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
      res.status(500).json({ message: "Failed to send message.", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
};