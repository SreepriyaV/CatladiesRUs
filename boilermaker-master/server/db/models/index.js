const Order = require("./order");
const Cats = require("./cats");
const Reviews = require("./reviews");
const User = require("./user");

Order.belongsTo(User, { as: "user" });
User.hasMany(Order);
Reviews.belongsTo(User, { as: "user" });
Reviews.belongsTo(Cats, { as: "cat" });
User.hasMany(Reviews);
Cats.hasMany(Reviews);

module.exports = {
  Order,
  Cats,
  Reviews,
  User
};
