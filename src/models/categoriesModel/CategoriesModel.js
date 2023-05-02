import categoriesSchema from "./CategoriesSchema.js";
// post categories
export const insertCategory = (obj) => {
  return categoriesSchema(obj).save();
};
// get one category
export const getCategoryById = (_id) => {
  return categoriesSchema.findById(_id);
};
// get all categories
export const getAllCategories = () => {
  return categoriesSchema.find();
};
