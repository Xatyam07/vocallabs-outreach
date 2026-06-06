const axios = require("axios");

const searchCompanies = async (domain) => {
  try {
    const response = await axios.post(
      "https://api.ocean.io/v3/search/companies",
      {
        size: 10,
        companiesFilters: {
          lookalikeDomains: [domain]
        },
        fields: [
          "domain",
          "name",
          "description",
          "industries",
          "employeeCountLinkedin"
        ]
      },
      {
        headers: {
          "x-api-token": process.env.OCEAN_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Ocean Error:", error.response?.data || error.message);
    throw error;
  }
};

module.exports = { searchCompanies };