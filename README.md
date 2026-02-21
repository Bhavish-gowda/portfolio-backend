# Portfolio Backend API

Node.js/Express backend for storing contact form submissions in MongoDB.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **ORM**: Mongoose

## 📦 Installation

```bash
cd backend
npm install
```

## ⚙️ Configuration

1. Create a `.env` file in the `backend` folder:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
PORT=5000
```

2. Get your MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

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

### POST `/api/contacts`
Create a new contact submission

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
  "message": "Contact saved successfully",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "message": "Hello!",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### GET `/api/contacts`
Get all contacts (sorted by newest first)

### GET `/api/contacts/:id`
Get a specific contact by ID

### DELETE `/api/contacts/:id`
Delete a contact by ID

## 🌐 Deployment

See `DEPLOYMENT_GUIDE.md` in the project root for detailed deployment instructions.

Recommended platforms:
- **Render** (Free tier available)
- **Railway** (Free tier available)
- **Heroku** (Paid)

## 📝 Environment Variables

- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (default: 5000)
