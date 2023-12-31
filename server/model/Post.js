// @ts-nocheck
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'title is required'],
      trim: true,
    },
    body: {
      type: String,
      required: [true, 'post content is required'],
      trim: true,
    },
    thumbnail: {
      type: String,
    },
    images: {
      type: Array,
    },
    hidden: {
      type: Boolean,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'post category is required'],
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory',
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', PostSchema);
export default Post;
