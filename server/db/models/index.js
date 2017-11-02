const Orders = require("./orders");
const Cats = require("./cats");
const Reviews = require("./reviews");
const User = require("./user");
const Carts = require("./carts");

Orders.belongsTo(User);
User.hasMany(Orders);
Reviews.belongsTo(User);
Reviews.belongsTo(Cats);
User.hasMany(Reviews);
Cats.hasMany(Reviews);
Carts.belongsTo(Cats);
Carts.belongsTo(Orders);


module.exports = {
  Orders,
  Cats,
  Reviews,
  User,
  Carts
};
