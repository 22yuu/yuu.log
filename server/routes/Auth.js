import express from "express";
import { login } from "../controllers/authCtr.js";
import { loginValidator } from "../utils/validators/authValidator.js";

const router = express.Router();

router.post("/login", loginValidator, login);

export default router;
