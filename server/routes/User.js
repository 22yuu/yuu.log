// @ts-nocheck
import express from "express";
import { createUser } from "../controllers/userCtr.js";

const router = express.Router();

router.post("/create", createUser);

export default router;
