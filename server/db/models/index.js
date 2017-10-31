const Orders = require("./orders");
const Cats = require("./cats");
const Reviews = require("./reviews");
const User = require("./user");

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
  User
};
