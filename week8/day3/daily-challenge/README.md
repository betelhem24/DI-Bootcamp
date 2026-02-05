# Week 8 Day 3 Daily Challenge - Data and Server

## Project Overview

A full-stack application connecting a React frontend with an Express backend.
- **Frontend**: React (Vite) fetches data and submits forms.
- **Backend**: Express server handles GET/POST requests.

## Project Structure

```
week8/day3/daily-challenge/
├── server/       # Express Backend
│   └── server.js
└── client/       # React Frontend
    └── src/App.jsx
```

## Features

1.  **GET Request**: React fetches "Hello From Express" from `http://localhost:3000/api/hello` on load.
2.  **POST Request**: React submits form input to `http://localhost:3000/api/world`.
3.  **Response Display**: Server echoes the input back, which is displayed in the UI.

## Installation & Running

### 1. Start the Server (Backend)

Open a terminal:
```bash
cd week8/day3/daily-challenge/server
npm install
node server.js
```
The server will run on **http://localhost:3000**.

### 2. Start the Client (Frontend)

Open a **new** terminal:
```bash
cd week8/day3/daily-challenge/client
npm install
npm run dev
```
The client will run on **http://localhost:5173** (or similar).

## License

Educational Project - DI Bootcamp
