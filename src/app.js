const express = require('express')
const app = express()
const config = require('./config')

app.use(express.json())

//* Database auth and sync
const initModels = require('./models/initModels')
const db = require('./utils/database')

db.authenticate()
  .then(() => console.log('DB authenticated'))
  .catch((err) => console.log(err))
db.sync()
  .then(()=> console.log('DB synced!'))
  .catch((err) => console.log(err))
  initModels()

//* App.js connection with the router
const productsRouter = require('./products/products.router')
app.use('/api/v1/products/', productsRouter)

//* App listening initialization
app.listen(config.port, () =>{
  console.log(`Server is listening in port ${config.port}`)
})