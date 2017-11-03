'use strict';
import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchOrders} from '../store/reducers/orders-reducer';
import {fetchCarts} from '../store/reducers/cart-reducer';
import {fetchUser} from '../store/reducers/singleUser';

class AllOrders extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userId: Number(this.props.match.params.userId)
    }
  }
  
  componentDidMount() {
    this.props.getCartItems();
    this.props.getOrders(this.state.userId);
    this.props.getUser(this.state.userId);
  }

  render() {
    const {orders} = this.props;
    const {cart} = this.props;
    const {user} = this.props;
    console.log("props", this.props);
    console.log("cart", cart);
    console.log("user", user);
    //const cartOrder = this.props.cart.filter(cart => cart.orderId === order.id)

    return (
      <div>
        <h2> {this.state.userId}'s Purchases are: </h2>
        { orders.map( order => (
          <ul key={order.id}>
            Order #{order.id}:
  
            { cart.map( cart => 
            // we need to ge the carts of  SPECIFIC ORDER
            // we have : orderid 
            
            
            { if(cart.orderId == order.id) {
              <ul key={cart.id}> 
                Cart #: {cart.orderId}
              </ul>
            }
            })}

            <li> Total Cost: {order.totalPrice} </li>
            <li> Status: {order.status} </li>
          </ul>
        ))}
      </div>
    );
  }
}

//CONTAINER
const mapState = state => {
  return {
    orders: state.orders,
    cart: state.cart,
    user: state.user
  };
};

const mapDispatch = dispatch => {
  return {
      getOrders: (userId) => {
        return dispatch(fetchOrders(userId));
      },
      getCartItems: (orderId) => {
        return dispatch(fetchCarts(orderId));
      },
      getUser: (username) => {
        return dispatch(fetchUser(username));
      }
  };
};

export default connect(mapState, mapDispatch)(AllOrders);
