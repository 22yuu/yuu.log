import express from 'express';
import MariaDB from './database/maria.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 8080;

// mariaDB connect
const maria = new MariaDB();

maria.initialize();
const res = await maria.getTestData();
console.log(res);

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
