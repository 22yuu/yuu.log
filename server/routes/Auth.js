import express from 'express';
import { dummy, login, reissueAccesToken } from '../controllers/authCtr.js';
import { loginValidator } from '../utils/validators/authValidator.js';

const router = express.Router();

router.post('/login', loginValidator, login);
router.post('/logout', reissueAccesToken);
router.post('/refresh', reissueAccesToken);
router.post('/dummy', dummy);

export default router;
