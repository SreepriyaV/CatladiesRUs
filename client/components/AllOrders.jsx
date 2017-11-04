'use strict';
import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchOrders} from '../store/reducers/orders-reducer';
import {fetchCarts} from '../store/reducers/cart-reducer';
import {fetchUser} from '../store/reducers/singleUser';
import {fetchCats} from '../store/reducers/cats';

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
    this.props.getCats();
  }

  render() {
    const {orders} = this.props;
    const {cart} = this.props;
    const {singleUser} = this.props;
    const {cats} = this.props;
    console.log("props", this.props);
    console.log("orders", orders);

    return (
      <div>
        <h1> {singleUser.userName}'s Purchases are: </h1>
        { orders.map( order => (
          <ul key={order.id}>
            <Link to={`/orders/users/${order.id}`}>
            <h3> Order #{order.id}: </h3>
            </Link>
            { cart.map( (cart,i) => {
              if(order.id === cart.orderId) {
                return (
                <ul key={i}> 
                  {/* Cat #: {cart.catId} */}

                  { cats.map( (cat) => {
                    if(cat.id === cart.catId) {
                      return (
                      <ul key={cat.id}>
                        <h4> {cat.name} </h4>
                        <img src={cat.image} alt="cats" height="100"/>
                      </ul>  
                      )
                    }
                  })}

                </ul> 
                )
            }
            })}
            <br />
            <li> Total Cost: {order.totalPrice} </li>
            <li> Status: {order.status} 
            
              {  (order.status == "Delivered") ? " to "+singleUser.address : null }
            
            </li>

            <br />
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
    singleUser: state.singleUser,
    cats: state.cats
  };
};

const mapDispatch = dispatch => {
  return {
      getOrders: (userId) => {
        return dispatch(fetchOrders(userId));
      },
      getCartItems: () => {
        return dispatch(fetchCarts());
      },
      getUser: (userId) => {
        return dispatch(fetchUser(userId));
      },
      getCats: () => {
        return dispatch(fetchCats());
      }
  };
};

export default connect(mapState, mapDispatch)(AllOrders);
