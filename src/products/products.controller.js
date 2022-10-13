const uuid = require('uuid')
const Products = require('../models/products.models')

const getAllProducts = async() =>{
  const response = await Products.findAll()
  return response
}

const getProductByID = async(id) =>{
  const response = await Products.findOne({
    where: {
      id: id
    }
  })
  return response
}

const createProduct = async(data) =>{
  const newProduct = {
    id: uuid.v4(),
    name: data.name,
    category: data.category,
    price: data.price,
    isAvailable: data.isAvailable
  }
  const response = await Products.create(newProduct)
  return response
}

const updateProduct = async(id, data) =>{
  const product = {
    name: data.name,
    category: data.category,
    price: data.price,
    isAvailable: data.isAvailable
  }
  const response = await Products.update(product, {
    where: {
      id: id
    }
  })
  return response
}

const deleteProduct = async(id) =>{
  const response = await Products.destroy({
    where: {
      id: id
    }
  })
  return response
}

module.exports = {
  getAllProducts,
  getProductByID,
  updateProduct,
  createProduct,
  deleteProduct
}