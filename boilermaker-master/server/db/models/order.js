const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  cart: {
    type: Sequelize.ARRAY(Sequelize.STRING),
   
  },
  status: {
    type: Sequelize.STRING,
    validate:{
        isIn:[['Created',  'Processing', 'Cancelled', 'Completed']]
    }
  },
totalPrice:{
    type: Sequelize.STRING
}
});

module.exports = Order;
