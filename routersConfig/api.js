const express = require('express')

const API = express.Router()

const accountController = require('../controllers/account.controller')
const productController = require('../controllers/product.controller')
const billController = require('../controllers/bill.controller')
const categoriesController = require('../controllers/categories.controller')
const deliveriesController = require('../controllers/deliveryAddress.controller')

API.use('/account', accountController)
API.use('/product', productController)
API.use('/bill', billController)
API.use('/category', categoriesController)
API.use('/delivery', deliveriesController)

API.use((req, res, next) => {
	res.status(404).json({
		errorMessage: 'API Url Not Found',
	})
})

API.use((err, req, res, next) => {
	res.status(500).json({
		errorMessage: err,
	})
})

module.exports = API
