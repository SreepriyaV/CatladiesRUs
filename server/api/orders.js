const router = require('express').Router()
const {Orders, Carts} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Orders.findAll()
    .then(orders => res.json(orders))
    .catch(next)
})
 
router.get('/:userId', (req, res, next) => {
  Orders.findAll( 
    { where: {userId: req.params.userId}}
  )
    .then(order => res.json(order))
    .catch((err)=> res.sendStatus(404,err))
})

router.get('/:userId/:orderId', (req, res, next) => {
  Orders.findById(req.params.orderId)
    .then(order => res.json(order))
   .catch((err)=> res.sendStatus(404,err))
})