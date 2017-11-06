const router = require('express').Router();
const { User } = require('../db/models');
module.exports = router;

//view a single user by username
router.get('/:userName', (req, res, next) => {
  User.findOne({ where: { userName: req.params.userName } })
    .then(user => res.json(user))
    .catch(next);
});

//update a sigle user by username
router.put('/:userName', (req, res, next) => {
  User.update(
    { isAdmin: req.body.isAdmin },
    {
      where: { userName: req.params.userName },
      returning: true
    }
  )
    .then(user => res.json(user))
    .catch(next);
});
