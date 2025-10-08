const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "norberto.adams@ethereal.email",
      pass: "8DedzWQf5g8A2d64BN",
    },
  });

  let info = await transporter.sendMail({
    from: '"Abir Chodha" <abirchodha1@gmail.com>',
    to: "abirchodha@gmail.com",
    subject: "Hello",
    html: "<h2>Sending Emails with Node.js</h2>",
  });

  res.json(info);
};

module.exports = sendEmail;
