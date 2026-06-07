const express = require("express");
const router = express.Router();

const { sendEmail } = require("../services/brevoService");
const { searchCompanies } = require("../services/ocean");
const { findEmail } = require("../services/prospeo");

// ------------------------
// Test Brevo
// ------------------------
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

// ------------------------
// Test Ocean
// ------------------------
router.get("/test-ocean", async (req, res) => {
  try {
    const result = await searchCompanies("hubspot.com");
    res.json(result);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json(error.response?.data || error.message);
  }
});

// ------------------------
// Test Prospeo
// ------------------------
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

// ------------------------
// Final Pipeline
// Example:
// /run-pipeline?domain=hubspot.com
// ------------------------
router.get("/run-pipeline", async (req, res) => {
  try {
    const domain = req.query.domain;

    if (!domain) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide a domain. Example: /run-pipeline?domain=hubspot.com"
      });
    }

    // Stage 1 - Ocean
    const companies = await searchCompanies(domain);

    console.log(
      "Found",
      companies?.companies?.length || 0,
      "similar companies"
    );

    let contact = null;
    let emailResult = null;
    let targetCompany = null;

    // Stage 2 - Dynamic Company Selection
    if (
      companies &&
      companies.companies &&
      companies.companies.length > 0
    ) {
      targetCompany = companies.companies[0].company;

      console.log(
        "Selected company:",
        targetCompany.name,
        "-",
        targetCompany.domain
      );
    }

    // Stage 3 - Prospeo
    try {
      if (targetCompany) {
        contact = await findEmail(
          "CEO",
          "",
          targetCompany.domain
        );
      }

      // Stage 4 - Brevo
      if (contact && contact.email) {
        emailResult = await sendEmail({
          to: contact.email,
          subject: "Vocallabs Outreach",
          htmlContent: `
            <h2>Hello!</h2>
            <p>
              This outreach email was generated automatically
              by the Vocallabs Outreach Pipeline.
            </p>
          `
        });
      }
    } catch (err) {
      console.log(
        "No contact found for selected company."
      );
    }

    res.json({
      success: true,
      message: "Pipeline executed successfully",

      summary: {
        inputDomain: domain,
        companiesFound:
          companies?.companies?.length || 0,
        selectedCompany:
          targetCompany?.domain || null,
        contactFound:
          contact ? true : false,
        emailReady:
          contact && contact.email ? true : false
      },

      companies,
      targetCompany,
      contact,
      emailResult
    });

  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json(
      error.response?.data || error.message
    );
  }
});

module.exports = router;