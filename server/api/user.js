const router = require("express").Router();
const { User } = require("../db/models");
module.exports = router;

router.get('/:userName', (req, res, next) => {
  User.findOne({ where: { userName: req.params.userName } })
    .then(user => res.json(user))
    .catch(next);
});

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