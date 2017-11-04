'use strict';
import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchOneCat, addToCart, loadCart} from '../store';

class SingleCat extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddCat = this.handleAddCat.bind(this)
    this.handleGetCart = this.handleGetCart.bind(this)
  }

  componentDidMount () {
    const catId = this.props.match.params.catId;
    this.props.getOneCat(catId);
    if (localStorage.cart) {
      const cart = JSON.parse(localStorage.getItem('cart'))
      this.props.loadLocalCart(cart)
    }
    // I DONT KNOW HOW TO PUT THE CURRENT USER IN THE LOCAL STATE
  }

  handleGetCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    this.props.loadLocalCart(cart)
    console.log(this.props.cart)
  }

  handleAddCat = (cat) => {
    // const catId = cat.id;
    // const catName = cat.name;
    // const price = cat.price;
    // const quantity = 1;
    const strigifyCart = JSON.stringify(this.props.cart)

            // update Qty if product is already present
            // for (var i in cart) {
            //     if(cart[i].Product == name)
            //     {
            //         cart[i].Qty = qty;  // replace existing Qty
            //         showCart();
            //         saveCart();
            //         return;
            //     }
            // }

    this.props.addCatToCart(cat);
    localStorage.setItem('cart', strigifyCart)
            // var item = { CatId: catId, Cat: catName, Price: price, Quantity: quantity };
            // cart.push(item);
            // saveCart();
            // showCart();
        }

  render () {
    const { cat } = this.props;
    console.log('cat props', this.props);
    return (
    <div>
        {/* <div className="className1">
            { cat.quantity === 0 ?
                <h2> OUT OF STOCK </h2>
                : null
            }
        </div> */}

        <div>
            <img src={cat.image} alt="cats" height="300" />
            <h2>{ cat.name }</h2>
            <h4>About: { cat.description }</h4>
            <h4>Breed: { cat.breed} </h4>
            <h4>Age: { cat.age } </h4>
            <h4>Color: { cat.color } </h4>
            <h4>Hair length: { cat.hairLength } </h4>
            <h4>Profession: { cat.profession } </h4>
            <br />
            <h4>Price: { cat.price } </h4>
            <button > Get Cart </button >
            <button > Add to Cart </button >
        </div>

        {/* <div className="className1">
            { currentUser.name ?
                <Review />
                : null
            }
        </div> */}
    </div>
    );
  }
}


//CONTAINER
const mapState = state => {
  return {
    cat: state.cat,
    cart: state.cart
  };
};

const mapDispatch = dispatch => {
  return {
    getOneCat: (catId) => {
      dispatch(fetchOneCat(catId))
    },
    addCatToCart: (cat) => {
      dispatch(addToCart(cat))
    },
    loadLocalCart: (cart) => {
      dispatch(loadCart(cart))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleCat);

