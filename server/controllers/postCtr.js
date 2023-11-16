import Post from '../model/Post.js';
import asyncHandler from 'express-async-handler';

// create post
export const writePost = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies['refreshToken'];
  console.log(refreshToken);
  console.log(req.body);

  // const post = await Post.create(req.body);

  // res.status(201).send({ data: post });
});

// update post
export const editPost = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findById(id);

  if (!post) {
    return next(new Error(`No Post...!`));
  }

  const doc = await Post.findOneAndUpdate(post._id, req.body, { new: true });

  res.status(200).json({ data: doc });
});

// get all posts
export const allPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();

  res.status(200).json({ size: posts.length, data: posts });
});

// get a single post
export const getPost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(new Error(`No Post...!`));
  }

  res.send(post);
});

// delete post
export const deletePost = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const post = await Post.findById(id);

  if (!post) {
    return next(new Error(`No Post...!`));
  }

  await Post.findByIdAndDelete(id);

  res.status(204).send();
});
