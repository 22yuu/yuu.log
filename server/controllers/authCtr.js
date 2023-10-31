// @ts-nocheck
import User from '../model/User.js';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

import {
  createAccessToken,
  createRefreshToken,
  isExpired,
  verifyToken,
} from '../utils/jwt.js';

dotenv.config();

export const login = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });

  const isCorrectPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!user || !isCorrectPassword) {
    return next(new Error('Invalid Password...'));
  }

  delete user._doc.password;

  const accessToken = createAccessToken(user);
  const refreshToken = createRefreshToken(user);

  res
    .cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    })
    .send({ accessToken, user });
});

export const logout = asyncHandler(async (req, res, next) => {});

// access 토큰 만료 시 재발급
export const reissueAccesToken = asyncHandler(async (req, res, next) => {
  const accessToken = req.headers['authorization'];
  const refreshToken = req.cookies['refreshToken'];

  // refresh 토큰이 없으면 401
  if (!refreshToken) {
    return res.status(401).send('Access Denied. No refresh token provided...');
  }

  const { user } = verifyToken(refreshToken);

  console.log(user);

  // 아직 유효한 토큰일 경우
  if (!isExpired(accessToken)) {
    return res.send({ accessToken, user });
  }

  res.send({ accessToken: createAccessToken(user), user });
});

export const dummy = asyncHandler(async (req, res, next) => {
  const accessToken = req.headers['authorization'];
  const getRefreshToken = req.cookies['refreshToken'];

  console.log(`server accessToken: ${accessToken}`);
  console.log(`server refreshToken: ${getRefreshToken}`);
});
