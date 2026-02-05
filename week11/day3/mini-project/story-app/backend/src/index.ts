import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// 1. Initialize environment variables
dotenv.config();

// 2. Setup the Express App
const app = express();

// 3. Setup Middleware
app.use(cors()); // Lets the frontend talk to the backend
app.use(express.json()); // Lets the server read JSON data

// 4. Our first "Route" (The home page of our API)
app.get('/', (req: Request, res: Response) => {
  res.send('The Storytelling App Server is Alive! 🚀');
});

// 5. Start the Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on: http://localhost:${PORT}`);
});