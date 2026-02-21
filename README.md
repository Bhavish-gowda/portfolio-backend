# Portfolio Backend API

Simple Node.js/Express backend for receiving contact form submissions.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **No Database**: Data is logged to console (you can view it in server logs)

## 📦 Installation

```bash
cd backend
npm install
```

## 🚀 Running Locally

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server runs on: `http://localhost:5000`

## 📡 API Endpoints

### GET `/`
Health check endpoint
- Response: `"Backend running"`

### POST `/api/contact`
Receive contact form submission

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Hello!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message received successfully"
}
```

**Note:** Contact form data is logged to the console/server logs.

## 🌐 Deployment

See `DEPLOYMENT_GUIDE.md` in the project root for detailed deployment instructions.

Recommended platforms:
- **Render** (Free tier available)
- **Railway** (Free tier available)
- **Heroku** (Paid)

## 📝 Environment Variables

None required! The server runs on port 5000 by default.
