const Category = require("../../models/category").model;

const getAll = async () => {
  return await Category.find({}).exec();
};

const getById = async (id) => await Category.findById(id).exec();

const create = async (name) => {
  const category = new Category({ name });
  return await category.save();
};

const update = async (id, data) => {
  const { name, products } = data;

  return await Category.findByIdAndUpdate(id, { name, products }).exec();
};

const del = async (id) => await Category.findByIdAndDelete(id).exec();

module.exports = {
  create,
  del,
  update,
  getById,
  getAll,
};
