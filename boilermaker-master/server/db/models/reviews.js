const Sequelize = require("sequelize");
const db = require("../db");

const Reviews = db.define("reviews", {
  description: {
    type: Sequelize.STRING
  },
  stars: {
    type: Sequelize.STRING
  }
});

module.exports = Reviews;
