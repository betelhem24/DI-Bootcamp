# Week 11 Day 3 - Mini Project: Collaborative Storytelling App

## Project Overview

Full-stack PERN (PostgreSQL, Express, React, Node.js) application for collaborative storytelling with JWT authentication and Redux state management.

## Project Structure

```
story-app/
├── backend/          # Express.js + TypeScript backend
├── frontend/         # React + Redux + TypeScript frontend
└── types/            # Shared TypeScript types
```

## Technologies Used

### Backend
- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- TypeScript
- bcrypt

### Frontend
- React 18
- Redux Toolkit
- TypeScript
- Vite
- Axios

## Features

- ✅ User authentication with JWT
- ✅ Refresh token mechanism
- ✅ Story creation and collaboration
- ✅ Redux state management
- ✅ Full TypeScript support
- ✅ RESTful API

## Installation

### Backend Setup
```bash
cd week11/day3/mini-project/story-app/backend
npm install

# Create .env file with:
# DATABASE_URL=your_postgresql_connection_string
# JWT_SECRET=your_secret_key
# REFRESH_TOKEN_SECRET=your_refresh_secret

npm run dev
```

### Frontend Setup
```bash
cd week11/day3/mini-project/story-app/frontend
npm install
npm run dev
```

## API Endpoints

- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/refresh` - Refresh access token
- `GET /stories` - Get all stories
- `POST /stories` - Create new story
- `PUT /stories/:id` - Update story
- `DELETE /stories/:id` - Delete story

## Key Concepts

- Full-stack TypeScript development
- JWT authentication with refresh tokens
- Redux Toolkit for state management
- PERN stack architecture
- RESTful API design
- Secure password hashing

## License

Educational project - DI Bootcamp
