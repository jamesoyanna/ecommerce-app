import express, { Express, Request, Response } from "express";
import cors from 'cors';
import morgan from 'morgan';
import dotenv from "dotenv";
import connectDB from "./config/db";

const PORT = process.env.PORT || 8000;
const app: Express = express();

// Middlewares to accept json in body
app.use(cors());
app.use(express.json());

// Morgan logging
app.use(morgan("dev"));
dotenv.config();

connectDB();
// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("API IS RUNNING...");
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});