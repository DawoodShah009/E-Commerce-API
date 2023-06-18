const express = require('express')
const {
  getAllProducts,
  getSingleProduct,
  getFilteredProduct,
} = require('../controllers/product')
const router = express.Router()

router.route('/').get(getAllProducts)
router.route('/query').get(getFilteredProduct)
router.route('/:id').get(getSingleProduct)

module.exports = router
