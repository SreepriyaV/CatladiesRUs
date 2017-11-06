const Orders = require('./orders');
const Cats = require('./cats');
const Reviews = require('./reviews');
const User = require('./user');
const Carts = require('./carts');



Orders.belongsTo(User)
User.hasMany(Orders)
User.hasMany(Reviews)
Reviews.belongsTo(User)
Reviews.belongsTo(Cats);
Cats.hasMany(Reviews)
Orders.hasMany(Carts)
Carts.belongsTo(Orders)
Carts.belongsTo(Cats)




module.exports = {
  Orders,
  Cats,
  Reviews,
  User,
  Carts
};
