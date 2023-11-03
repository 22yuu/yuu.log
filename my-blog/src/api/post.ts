import { Post } from '@/types/posts';
import { BASE_URL } from './const';
import path from 'path';
import { readFile } from 'fs/promises';

export const writePost = async () => {
  const res = await fetch(`${BASE_URL}/post/write`);
};

export const editPost = async () => {};
export const getPost = async () => {};
export const allPosts = async () => {};
export const deletePost = async () => {};
export const getFakePosts = async () => {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) =>
      posts.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1))
    );
};
