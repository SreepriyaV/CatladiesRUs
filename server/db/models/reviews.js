const Sequelize = require("sequelize");
const db = require("../db");

const Reviews = db.define("reviews", {
  description: {
    //few more vaid
    type: Sequelize.TEXT
  },
  stars: {
    type: Sequelize.INTEGER
  }
});

module.exports = Reviews;