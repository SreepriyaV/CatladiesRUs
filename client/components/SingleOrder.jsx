'use strict';
import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchSingleOrder} from '../store/reducers/orders-reducer';
import {fetchUserCart} from '../store/reducers/cart-reducer';
//import {fetchUser} from '../store/reducers/singleUser';
//import {fetchCats} from '../store/reducers/cats';

class SingleOrder extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      orderId: Number(this.props.match.params.orderId),
      //userId: Number(this.props.match.params.userId)
    }
  }
  
  componentDidMount() {
    this.props.getOneCartItems(this.state.orderId);
    this.props.getOneOrder(this.state.orderId);
    //this.props.getUser(this.state.userId);
    //this.props.getCats();
  }

  render() {
    const {singleOrder} = this.props;
    const {cart} = this.props;
    //const {singleUser} = this.props;
    //const {cats} = this.props;
    console.log("props", this.props);
    console.log("order", singleOrder);
    console.log("cart", cart);
    //console.log("user", singleUser);

    return (
      <div>
        <h1> Order # has: </h1>
        { cart.map( (cart,i) => {
            <ul key={i}>
            Cat #: {cart.catId}
            </ul>
        })}
      </div>
    );
  }
}

//CONTAINER
const mapState = state => {
  return {
    singleOrder: state.singleOrder,
    cart: state.cart,
    //singleUser: state.singleUser,
    //cats: state.cats
  };
};

const mapDispatch = dispatch => {
  return {
      getOneOrder: (orderId) => {
        return dispatch(fetchSingleOrder(orderId));
      },
       getOneCartItems: (orderId) => {
        return dispatch(fetchUserCart(orderId));
      }, 
      /* getUser: (userId) => {
        return dispatch(fetchUser(userId));
      }, */
/*       getCats: () => {
        return dispatch(fetchCats());
      } */
  };
};

export default connect(mapState, mapDispatch)(SingleOrder);
