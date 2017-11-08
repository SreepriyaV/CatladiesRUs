"use strict";
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrders } from "../store/reducers/orders-reducer";
import { fetchCarts } from "../store/reducers/lineItem-reducer";
import { fetchUserById } from "../store/reducers/singleUser";

class AllOrders extends Component {
  componentDidMount() {
    //if accessing through a logged in user's Purchase History link
    if (this.props.match) {
      this.props.getOrders(this.props.match.params.userId);
      this.props.getUser(this.props.match.params.userId);
    } else {
      //if accessing through the admin's user search management page
      this.props.getOrders(this.props.user.id);
    }
    this.props.getCartItems();
  }

  componentWillReceiveProps(nextProps) {
    if (
      !this.props.match &&
      this.props.user.userName !== nextProps.user.userName
    ) {
      this.props.getOrders(nextProps.user.id);
    }
  }

  render() {
    let user;
    if (this.props.match) {
      user = this.props.me;
    } else {
      user = this.props.user;
    }
    const { orders } = this.props;
    const { cartItems } = this.props;

    return (
      <div>
        <h3> {user.userName}'s Purchases: </h3>
        {orders.map(order => (
          <div key={order.id}>
            <Link to={`/orders/users/${order.id}`}>
              <h3> Order #{order.id}: </h3>
            </Link>
            {cartItems.map((cart, i) => {
              if (order.id === cart.orderId) {
                return (
                  <ul key={i}>
                    <orderstyle>
                      <div key={cart.cat.id}>
                        <h4 id="orderstyleid"> ({cart.quantity}) {cart.cat.name} </h4>
                        <img src={cart.cat.image} alt="cats" height="100" />
                      </div>
                    </orderstyle>
                  </ul>
                );
              }
            })}
            <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Total Cost:{" "}
            {order.totalPrice}
            <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Status:{" "}
            {order.status}
            {order.status == "Delivered" ? " to " + user.address : null}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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
    cartItems: state.cartItems,
    me: state.user
  };
};

const mapDispatch = dispatch => {
  return {
    getOrders: userId => {
      return dispatch(fetchOrders(userId));
    },
    getCartItems: () => {
      return dispatch(fetchCarts());
    },
    getUser: userId => {
      return dispatch(fetchUserById(userId));
    }
  };
};

export default connect(mapState, mapDispatch)(AllOrders);
