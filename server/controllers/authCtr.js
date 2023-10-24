// @ts-nocheck
import User from "../model/User.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import { createToken } from "../utils/generateToken.js";

export const login = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });

  if (!user || !bcrypt.compare(req.body.password, user.password)) {
    return next(new Error("Invalid Password..."));
  }

  const token = createToken(user._id);

  delete user._doc.password;

  res.status(200).json({ token, data: user });
});
