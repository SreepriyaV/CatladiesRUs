const router = require('express').Router();
const { Orders, Carts } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Orders.findAll()
    .then(orders => res.json(orders))
    .catch(next);
});

router.get('/:userId', (req, res, next) => {
  Orders.findAll({
    where: { userId: req.params.userId }
  })
    .then(order => res.json(order))
    .catch(next);
});

router.get('/:userId/:orderId', (req, res, next) => {
  Orders.findById(req.params.orderId)
    .then(order => res.json(order))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Orders.create({ totalPrice: req.body.totalPrice, userId: req.body.userId })
    .then(order => order.id)
    .then(orderId => {
      Carts.bulkCreate(
        req.body.cart.map((cat, index) => {
          return {
            quantity: req.body.quantity[index],
            purchasePrice: cat.price,
            catId: cat.id,
            orderId: orderId
          };
        })
      );
      return orderId;
    })
    .then(orderId => {
      return Orders.findById(orderId);
    })
    .then(order => res.json(order))
    .catch(next);
});
