// @ts-nocheck
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
