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


Orders.cartForUser = function(user)
{
  console.log('im in cartForuse');
 Orders.findOrCreate({where: {userId: user && user.id , status: 'Created'}})
.then(([cart, wascreated])=>cart)
  
}



module.exports = Orders;