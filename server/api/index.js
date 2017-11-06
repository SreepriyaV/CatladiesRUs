const router = require('express').Router()
module.exports = router

router.use('/orders', require('./orders'))
router.use('/carts', require('./carts'))
router.use('/users', require('./user'))
router.use('/user', require('./user'))
router.use('/cats', require('./cats'))
router.use('/cart', require('./cart'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
