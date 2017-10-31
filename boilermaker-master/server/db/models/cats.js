
const Sequelize = require("sequelize");
const db = require("../db");

const Cats = db.define("cats", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  breed: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  color: {
    type: Sequelize.STRING
  },
  hairlength: {
    type: Sequelize.DECIMAL(12, 2)
  },
  celebrityStatus: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false
  },
  photo: {
    type: Sequelize.STRING
  }
});

module.exports = Cats;
