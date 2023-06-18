const express = require('express')
const {
  getProducts,
  addProduct,
  removeProduct,
} = require('../controllers/cart')
const router = express.Router()

router.route('/').get(getProducts).post(addProduct).delete(removeProduct)

module.exports = router
