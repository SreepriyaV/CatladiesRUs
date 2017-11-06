'use strict';
import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchSingleOrder} from '../store/reducers/orders-reducer';
import {fetchUserCart} from '../store/reducers/cart-reducer';
import {fetchCats} from '../store/reducers/cats';
import { putStatus } from '../store/reducers/singleUser';

class SingleOrder extends Component {
  
  componentDidMount() {
    this.props.getOneOrder(this.props.match.params.orderId);
  }

  render() {
    // TODO: is this data necessary for this component?
    // better to pass down the single order as a prop; or do a fetch specifically for that order

    const orderId = Number(this.props.match.params.orderId)

    return (
      <orderstyle>
      <div>
        <h1> Order #{orders.id} has: </h1>
        { cart.map( (cart,i) => {
            return (
                <div id="singleorderstyleid" key={i}> 

                { cats.map( (cat) => {
                    if(cat.id === cart.catId) {
                      return (
                      <ul key={cat.id}>
                        <h4> {cat.name} </h4>
                        <img src={cat.image} alt="cats" height="300"/>
                      </ul>  
                      )
                    }
                  })}
                    
                </div>
              )
        })}
        <h4> Total price: {orders.totalPrice} </h4>
        Status: {orders.status}
          &nbsp;&nbsp;&nbsp;
          {  (orders.status != "Delivered") ? <button onClick={() => this.props.changeStatus(this.props.match.params.userName)}>Delivered</button> : null }

      </div>
      </orderstyle>
    );
  }
}

//CONTAINER
const mapState = (state, ownProps) => {
  return {
    order: state.orders.filter(order => order.id === ownProps.match.params.orderId) // instead of fetching order again
  };
};

const mapDispatch = dispatch => {
  return {
      getOrder: (orderId) => {
        return dispatch(fetchSingleOrder(orderId));
      },
    //   getOneCartItems: (orderId) => {
    //     return dispatch(fetchUserCart(orderId));
    //   }, 
    //   getCats: () => {
    //     return dispatch(fetchCats()); // TODO: unnecessary fetch
    //   },
    //   changeStatus: (userName) => {
    //     return dispatch(putStatus(userName)); // TODO: why is this function taking in a username? wouldn't it need an order's id?
    // }
  };
};

export default connect(mapState, mapDispatch)(SingleOrder);
