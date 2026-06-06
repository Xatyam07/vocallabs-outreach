const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Vocallabs Outreach API Running"
  });
});

// Email route
app.use("/", require("./routes/outreach"));

// Check environment variables
console.log("Ocean:", process.env.OCEAN_API_KEY ? "Loaded" : "Missing");
console.log("Prospeo:", process.env.PROSPEO_API_KEY ? "Loaded" : "Missing");
console.log("Brevo:", process.env.BREVO_API_KEY ? "Loaded" : "Missing");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});