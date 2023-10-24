import express from "express";
import { conn } from "./config/mongo.js";
import dotenv from "dotenv";

import authRouters from "./routes/Auth.js";
import userRouters from "./routes/User.js";

dotenv.config();

const app = express();
const router = express.Router();
const port = process.env.SERVER_PORT || 8080;

// connect mongoDB client
conn();

// middleware
app.use(express.json());

// routes middleware
app.use("/admin", authRouters);
app.use("/user", userRouters);

router.get("/login", (req, res) => {
  console.log("login...");
  res.send("<h1>login!</h1>");
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
