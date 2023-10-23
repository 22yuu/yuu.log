import express from "express";
import { conn } from "./config/mongo.js";
import dotenv from "dotenv";

import authRouters from "./routes/Auth.js";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 8080;

// connect mongoDB client
conn();

// middleware
app.use(express.json());

// routes middleware
app.use("/api/auth", authRouters);

// 404 error
app.all("*", (req, res, next) => {
  const err = new Error(`Can't find this route ${req.originalUrl}`);

  next(err);
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
