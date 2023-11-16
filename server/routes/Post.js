import express from 'express';
import {
  allPosts,
  deletePost,
  editPost,
  getPost,
  writePost,
} from '../controllers/postCtr.js';

const router = express.Router();
router.use(express.json());
router.post('/write', writePost);
router.put('/edit', editPost);
router.get('/all-posts', allPosts);
router.get('/:id', getPost);
router.delete('/delete', deletePost);

export default router;
