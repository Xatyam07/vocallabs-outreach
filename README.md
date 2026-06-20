<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&height=300&color=0:4F46E5,25:6366F1,50:7C3AED,75:8B5CF6,100:A855F7&text=Vocallabs%20Outreach%20Automation&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Automated%20Lead%20Discovery%2C%20Enrichment%20and%20Email%20Outreach%20Pipeline&descAlignY=58"/>
</p>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=22&duration=3000&pause=1000&color=8B5CF6&center=true&vCenter=true&width=900&lines=Discover+Similar+Companies+with+Ocean.io;Enrich+Contacts+with+Prospeo;Automate+Outreach+with+Brevo;One+Domain+In%2C+Full+Pipeline+Out;Built+for+the+Vocallabs+SDE+Internship"/>

</div>

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Ocean.io](https://img.shields.io/badge/Ocean.io-Company%20Discovery-0EA5E9?style=for-the-badge)
![Prospeo](https://img.shields.io/badge/Prospeo-Contact%20Enrichment-22C55E?style=for-the-badge)
![Brevo](https://img.shields.io/badge/Brevo-Email%20Automation-0B996E?style=for-the-badge)

</div>

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/Xatyam07/vocallabs-outreach?style=for-the-badge&color=7C3AED)
![GitHub last commit](https://img.shields.io/github/last-commit/Xatyam07/vocallabs-outreach?style=for-the-badge&color=6366F1)
![GitHub stars](https://img.shields.io/github/stars/Xatyam07/vocallabs-outreach?style=for-the-badge&color=A855F7)
![License](https://img.shields.io/badge/License-Assignment%2FEducational-4F46E5?style=for-the-badge)

</div>

<div align="center">

<a href="https://github.com/Xatyam07/vocallabs-outreach">
<img src="https://img.shields.io/badge/📦_Repository-GitHub-4F46E5?style=for-the-badge&logo=github&logoColor=white"/>
</a>
<a href="#-api-endpoints">
<img src="https://img.shields.io/badge/🔌_API-Endpoints-6366F1?style=for-the-badge"/>
</a>

</div>

<br>

> Vocallabs Outreach Automation is a Node.js-based lead generation and outreach automation system that integrates Ocean.io, Prospeo, and Brevo into a single automated pipeline. It accepts a company domain as input, discovers similar companies, enriches contact information, and performs automated outreach through email — built as part of the Vocallabs Software Development Internship Assignment.

---

## 📑 Table of Contents

- [Features](#-features)
- [Workflow](#-workflow)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#️-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Sample Response](#-sample-response)
- [Assignment Notes](#-assignment-notes)
- [Roadmap](#-roadmap)
- [Author](#-author)
- [License](#-license)

---

## 🚀 Features

<table>
<tr>
<td width="50%">

**🔍 Company Discovery**
- Search similar companies via Ocean.io
- Dynamic domain input support
- Automatic target company selection

</td>
<td width="50%">

**📇 Contact Enrichment**
- Find contact information via Prospeo
- Retrieve email addresses and prospect details
- Graceful handling of missing contacts

</td>
</tr>
<tr>
<td width="50%">

**✉️ Email Automation**
- Automated outreach emails via Brevo
- Customizable email templates
- End-to-end outreach workflow

</td>
<td width="50%">

**⚙️ Backend Architecture**
- REST API built with Express.js
- Modular, service-based structure
- Environment-based configuration
- Centralized error handling and logging

</td>
</tr>
</table>

### ✨ Extra Engineering Touches

> A few enhancements added beyond the base assignment scope to make the pipeline more production-ready.

- 🧠 **Lead Scoring** — basic heuristic score per company (size, domain match strength, contact confidence)
- 🔁 **Retry and Rate-Limit Handling** — automatic retries with backoff for Ocean.io / Prospeo / Brevo calls
- 📊 **JSON and CSV Execution Summaries** — export pipeline runs for reporting
- 🪵 **Structured Logging** — request and pipeline-stage logs for easier debugging
- 🔔 **Webhook Notification on Completion** — optionally POST a summary to a configured webhook URL
- 🐳 **Docker Support** — containerized for consistent local/dev environments
- 📬 **Postman Collection** — ready-to-import collection for testing all endpoints

---

## 🔄 Workflow

```mermaid
flowchart TD
    A[Input Domain] --> B[Ocean.io Search]
    B --> C[Similar Companies Found]
    C --> D[Select Target Company]
    D --> E[Prospeo Enrichment]
    E --> F{Contact Found?}
    F -- Yes --> G[Brevo Email Outreach]
    F -- No --> H[Log Missing Contact]
    G --> I[Execution Summary]
    H --> I
    I --> J[(JSON / CSV Export)]
    I --> K[Webhook Notification]
```

---

## 🛠️ Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=nodejs,express"/>

</div>

| Category | Technology |
|-----------|------------|
| Backend | Node.js, Express.js |
| APIs and Services | Ocean.io, Prospeo, Brevo |
| Libraries | Axios, Dotenv, CORS |
| Logging | Winston (or console-based structured logs) |
| Containerization | Docker (optional) |

---

## 📂 Project Structure

```bash
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
├── utils/
│   ├── logger.js
│   └── retry.js
│
├── .env
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 📥 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Xatyam07/vocallabs-outreach.git
cd vocallabs-outreach
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

See [Environment Variables](#️-environment-variables) below.

### 4. Start the server

```bash
node server.js
```

Server runs on:

```text
http://localhost:5000
```

### Optional: Run with Docker

```bash
docker build -t vocallabs-outreach .
docker run -p 5000:5000 --env-file .env vocallabs-outreach
```

---

## ⚙️ Environment Variables

**`.env`**

```env
PORT=5000

OCEAN_API_KEY=your_ocean_api_key
PROSPEO_API_KEY=your_prospeo_api_key
BREVO_API_KEY=your_brevo_api_key

# Optional - extra features
WEBHOOK_URL=your_webhook_url
LOG_LEVEL=info
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|--------------|
| `GET` | `/` | Health check |
| `GET` | `/test-email` | Test email delivery through Brevo |
| `GET` | `/test-ocean` | Test Ocean.io company discovery |
| `GET` | `/test-prospeo` | Test contact enrichment through Prospeo |
| `GET` | `/run-pipeline?domain=hubspot.com` | Run the full discovery → enrichment → outreach pipeline |

### Health Check

```http
GET /
```

```json
{
  "success": true,
  "message": "Vocallabs Outreach API Running"
}
```

### Run Full Pipeline

```http
GET /run-pipeline?domain=hubspot.com
```

---

## 📋 Sample Response

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

## 📝 Assignment Notes

- Implemented Ocean.io integration for company discovery
- Implemented Prospeo integration for contact enrichment
- Implemented Brevo integration for email outreach
- Added dynamic domain input support
- Added automatic target company selection
- Added execution summary response
- Added error handling for missing contacts
- Built modular and reusable service architecture

### Note About Eazyreach

According to the assignment FAQ provided by Vocallabs, Eazyreach credits were unavailable. Therefore, Prospeo was used as the alternative solution for contact discovery and enrichment.

---

## 🔮 Roadmap

- [ ] Frontend dashboard
- [ ] Database integration (lead history, dedupe)
- [ ] Bulk domain processing
- [ ] Automated campaign tracking
- [ ] CRM integration (HubSpot, Salesforce)
- [ ] Scheduled outreach campaigns (cron-based)
- [ ] Lead scoring model v2 (weighted, configurable)
- [ ] Multi-channel outreach (LinkedIn, follow-up sequences)

---

## 👨‍💻 Author

<div align="center">

### Satyam Mishra
B.Tech Computer Science Engineering, PSIT Kanpur

<a href="https://github.com/Xatyam07">
<img src="https://img.shields.io/badge/GitHub-Follow-4F46E5?style=for-the-badge&logo=github&logoColor=white"/>
</a>
<a href="https://satyam07portfolio.vercel.app">
<img src="https://img.shields.io/badge/Portfolio-Visit-7C3AED?style=for-the-badge&logo=vercel&logoColor=white"/>
</a>

</div>

---

## 📄 License

This project was developed as part of the Vocallabs Software Development Internship Assignment and is intended for educational and demonstration purposes.

---

<div align="center">

⭐ If you found this project interesting, consider giving it a star!

<img src="https://capsule-render.vercel.app/api?type=waving&height=120&color=0:A855F7,50:7C3AED,100:4F46E5&section=footer"/>

</div>
