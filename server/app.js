import express from 'express';
import MariaDB from './database/maria.js';
const app = express();
const port = 8080;

// mariaDB connect
const maria = new MariaDB();

maria.initialize();
const res = await maria.getTestData();
console.log(res);

app.listen(prot, () => {
  console.log(`API server listening on port ${port}`);
});
