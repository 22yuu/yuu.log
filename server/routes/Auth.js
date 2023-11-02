import express from 'express';
import {
  dummy,
  login,
  logout,
  reissueAccesToken,
} from '../controllers/authCtr.js';
import { loginValidator } from '../utils/validators/authValidator.js';

const router = express.Router();

router.post('/login', loginValidator, login);
router.get('/logout', logout);
router.post('/refresh', reissueAccesToken);
router.post('/dummy', dummy);

export default router;
