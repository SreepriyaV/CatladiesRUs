const router = require('express').Router()
const {Carts} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Carts.findAll()
    .then(carts => res.json(carts))
    .catch(next)
})

router.get('/:orderId', (req, res, next) => {
  Carts.findAll( {where: {orderId: req.params.orderId}})
    .then(order => res.json(order))
    .catch(next)
})