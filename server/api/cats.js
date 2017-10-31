const router = require('express').Router()
const {Cats} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Cats.findAll()
    .then(cats => res.json(cats))
    .catch(next)
})
 