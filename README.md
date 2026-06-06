# Vocallabs Outreach Automation

## Overview

Vocallabs Outreach Automation is a Node.js-based outreach pipeline that integrates multiple lead generation and email automation platforms.

The system:

1. Finds similar companies using Ocean.io
2. Enriches company/person data using Prospeo
3. Generates verified outreach contacts
4. Sends personalized emails using Brevo

---

## Features

* Ocean.io company search integration
* Prospeo person enrichment integration
* Brevo email automation
* REST API architecture using Express.js
* Environment-based configuration
* Modular service structure

---

## Tech Stack

### Backend

* Node.js
* Express.js

### APIs

* Ocean.io API
* Prospeo API
* Brevo API

### Tools

* Axios
* Dotenv
* CORS

---

## Project Structure

```text
vocallabs-outreach/
│
├── routes/
│   └── outreach.js
│
├── services/
│   ├── ocean.js
│   ├── prospeo.js
│   └── brevoService.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

## Environment Variables

Create a `.env` file:

```env
PORT=5000

OCEAN_API_KEY=your_ocean_api_key

PROSPEO_API_KEY=your_prospeo_api_key

BREVO_API_KEY=your_brevo_api_key
```

---

## Installation

Clone repository:

```bash
git clone https://github.com/yourusername/vocallabs-outreach.git
```

Install dependencies:

```bash
npm install
```

Start server:

```bash
node server.js
```

---

## API Endpoints

### Home

```http
GET /
```

Response:

```json
{
  "success": true,
  "message": "Vocallabs Outreach API Running"
}
```

---

### Test Brevo

```http
GET /test-email
```

Sends a test email using Brevo.

---

### Test Ocean

```http
GET /test-ocean
```

Tests Ocean.io company search integration.

---

### Test Prospeo

```http
GET /test-prospeo
```

Tests Prospeo enrichment integration.

---

## Workflow

```text
Input Domain
      │
      ▼
 Ocean.io
      │
      ▼
 Similar Companies
      │
      ▼
   Prospeo
      │
      ▼
 Contact Enrichment
      │
      ▼
    Brevo
      │
      ▼
 Outreach Email
```

---

## Author

Satyam Mishra

Computer Science Engineering

PSIT Kanpur

GitHub: https://github.com/Xatyam07
