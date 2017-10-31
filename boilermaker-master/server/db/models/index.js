const Orders = require("./orders");
const Cats = require("./cats");
const Reviews = require("./reviews");
const User = require("./user");

Orders.belongsTo(User, { as: "user" });
User.hasMany(Orders);
Reviews.belongsTo(User, { as: "user" });
Reviews.belongsTo(Cats, { as: "cat" });
User.hasMany(Reviews);
Cats.hasMany(Reviews);

module.exports = {
  Orders,
  Cats,
  Reviews,
  User
};
