const router = require('express').Router();
const { User } = require('../db/models');
module.exports = router;

//View all users from /user
router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

//view a single user by id
router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(next);
});

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
