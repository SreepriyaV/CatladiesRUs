'use strict';
import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchOrders} from '../store/reducers/orders-reducer';
import {fetchCarts} from '../store/reducers/cart-reducer';

class AllOrders extends Component {  
  componentDidMount() {
    this.props.getOrders(this.props.user.id);
    this.props.getCartItems();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.userName !== nextProps.user.userName) {
      this.props.getOrders(nextProps.user.id);
    }
}

  render() {
    const {user} = this.props;
    const {orders} = this.props;
    const {cart} = this.props;

    return (
      <div>
        <h3> {user.userName}'s Purchases: </h3>
        { orders.map( order => (
          <div key={order.id}>
            <Link to={`/orders/users/${order.id}`}>
            <h3> Order #{order.id}: </h3>
            </Link>

            { cart.map( (cart,i) => {
              if(order.id === cart.orderId) {
                return (
                <ul key={i}> 

                  <orderstyle>  
                  <div key={cart.cat.id}>
                    <h4 id="orderstyleid"> {cart.cat.name} </h4>
                    <img src={cart.cat.image} alt="cats" height="100" />
                  </div>  
                  </orderstyle>

                </ul> 
                )
              }
            })}

            <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            Total Cost: {order.totalPrice}
            <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            Status: {order.status} 
              { (order.status == "Delivered") ? " to "+user.address : null }
            <br /><br /><br /><br /><br /><br />
          </div>
        ))}
      </div>
      
    );
  }
}

//CONTAINER
const mapState = state => {
  return {
    orders: state.orders,
    cart: state.cart
  };
};

const mapDispatch = dispatch => {
  return {
      getOrders: (userId) => {
        return dispatch(fetchOrders(userId));
      },
      getCartItems: () => {
        return dispatch(fetchCarts());
      }
  };
};

export default connect(mapState, mapDispatch)(AllOrders);