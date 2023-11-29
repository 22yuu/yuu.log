import asyncHandler from "express-async-handler";
import { Category } from "../model/Category.js";

// category
export const createCategory = asyncHandler(async (req, res) => {
  const newCategory = await Category.create(req.body);

  if (Object.keys(newCategory).length === 0) {
    res.status(400).send("failed create Category...!");
    return;
  }

  const allCategories = await Category.find({});

  // console.log(allCategories);

  res.status(200).json(allCategories);
});

export const getCategoires = asyncHandler(async (req, res) => {
  const categories = await Category.find({});

  res.status(200).json(categories);
});

// sub-categor
