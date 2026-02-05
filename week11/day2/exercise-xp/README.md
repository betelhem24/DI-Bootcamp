# Week 11 Day 2 Exercise XP - JWT Authentication API (Reinforcement)

## Project Overview

This project reinforces the concepts of JWT Authentication in Node.js, implementing a secure API with Registration, Login, and Protected Routes.

## Features

- **Auth**: User registration and login with bcrypt password hashing.
- **JWT**: Issuance of Access and Refresh tokens.
- **Security**: HttpOnly cookies for refresh token storage.
- **Protection**: Middleware to guard routes against unauthorized access.

## API Endpoints

- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/refresh`
- `GET /auth/logout`
- `GET /auth/protected`

## Installation

```bash
cd week11/day2/exercise-xp
npm install
node app.js
```

## License

Educational Project - DI Bootcamp
