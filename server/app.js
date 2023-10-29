import express from 'express';
import cors from 'cors';
import { conn } from './config/mongo.js';
import dotenv from 'dotenv';

import authRouters from './routes/Auth.js';
import userRouters from './routes/User.js';
import morgan from 'morgan';

dotenv.config();

const app = express();
const router = express.Router();
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
app.use(cors());

// routes middleware
app.use('/admin', authRouters);
app.use('/user', userRouters);

router.get('/login', (req, res) => {
  console.log('login...');
  res.send('<h1>login!</h1>');
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
