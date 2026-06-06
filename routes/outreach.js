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
    console.error(error.response?.data || error.message);
    res.status(500).json(error.response?.data || error.message);
  }
});

// Test Ocean
router.get("/test-ocean", async (req, res) => {
  try {
    const result = await searchCompanies("hubspot.com");
    res.json(result);
  } catch (error) {
    console.error(error.response?.data || error.message);
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
    console.error(error.response?.data || error.message);
    res.status(500).json(error.response?.data || error.message);
  }
});

// Final Pipeline
router.get("/run-pipeline", async (req, res) => {
  try {
    // Step 1: Find lookalike companies
    const companies = await searchCompanies("hubspot.com");

    // Step 2: Find contact
    const contact = await findEmail(
      "Brian",
      "Halligan",
      "hubspot.com"
    );

    let emailResult = null;

    // Step 3: Send email if email found
    if (contact && contact.email) {
      emailResult = await sendEmail({
        to: contact.email,
        subject: "Vocallabs Outreach",
        htmlContent: `
          <h2>Hello!</h2>
          <p>This is an automated outreach email sent via Brevo.</p>
        `
      });
    }

    res.json({
      success: true,
      companies,
      contact,
      emailResult
    });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json(error.response?.data || error.message);
  }
});

module.exports = router;