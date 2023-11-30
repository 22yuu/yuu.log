import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategoires,
} from "../controllers/categoryCtr.js";

const router = express.Router();

router.post("/create", createCategory);
router.get("/get-all", getCategoires);
router.delete("/delete", deleteCategory);

export default router;
