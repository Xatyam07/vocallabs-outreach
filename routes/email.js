const express = require("express");
const router = express.Router();
const brevo = require("../services/brevoService");

router.get("/test-email", async (req, res) => {
  try {
    const sendSmtpEmail = {
      sender: {
        name: "VocalLabs",
        email: "hello@satyam.site"
      },
      to: [
        {
          email: "xatyammishra07@gmail.com",
          name: "Satyam"
        }
      ],
      subject: "Brevo Test Email",
      htmlContent: "<h1>Hello Satyam 🚀</h1><p>Brevo is connected successfully.</p>"
    };

    const result = await brevo.sendTransacEmail(sendSmtpEmail);

    res.json({
      success: true,
      result
    });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;