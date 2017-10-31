const Sequelize = require("sequelize");
const db = require("../db");

const Orders = db.define("orders", {
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
    type: Sequelize.DECIMAL(12,2)
}
});

module.exports = Orders;