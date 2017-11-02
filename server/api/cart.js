const router = require('express').Router()
const {Orders, Carts} = require('../db/models')

module.exports = router

function withCart(req,res,next)
{
    if(req.cart) return next();

    const {orderId}= req.session
    if(orderId)
        {
            Orders.findById(orderId, {include:[Carts]})
            .then(order =>{
                req.cart=order;
            })
            .then(next)
            .catch(next)
        }


        Orders.create({userId: req.userId})
        .then(order => {
            req.session.orderId = order.id;
            return order;
        })
        .then((order) => {

            req.cart = order;
        })
        .then(next)
        .catch(next)

}





router.use(withCart).get('/', (req, res)  => res.send(req.cart))


 
router.get('/:catId', (req, res, next) => {
  Cats.findById(req.params.catId)
    .then(cat => res.json(cat))
    .catch(next)
})

