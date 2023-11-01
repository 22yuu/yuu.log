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
  const refreshToken = createRefreshToken(user._id);

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
  const accessToken = req.headers['authorization'].split(' ')[1];
  const refreshToken = req.cookies['refreshToken'];

  // Guest Mode
  if (!accessToken && !refreshToken) {
    console.log('Logined Guest');
    return;
  }

  // refresh 토큰이 없으면 401
  if (!refreshToken) {
    return res.status(401).send('Access Denied. No refresh token provided...');
  }
  // console.log(`refresh token ${refreshToken}`);
  const { user_id: userId } = verifyToken(refreshToken);
  const user = await User.findById(userId);

  delete user._doc.password;

  // 아직 유효한 토큰일 경우
  if (accessToken !== 'undefined' && !isExpired(accessToken)) {
    return res.send({ accessToken, user });
  }

  // 토큰이 없거나 만료될 경우
  res.send({ accessToken: createAccessToken(user), user });
});

export const dummy = asyncHandler(async (req, res, next) => {
  const accessToken = req.headers['authorization'];
  const getRefreshToken = req.cookies['refreshToken'];

  console.log(`server accessToken: ${accessToken}`);
  console.log(`server refreshToken: ${getRefreshToken}`);
});
