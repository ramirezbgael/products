const router = require('express').Router()
const productsServices = require('./products.services')

//* Route '/'
router.get('/', productsServices.getAllProducts)
router.post('/', productsServices.postProduct)

//* Route '/:id'
router.get('/:id', productsServices.getProductByID)
router.put('/:id', productsServices.putProduct)
router.patch('/:id', productsServices.patchProduct)
router.delete('/:id', productsServices.deleteProduct)

module.exports = router