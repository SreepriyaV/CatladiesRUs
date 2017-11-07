const router = require('express').Router()
const {Orders, Carts} = require('../db/models')

module.exports = router


router.get('/', (req, res)  => res.send(req.cart))

 
// router.get('/:catId', (req, res, next) => {
//   Cats.findById(req.params.catId)
//     .then(cat => res.json(cat))
//     .catch(next)
// })

