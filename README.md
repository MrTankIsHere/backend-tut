# Backend Tutorials

A comprehensive collection of Node.js and Express backend projects covering fundamental to advanced concepts. This repository contains multiple tutorial projects that progressively build your backend development skills.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Projects](#projects)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Common Dependencies](#common-dependencies)

## Overview

This repository contains 8 progressive backend tutorial projects, each focusing on specific concepts and technologies:

1. **Basic Node.js & Express** - Introduction to Node.js and Express framework
2. **Notes API** - Building REST APIs with Express
3. **MongoDB Integration** - Database integration with MongoDB and Mongoose
4. **Instagram Clone** - Full-stack project with frontend and backend
5. **Authentication** - JWT-based authentication system
6. **Cookie Management** - Working with cookies and secure sessions
7. **Spotify Clone** - Advanced project with file uploads, encryption, and user management

Each project builds upon concepts learned in previous projects, creating a learning path from basics to more complex applications.

---

## Project Structure

```
backend-tut/
├── 01-node/                    # Basic Express server
├── 02-notes-api/               # Notes REST API
├── 03-notes-mongoDB/           # MongoDB integration
├── 04-insta-post-dummy/        # Full-stack Instagram clone
│   ├── backend/                # Backend server
│   └── frontend/               # Frontend code
├── 05-authentication/          # JWT authentication
├── 06-cookies/                 # Cookie-based sessions
├── 07-spotify-clone/           # Advanced Spotify clone
└── 08/                         # (Reserved for future projects)
```

---

## Projects

### 1. 01-node - Basic Express Setup

**Description:** Introduction to Node.js and Express framework basics.

**Key Concepts:**
- Node.js fundamentals
- Express server setup
- Basic routing
- Request/Response handling

**Dependencies:**
- `express` ^5.2.1

**Getting Started:**
```bash
cd 01-node
npm install
node server.js
```

**Use Case:** Perfect for beginners to understand how Express servers work and basic HTTP concepts.

---

### 2. 02-notes-api - Notes REST API

**Description:** Build a complete REST API for managing notes without database integration.

**Key Concepts:**
- REST API design
- HTTP methods (GET, POST, PUT, DELETE)
- Request body parsing
- JSON responses
- API endpoints

**Dependencies:**
- `express` ^5.2.1

**Getting Started:**
```bash
cd 02-notes-api
npm install
node server.js
```

**API Endpoints:**
- GET `/notes` - Retrieve all notes
- POST `/notes` - Create a new note
- GET `/notes/:id` - Get a specific note
- PUT `/notes/:id` - Update a note
- DELETE `/notes/:id` - Delete a note

**Use Case:** Learn REST API design patterns and in-memory data handling.

---

### 3. 03-notes-mongoDB - MongoDB Integration

**Description:** Extend the notes API with MongoDB database integration using Mongoose ODM.

**Key Concepts:**
- MongoDB connection
- Mongoose schemas and models
- CRUD operations with database
- Data validation
- Error handling
- Async/await patterns

**Dependencies:**
- `express` ^5.2.1
- `mongoose` ^9.6.2

**Getting Started:**
```bash
cd 03-notes-mongoDB
npm install
# Ensure MongoDB is running
node server.js
```

**Database:** MongoDB with Mongoose ODM

**Use Case:** Learn database integration, data persistence, and production-ready API development.

---

### 4. 04-insta-post-dummy - Instagram Clone

**Description:** A full-stack Instagram clone project with separate backend and frontend.

**Key Concepts:**
- Full-stack architecture
- Frontend-backend integration
- Social features (posts, likes, comments)
- User interactions
- Real-time updates

**Structure:**
- `backend/` - Express server and API endpoints
- `frontend/` - Frontend application code

**Getting Started:**

Backend:
```bash
cd 04-insta-post-dummy/backend
npm install
npm start
```

Frontend:
```bash
cd 04-insta-post-dummy/frontend
npm install
npm start
```

**Use Case:** Experience building a complete full-stack application with realistic features.

---

### 5. 05-authentication - JWT Authentication

**Description:** Implement secure authentication using JSON Web Tokens (JWT).

**Key Concepts:**
- JWT fundamentals
- User registration
- User login
- Token generation and validation
- Protected routes/middleware
- Password security with bcryptjs
- Environment variables with dotenv

**Dependencies:**
- `express` ^5.2.1
- `mongoose` ^9.6.2
- `jsonwebtoken` ^9.0.3
- `dotenv` ^17.4.2

**Getting Started:**
```bash
cd 05-authentication
npm install
# Create .env file with necessary variables
node server.js
```

**.env Variables:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/auth-db
JWT_SECRET=your_secret_key
```

**Key Features:**
- User registration endpoint
- User login with JWT
- Protected routes
- Token verification middleware

**Use Case:** Master authentication and authorization patterns essential for production applications.

---

### 6. 06-cookies - Cookie Management

**Description:** Implement session management using cookies and JWT combined.

**Key Concepts:**
- HTTP cookies
- Cookie parsing with cookie-parser
- Secure cookie handling
- Session management
- Authentication with cookies
- JWT token storage in cookies
- CSRF protection basics

**Dependencies:**
- `express` ^5.2.1
- `mongoose` ^9.6.2
- `jsonwebtoken` ^9.0.3
- `cookie-parser` ^1.4.7
- `dotenv` ^17.4.2

**Getting Started:**
```bash
cd 06-cookies
npm install
# Create .env file with necessary variables
node server.js
```

**.env Variables:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cookies-db
JWT_SECRET=your_secret_key
```

**Key Features:**
- Cookie-based sessions
- Secure cookie settings
- JWT in cookies
- User session management

**Use Case:** Learn modern session management combining cookies and JWT for better security.

---

### 7. 07-spotify-clone - Advanced Spotify Clone

**Description:** A comprehensive Spotify clone project featuring user authentication, file uploads, music management, and advanced backend features.

**Key Concepts:**
- Advanced authentication with bcryptjs
- File/image upload handling with multer
- Image processing and management with ImageKit
- User profiles and music libraries
- Playlist management
- Advanced database relationships
- Production-ready code structure
- Error handling and validation
- Environment configuration

**Dependencies:**
- `express` ^5.2.1
- `mongoose` ^9.6.2
- `jsonwebtoken` ^9.0.3
- `cookie-parser` ^1.4.7
- `dotenv` ^17.4.2
- `bcryptjs` ^3.0.3
- `multer` ^2.1.1
- `@imagekit/nodejs` ^7.6.1

**Getting Started:**
```bash
cd 07-spotify-clone
npm install
# Create .env file with necessary variables
npm run dev          # Development with nodemon
# or
npm start            # Production
```

**.env Variables:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/spotify-db
JWT_SECRET=your_secret_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url
```

**Key Features:**
- User authentication and authorization
- Profile management with avatar uploads
- Music/song management
- Playlist creation and management
- Image upload and optimization
- Advanced security with bcryptjs
- Modular code structure
- Error handling and validation

**Scripts:**
- `npm run dev` - Run with nodemon for development
- `npm start` - Run in production mode

**Use Case:** Complete real-world project combining all previously learned concepts. Ideal for portfolio building and understanding production-level backend architecture.

---

## Prerequisites

### Required Software
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** (for projects 3, 4, 5, 6, 7) - [Download](https://www.mongodb.com/try/download/community)
- **Git** (optional, for version control)

### Optional Tools
- **Postman** or **Thunder Client** - For API testing
- **MongoDB Compass** - GUI for MongoDB
- **VS Code** - Recommended code editor
- **nodemon** - Development dependency for auto-restart

### MongoDB Setup
Ensure MongoDB is running on your system:
```bash
# macOS with Homebrew
brew services start mongodb-community

# Windows (if installed as service)
# MongoDB should start automatically

# Linux
sudo systemctl start mongod
```

---

## Getting Started

### 1. Clone or Download the Repository
```bash
git clone <repository-url>
cd backend-tut
```

### 2. Choose a Project
Each project is independent. Start with project 01 and progress sequentially:

```bash
cd 01-node  # Start here for basics
npm install
node server.js
```

### 3. General Workflow for Any Project
```bash
cd <project-folder>
npm install              # Install dependencies
npm start               # Start the server (or npm run dev)
```

### 4. Test the Server
- Use Postman or Thunder Client to test API endpoints
- Most projects run on `http://localhost:5000` or `http://localhost:3000`
- Check each project's documentation for specific port information

---

## Common Dependencies

### Across All Projects

| Package | Version | Purpose |
|---------|---------|---------|
| `express` | ^5.2.1 | Web framework for Node.js |

### Database & ODM

| Package | Version | Purpose |
|---------|---------|---------|
| `mongoose` | ^9.6.2 | MongoDB ODM (Object Data Modeling) |

### Authentication & Security

| Package | Version | Purpose |
|---------|---------|---------|
| `jsonwebtoken` | ^9.0.3 | JWT token generation and validation |
| `bcryptjs` | ^3.0.3 | Password hashing and encryption |
| `cookie-parser` | ^1.4.7 | Parse HTTP request cookies |

### Utilities

| Package | Version | Purpose |
|---------|---------|---------|
| `dotenv` | ^17.4.2 | Environment variable management |
| `multer` | ^2.1.1 | Middleware for file uploads |
| `@imagekit/nodejs` | ^7.6.1 | Image upload and management |

### Development

| Package | Purpose |
|---------|---------|
| `nodemon` | Auto-restart server on file changes |

---

## Installation Tips

### Install All Dependencies for a Project
```bash
cd <project-folder>
npm install
```

### Update All Dependencies
```bash
npm update
```

### Install Specific Package
```bash
npm install <package-name>
```

### Install Development Dependency
```bash
npm install --save-dev nodemon
```

---

## Running Projects

### Development Mode (with auto-restart)
Most projects support nodemon:
```bash
npm run dev
```

### Production Mode
```bash
npm start
# or
node server.js
```

---

## API Testing

### Using Postman
1. Download [Postman](https://www.postman.com/downloads/)
2. Create a new request
3. Select HTTP method (GET, POST, PUT, DELETE)
4. Enter the URL (e.g., `http://localhost:5000/api/notes`)
5. Add headers and body as needed
6. Send request and view response

### Using cURL
```bash
# GET request
curl http://localhost:5000/api/notes

# POST request
curl -X POST http://localhost:5000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My Note","content":"Note content"}'
```

### Using Thunder Client (VS Code Extension)
1. Install Thunder Client extension
2. Create new request
3. Set method and URL
4. Configure headers and body
5. Send and view response

---

## Troubleshooting

### Port Already in Use
If port 5000 is already in use:
```bash
# Change port in .env file or server.js
# Or kill the process using the port

# On macOS/Linux
lsof -ti:5000 | xargs kill -9

# On Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check connection string in .env
- Verify MongoDB is listening on the correct port (default: 27017)
- Check firewall settings

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Environment Variables Not Loading
- Ensure .env file is in the project root
- Verify dotenv is imported at the start of server.js
- Restart the server after creating/modifying .env

---

## Learning Path

**Recommended progression:**

1. **01-node** → Understand basic Express server
2. **02-notes-api** → Learn REST API design
3. **03-notes-mongoDB** → Add database integration
4. **04-insta-post-dummy** → Build full-stack application
5. **05-authentication** → Implement user authentication
6. **06-cookies** → Master session management
7. **07-spotify-clone** → Combine all concepts in real-world project

---

## Project Features Summary

| Project | Express | MongoDB | JWT | Cookies | Multer | ImageKit | bcryptjs |
|---------|---------|---------|-----|---------|--------|----------|----------|
| 01-node | ✅ | - | - | - | - | - | - |
| 02-notes-api | ✅ | - | - | - | - | - | - |
| 03-notes-mongoDB | ✅ | ✅ | - | - | - | - | - |
| 04-insta-post-dummy | ✅ | ✅ | - | - | - | - | - |
| 05-authentication | ✅ | ✅ | ✅ | - | - | - | - |
| 06-cookies | ✅ | ✅ | ✅ | ✅ | - | - | - |
| 07-spotify-clone | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## Contributing

Feel free to:
- Add improvements to existing projects
- Fix bugs or issues
- Enhance documentation
- Share additional concepts and examples

---

## Resources

### Official Documentation
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://docs.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)

### Learning Resources
- MDN Web Docs - Server-side Programming
- Express.js Official Guide
- MongoDB University - Free courses
- YouTube Tutorials - Backend development

---

## Notes

- Each project is independent and can be run separately
- Some projects require MongoDB to be running
- Always create a `.env` file for projects that need environment variables
- Use nodemon for development to auto-restart on changes
- Test APIs using Postman or similar tools

---

## License

ISC

---

## Author

Bhautik

---

**Happy Learning! 🚀**

Start with project 01-node and progress sequentially to build your backend development skills from basics to advanced concepts.
