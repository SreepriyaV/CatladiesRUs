const Sequelize = require("sequelize");
const db = require("../db");

const Orders = db.define("orders", {
  status: {
    type: Sequelize.ENUM('Created', 'Shipped', 'Delivered', 'Cancelled'),
    defaultValue: 'Created'
  },
totalPrice:{
    type: Sequelize.DECIMAL(12,2)
}
});

module.exports = Orders;