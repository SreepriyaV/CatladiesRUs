const router = require('express').Router()
const {Cats} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Cats.findAll()
    .then(cats => res.json(cats))
    .catch(next)
})
 
router.get('/:catId', (req, res, next) => {
  Cats.findById(req.params.catId)
    .then(cat => res.json(cat))
    .catch(next)
})