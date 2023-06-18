//Configuration
require('express-async-errors')
require('dotenv').config()
//Database
const connectDB = require('./db/connect')
//Imports
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const notFoundMiddleware = require('./middlewares/notfound')
//App
const express = require('express')
const app = express()

app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Welcome...')
// })

app.use('/api/v1/auth', userRoute)
app.use('/api/v1/product', productRoute)
app.use('/api/v1/cart', cartRoute)
// app.use('/api/v1/cart/item', cartRoute)

//routes
//user
// post  api/v1/auth/register
// post  api/v1/auth/login

//products
// get        api/v1/products    ... get all products
// get:id     api/v1/products/:id
// get?query  api/v1/products/search ... filtering

//cart
// post     api/v1/cart/item ....... adding item to cart
// get      api/v1/cart/item/:id ..... geting particular item from cart
// delete   api/v1/cart/items/:id ..... deleting item from cart

// order --> ye phr kbhi ;}
app.use(notFoundMiddleware)
const port = process.env.PORT || 3000
const start = async () => {
  try {
    //connectDB
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}
start()
