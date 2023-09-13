import { readdir } from 'fs/promises';
import path from 'path';

export async function getDirents(path: string) {
  try {
    const dirents = await readdir(path, { withFileTypes: true });
    return dirents;
  } catch (error) {
    console.error(error);
  }
}

export async function getCategories() {
  const regex = /^\.|^_/;
  const obsidianPath = path.join(process.cwd(), 'src', '_posts');
  const dirents = await getDirents(obsidianPath);
  //   console.log(dirents);

  const categories = dirents
    ?.filter((dirent) => dirent.isDirectory() && !regex.test(dirent.name))
    .map((dirent) => dirent.name);

  //   console.log(categories);
  return categories;
}
