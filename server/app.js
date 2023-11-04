import express from 'express';
import cors from 'cors';
import { conn } from './config/mongo.js';
import dotenv from 'dotenv';

import authRouters from './routes/Auth.js';
import postRouters from './routes/Post.js';

import morgan from 'morgan';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 8080;

// connect mongoDB client
conn();

// middleware
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined')); // 배포환경일 때
} else {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());

// routes middleware
app.use('/admin', authRouters);
app.use('/post', postRouters);

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
