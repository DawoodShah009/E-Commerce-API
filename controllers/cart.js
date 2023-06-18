const getProducts = async (req, res) => {
  res.send('Get All products from cart...')
}

const addProduct = async (req, res) => {
  res.send('Add product to your cart...')
}

const removeProduct = async (req, res) => {
  res.send('Remove product from cart...')
}

module.exports = {
  getProducts,
  addProduct,
  removeProduct,
}
