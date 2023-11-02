// @ts-nocheck
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const createAccessToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const createRefreshToken = (user_id) => {
  return jwt.sign({ user_id }, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '14d',
  });
};

export const verifyToken = (token) => {
  console.log(`verify ${token}`);
  return jwt.verify(token, process.env.JWT_SECRET);
};

export const isExpired = (token) => {
  const current = new Date().getTime();
  const decode = verifyToken(token);

  if (decode.exp * 1000 < current) {
    // expired token
    console.log('Token expired');
    return true;
  } else {
    // valid token
    console.log('Valid Token');
    return false;
  }
};
