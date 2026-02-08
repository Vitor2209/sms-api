# SMS Messages API

Backend REST API built with Node.js, Express and Sequelize for managing SMS delivery status updates and reports.

## Features

- Update SMS delivery status
- Validate numeric ID
- Validate allowed status values
- Retrieve SMS reports by status within last 24 hours
- Clean architecture (Controller / Service / Model)
- SQLite database (easy local setup)

## Tech Stack

- Node.js
- Express
- Sequelize
- SQLite

## Installation

```bash
git clone <repo>
cd sms-backend-api
npm install
npm run dev
Endpoints
Update message status
PUT /api/messages/:id/status

Body:

{
  "status": "ENVIADO"
}
Get report
GET /api/messages/report?status=ENVIADO

Returns messages with selected status within last 24 hours.

Author
Vitor Dutra Melo
Backend Developer — Node.js


---