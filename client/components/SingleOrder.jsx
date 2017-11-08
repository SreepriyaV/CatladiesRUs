"use strict";
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleOrder } from "../store/reducers/orders-reducer";
import { fetchUserCart } from "../store/reducers/lineItem-reducer";
import { fetchCats } from "../store/reducers/cats";
import { putStatus } from "../store/reducers/singleUser";

class SingleOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: Number(this.props.match.params.orderId)
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getOneCartItems(this.state.orderId);
    this.props.getOneOrder(this.state.orderId);
    this.props.getCats();
  }

  onSubmit() {
    this.props.changeStatus(this.props.match.params.userName);
  }

  render() {
    const { orders } = this.props;
    const { cart } = this.props;
    const { cats } = this.props;

    return (
      <orderstyle>
        <div>
          <h1> Order #{orders.id} has: </h1>
          {cart.map((cart, i) => {
            return (
              <div id="singleorderstyleid" key={i}>
                {cats.map(cat => {
                  if (cat.id === cart.catId) {
                    return (
                      <ul key={cat.id}>
                        <h4> {cat.name} </h4>
                        <img src={cat.image} alt="cats" height="300" />
                      </ul>
                    );
                  }
                })}
              </div>
            );
          })}
          <h4> Total price: {orders.totalPrice} </h4>
          Status: {orders.status}
          &nbsp;&nbsp;&nbsp;
          {orders.status !== "Delivered" ? (
            <button onClick={this.onSubmit}>Delivered</button>
          ) : null}
        </div>
      </orderstyle>
    );
  }
}

//CONTAINER
const mapState = state => {
  return {
    orders: state.orders,
    cart: state.cart,
    cats: state.cats
  };
};

const mapDispatch = dispatch => {
  return {
    getOneOrder: orderId => {
      return dispatch(fetchSingleOrder(orderId));
    },
    getOneCartItems: orderId => {
      return dispatch(fetchUserCart(orderId));
    },
    getCats: () => {
      return dispatch(fetchCats());
    },
    changeStatus: userName => {
      return dispatch(putStatus(userName));
    }
  };
};

export default connect(mapState, mapDispatch)(SingleOrder);
