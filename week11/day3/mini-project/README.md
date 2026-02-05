# Week 11 Day 3 Mini-Project - Collaborative Storytelling App

## Project Overview

A Full Stack Collaborative Storytelling application built as a Monorepo.

## Project Structure

- **`backend/`**: Node.js, Express, PostgreSQL API.
  - Authentication (JWT + Refresh Tokens + Cookies).
  - Routes, Controllers, Middleware architecture.
- **`frontend/`**: React, TypeScript, Redux Toolkit (Vite).
  - Authenticated State Management.
  - Story viewing and creation.

## Installation

### Backend
```bash
cd backend
npm install
# Set up .env with DATABASE_URL and JWT_SECRET
node app.js
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Features

- User Registration & Login
- Secure Token Management
- Story Management (CRUD)

## License

Educational Project - DI Bootcamp
