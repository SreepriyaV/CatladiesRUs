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
  hairLength: {
    type: Sequelize.STRING
  },
  profession: {
    type: Sequelize.STRING
  },
  quantity: {
<<<<<<< HEAD
=======
    //not less that zero
>>>>>>> master
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.DECIMAL(12,2),
    allowNull: false
  },
  image: {
<<<<<<< HEAD
=======
    //default val
>>>>>>> master
    type: Sequelize.STRING
  }
});

module.exports = Cats;
