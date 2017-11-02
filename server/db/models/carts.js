const Sequelize = require("sequelize");
const db = require("../db");

const Carts = db.define("carts", {

  quantity: {
    type: Sequelize.INTEGER
  },
  purchasePrice:{
    type: Sequelize.DECIMAL(12,2)
  }

});

module.exports = Carts;