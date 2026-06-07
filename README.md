# Vocallabs Outreach Automation

## Overview

Vocallabs Outreach Automation is a Node.js-based lead generation and outreach automation system that integrates Ocean.io, Prospeo, and Brevo into a single automated pipeline.

The application accepts a company domain as input, discovers similar companies, enriches contact information, and performs automated outreach through email.

This project was developed as part of the Vocallabs Software Development Internship Assignment.

---

## Features

### Company Discovery

* Search similar companies using Ocean.io
* Dynamic domain input support
* Automatic target company selection

### Contact Enrichment

* Find contact information using Prospeo
* Retrieve email addresses and prospect details
* Handle missing contacts gracefully

### Email Automation

* Send automated outreach emails using Brevo
* Customizable email templates
* End-to-end outreach workflow

### Backend Features

* REST API architecture using Express.js
* Environment variable configuration
* Modular service-based structure
* Error handling and logging
* JSON execution summaries

---

## Tech Stack

### Backend

* Node.js
* Express.js

### APIs & Services

* Ocean.io
* Prospeo
* Brevo

### Libraries

* Axios
* Dotenv
* CORS

---

## Project Structure

```text
vocallabs-outreach/
│
├── data/
│   └── leads.json
│
├── routes/
│   ├── outreach.js
│   └── email.js
│
├── services/
│   ├── ocean.js
│   ├── prospeo.js
│   ├── brevoService.js
│   └── hunter.js
│
├── .env
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000

OCEAN_API_KEY=your_ocean_api_key

PROSPEO_API_KEY=your_prospeo_api_key

BREVO_API_KEY=your_brevo_api_key
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Xatyam07/vocallabs-outreach.git
```

Move into the project directory:

```bash
cd vocallabs-outreach
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

Server runs on:

```text
http://localhost:5000
```

---

## API Endpoints

### Health Check

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

Tests email delivery through Brevo.

---

### Test Ocean

```http
GET /test-ocean
```

Tests Ocean.io company discovery.

---

### Test Prospeo

```http
GET /test-prospeo
```

Tests contact enrichment through Prospeo.

---

### Run Full Pipeline

```http
GET /run-pipeline?domain=hubspot.com
```

Example:

```http
GET /run-pipeline?domain=hubspot.com
```

---

## Workflow

```text
Input Domain
      │
      ▼
Ocean.io Search
      │
      ▼
Similar Companies Found
      │
      ▼
Select Target Company
      │
      ▼
Prospeo Enrichment
      │
      ▼
Contact Discovery
      │
      ▼
Brevo Email Outreach
      │
      ▼
Execution Summary
```

---

## Sample Response

```json
{
  "success": true,
  "message": "Pipeline executed successfully",
  "summary": {
    "inputDomain": "hubspot.com",
    "companiesFound": 10,
    "selectedCompany": "wthubspot.com",
    "contactFound": false,
    "emailReady": false
  }
}
```

---

## Assignment Notes

* Implemented Ocean.io integration for company discovery.
* Implemented Prospeo integration for contact enrichment.
* Implemented Brevo integration for email outreach.
* Added dynamic domain input support.
* Added automatic target company selection.
* Added execution summary response.
* Added error handling for missing contacts.
* Built modular and reusable service architecture.

### Note About Eazyreach

According to the assignment FAQ provided by Vocallabs, Eazyreach credits were unavailable. Therefore, Prospeo was used as the alternative solution for contact discovery and enrichment.

---

## Future Improvements

* Frontend dashboard
* Database integration
* Bulk domain processing
* Automated campaign tracking
* CRM integration
* Scheduled outreach campaigns

---

## Author

### Satyam Mishra

B.Tech Computer Science Engineering
PSIT Kanpur

GitHub: https://github.com/Xatyam07 

Portfolio: https://satyam07portfolio.vercel.app
