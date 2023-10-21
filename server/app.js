import express from "express";
import { conn } from "./config/mongo.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 8080;

// connect mongoDB client
conn();

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
