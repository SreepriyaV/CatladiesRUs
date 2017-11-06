const Orders = require('./orders');
const Cats = require('./cats');
const Reviews = require('./reviews');
const User = require('./user');
const Carts = require('./carts');

Orders.belongsTo(User);

Orders.belongsTo(Cats);
Cats.belongsTo(Orders);
Carts.belongsTo(Orders)
Orders.hasMany(Carts);
Carts.belongsTo(Cats)

//Orders.belongsToMany(Cats, {through: Carts});
//Cats.belongsToMany(Orders, {through: Carts});

/*
Order hasMany Carts
Carts belongTo Orders

Carts belongTo Cats

*/

Orders.belongsTo(User);
User.hasMany(Orders);
Reviews.belongsTo(User);
Reviews.belongsTo(Cats);
User.hasMany(Reviews);
Cats.hasMany(Reviews);

module.exports = {
  Orders,
  Cats,
  Reviews,
  User,
  Carts
};
