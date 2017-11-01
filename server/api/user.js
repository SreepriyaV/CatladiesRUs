const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router


router.get('/:userName', (req, res, next)=>{
  User.findOne({where: {userName: req.params.userName}})
  .then(user => res.json(user))
    .catch(next)
})

router.put('/:userName/:status', (req, res, next) => {
  User.update({status: req.body.status}, {
    where: { userName: req.params.userName },
    returning: true
  })
    .then(user => res.json(user))
    .catch(next);
})
