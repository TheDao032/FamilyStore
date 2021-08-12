const ajvLib = require('ajv')

const newBill = (req, res, next) => {
	const shema = {
  		type: 'object',
  		properties: {
			accId: { type: 'string', pattern: '' },
    		totalPrice: { type: 'string', pattern: '' },
    		totalQuantity: { type: 'string', pattern: '' },
    		listProductId: { 
				type: 'array', 
				items: {
					type: 'object',
					properties: {
						prodId: { type: 'string', pattern: '' },
						prodQuantity:{type:'integer'}
					},
					required: ["prodId", "prodQuantity"],
					additionalProperties: true
				},
			}
  		},
		required: ["accId", "totalPrice", "totalQuantity"],
		additionalProperties: true
	}

	const ajv = new ajvLib({
		allErrors: true
	})

	const validator = ajv.compile(shema)
	const valid = validator(req.body)

	if (!valid) {
		return res.status(400).json(validator.errors[0])
	}

	next()
}

const listBillDetail = (req, res, next) => {
	const shema = {
  		type: 'object',
  		properties: {
			accId: { type: 'integer' },
    		billId: { type: 'string', pattern: '' }
  		},
		required: ["accId", "billId"],
		additionalProperties: true
	}

	const ajv = new ajvLib({
		allErrors: true
	})

	const validator = ajv.compile(shema)
	const valid = validator(req.body)

	if (!valid) {
		return res.status(400).json(validator.errors[0])
	}

	next()
}
const validateNumberOfProduct =  function (productList){

}

module.exports = {
    newBill,
    listBillDetail,
	validateNumberOfProduct
}