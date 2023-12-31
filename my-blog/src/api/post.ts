import { Post } from '@/types/posts';
import { BASE_URL } from './const';
import path from 'path';
import { readFile } from 'fs/promises';

export const writePost = async (token: string, data: string) => {
  // console.log(data);
  const res = await fetch(`${BASE_URL}/post/write`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
    body: JSON.stringify({ data: data }),
  });

  console.log(res.json());

  return res;
};

export const editPost = async () => {};
export const getPost = async () => {};
export const allPosts = async () => {};
export const deletePost = async () => {};

// export const getFakePost = async (id: string) => {
//   const filePath = path.join(process.cwd(), 'data', 'posts.json');
//   return readFile(filePath, 'utf-8')
//     .then<Post[]>(JSON.parse)
//     .then((posts) => {
//       return posts.filter((post) => post._id == id)[0];
//     });
// };

// export const getFakeAllPosts = async () => {
//   const filePath = path.join(process.cwd(), 'data', 'posts.json');
//   return readFile(filePath, 'utf-8')
//     .then<Post[]>(JSON.parse)
//     .then((posts) =>
//       posts.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1))
//     );
// };
