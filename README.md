🚀 SMS Delivery API — Node.js Backend Project

A production-style REST API built with Node.js, Express, and Sequelize, simulating an SMS delivery tracking system.

This project demonstrates clean backend architecture, data validation, error handling, and report generation.

✨ Features

✅ Update SMS delivery status
✅ Generate reports filtered by message status (last 24h)
✅ Data validation and structured error handling
✅ Clean architecture (Controllers • Services • Models • Routes)
✅ Relational database integration

🏗 Architecture
src/
 ├── controllers
 ├── services
 ├── models
 ├── routes
 ├── config
 └── database


The project follows service-layer architecture to keep the code scalable and maintainable.

⚙️ Technologies

Node.js

Express.js

Sequelize ORM

SQLite / PostgreSQL

JavaScript

📌 API Endpoints
Update message status
PUT /sms/:id/status


Body:

{
  "status": "ENVIADO"
}

Get report by status (last 24h)
GET /sms/report?status=ENVIADO

▶️ Running the project
npm install
npm start


Server runs at:

http://localhost:3000

🧠 Business Rules

ID must be numeric

Valid status:

ENVIADO

RECEBIDO

ERRO_DE_ENVIO

Error returned if message not found

Only valid requests update the database

🚀 Next Steps

Authentication (JWT)

Docker containerization

Deploy on Render

Automated tests (Jest)

👨‍💻 Author

Vitor Melo
Backend Developer — Node.js

Building scalable backend systems and REST APIs.

⭐ Project Purpose

This project is part of my journey becoming a Backend Developer, focusing on building production-ready APIs and improving backend architecture skills.
