import express from "express";
import { createCategory, getCategoires } from "../controllers/categoryCtr.js";

const router = express.Router();

router.post("/create", createCategory);
router.get("/get-all", getCategoires);

export default router;
