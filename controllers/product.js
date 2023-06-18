const getAllProducts = async (req, res) => {
  res.send('Get All products...')
}

const getSingleProduct = async (req, res) => {
  res.send('Get single product...')
}

const getFilteredProduct = async (req, res) => {
  res.send('Get Filtered product')
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  getFilteredProduct,
}
