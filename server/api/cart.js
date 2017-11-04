const router = require('express').Router()
const {Orders, Carts, User} = require('../db/models')

module.exports = router

function withCart(req, res, next)
{
    if (req.cart) return next();

    const {orderId} = req.session
    if (orderId)
        {
            Orders.findById(orderId, {include: [Carts]})
            .then(order => {
                req.cart = order;
            })
            .then(next)
            .catch(next)
        }

        Orders.cartForUser(req.user)
        .then((order) => {

            req.cart = order;
        })
        .then(next)
        .catch(next)

        //user has a order that is in the cart already 
        // if(req.user){
        //     return req.User.getCart()
        // }

        // Orders.create({userId: req.userId})
        // .then(order => {
        //     req.session.orderId = order.id;
        //     return order;
        // })
        // .then((order) => {

        //     req.cart = order;
        // })
        // .then(next)
        // .catch(next)

}


router.use(withCart).get('/', (req, res)  => res.send(req.cart)).put('/', (req, res, next) => {
    console.log("im here");
    const {catId,quantity}= req.body;
    req.cart.addCats(catId, {quantity})
    .then(()=> res.send("done"))
    .catch(next)
})



