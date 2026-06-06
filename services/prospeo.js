const axios = require("axios");

const findEmail = async (firstName, lastName, companyWebsite) => {
  try {
    const response = await axios.post(
      "https://api.prospeo.io/enrich-person",
      {
        only_verified_email: true,
        enrich_mobile: false,
        data: {
          first_name: firstName,
          last_name: lastName,
          company_website: companyWebsite
        }
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-KEY": process.env.PROSPEO_API_KEY
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Prospeo Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

module.exports = { findEmail };