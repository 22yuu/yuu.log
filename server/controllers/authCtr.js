// @ts-nocheck
import User from '../model/User.js';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

import {
  createAccessToken,
  createRefreshToken,
} from '../utils/generateToken.js';
import Token from '../model/Token.js';

dotenv.config();

export const login = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });

  if (!user || !bcrypt.compare(req.body.password, user.password)) {
    return next(new Error('Invalid Password...'));
  }

  const accessToken = createAccessToken(user._id);
  const refreshToken = createRefreshToken();

  delete user._doc.password;

  console.log(user);

  res
    .cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    })
    .header('Authorization', accessToken)
    .send(user);
});
