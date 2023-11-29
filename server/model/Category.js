import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subCategories: [{ type: String, required: false }],
});

export const Category = mongoose.model("Category", CategorySchema);
