// @ts-nocheck
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const createAccessToken = (id) => {
  console.log(id);
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const createRefreshToken = () => {
  return jwt.sign({}, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '14d',
  });
};
