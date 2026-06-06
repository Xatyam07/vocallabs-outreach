const express = require("express");
const router = express.Router();

const { sendEmail } = require("../services/brevoService");
const { searchCompanies } = require("../services/ocean");
const { findEmail } = require("../services/prospeo");

// Test Brevo
router.get("/test-email", async (req, res) => {
  try {
    const result = await sendEmail({
      to: "xatyammishra07@gmail.com",
      subject: "Vocallabs Test Email",
      htmlContent: "<h1>Hello Satyam 🚀</h1><p>Brevo is working.</p>"
    });

    res.json(result);
  } catch (error) {
    res.status(500).json(error.response?.data || error.message);
  }
});

// Test Ocean
router.get("/test-ocean", async (req, res) => {
  try {
    const result = await searchCompanies("hubspot.com");
    res.json(result);
  } catch (error) {
    res.status(500).json(error.response?.data || error.message);
  }
});

// Test Prospeo
router.get("/test-prospeo", async (req, res) => {
  try {
    const result = await findEmail(
      "Brian",
      "Halligan",
      "hubspot.com"
    );

    res.json(result);
  } catch (error) {
    res.status(500).json(error.response?.data || error.message);
  }
});

// Final Pipeline
router.get("/run-pipeline", async (req, res) => {
  try {
    const companies = await searchCompanies("hubspot.com");

    let contact = null;
    let emailResult = null;

    try {
      contact = await findEmail(
        "Brian",
        "Halligan",
        "hubspot.com"
      );

      if (contact?.email) {
        emailResult = await sendEmail({
          to: contact.email,
          subject: "Vocallabs Outreach",
          htmlContent:
            "<h2>Hello!</h2><p>This is an automated outreach email.</p>"
        });
      }
    } catch (err) {
      console.log("Prospeo returned NO_MATCH");
    }

    res.json({
      success: true,
      message: "Pipeline executed",
      companies,
      contact,
      emailResult
    });

  } catch (error) {
    res.status(500).json(error.response?.data || error.message);
  }
});

module.exports = router;