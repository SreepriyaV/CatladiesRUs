'use strict';
import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchOrders} from '../store/reducers/orders-reducer';
import {fetchCarts} from '../store/reducers/cart-reducer';

class AllOrders extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: Number(this.props.match.params.userId)
    }
  }
  
  componentDidMount() {
    this.props.getCartItems();
    this.props.getOrders(this.state.user)
  }

  render() {
    const {orders} = this.props;
    const {carts} = this.props;
    console.log("cart items are", carts);
    
    return (
      <div>
        <h2> {this.state.user}'s Purchases are: </h2>
        { orders.map( order => (
          <ul key={order.id}>
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
    carts: state.carts
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
