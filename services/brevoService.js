const axios = require("axios");

const sendEmail = async ({ to, subject, htmlContent }) => {
  const response = await axios.post(
    "https://api.brevo.com/v3/smtp/email",
    {
      sender: {
        name: "Satyam",
        email: "hello@satyam.site"
      },
      to: [
        {
          email: to
        }
      ],
      subject,
      htmlContent
    },
    {
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json"
      }
    }
  );

  return response.data;
};

module.exports = { sendEmail };