# Week 11 Day 1 Exercise XP - JWT Authentication API

## Project Overview

A secure Node.js API implementing JWT Authentication. It features user registration, login, token refresh, and protected routes using `jsonwebtoke`, `bcrypt`, and `cookie-parser`.

## Features

- **User Registration**: Hashes passwords using `bcrypt` before storing.
- **User Login**: Validates credentials and issues an Access Token (short-lived) and a Refresh Token (long-lived, HTTP-only cookie).
- **Protected Routes**: Middleware verifies the Access Token.
- **Token Refresh**: Endpoint to issue new Access Tokens using the Refresh Token cookie.
- **Logout**: Clears the Refresh Token cookie.

## API Endpoints

- `POST /auth/register`: Register a new user (`{ "username": "...", "password": "..." }`).
- `POST /auth/login`: Login user (`{ "username": "...", "password": "..." }`). Returns `{ "accessToken": "..." }`.
- `GET /auth/refresh`: Refresh Access Token (requires `refreshToken` cookie).
- `GET /auth/logout`: Logout user.
- `GET /auth/protected`: Access a protected resource (header `Authorization: Bearer <token>`).

## Installation

```bash
cd week11/day1/exercise-xp
npm install
node app.js
```

## Environment Variables

- `JWT_SECRET`: Secret key for Access Tokens.
- `JWT_REFRESH_SECRET`: Secret key for Refresh Tokens.

## License

Educational Project - DI Bootcamp
