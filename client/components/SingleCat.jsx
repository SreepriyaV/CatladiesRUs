"use strict";
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOneCat, addToCart } from "../store";

class SingleCat extends React.Component {
  constructor(props) {
    super(props);
    this.catIsInCart = this.catIsInCart.bind(this);
  }

  componentDidMount() {
    const catId = this.props.match.params.catId;
    this.props.getOneCat(catId);
  }

  catIsInCart(catToFind) {
    let isIt = false;
    this.props.cart.forEach(cat => {
      if (cat.id === catToFind.id) {
        isIt = true;
      }
    });
    return isIt;
  }

  render() {
    const { cat } = this.props;
    return (
      <div>
        <div>
          <img src={cat.image} alt="cats" height="300" />
          <h2>{cat.name}</h2>
          <h4>About: {cat.description}</h4>
          <h4>Breed: {cat.breed} </h4>
          <h4>Age: {cat.age} </h4>
          <h4>Color: {cat.color} </h4>
          <h4>Hair length: {cat.hairLength} </h4>
          <h4>Profession: {cat.profession} </h4>
          <br />
          <h4>Price: {cat.price} </h4>
          <button
            disabled={this.catIsInCart(cat)}
            onClick={() => this.props.addCatToCart(cat)}
          >
            {" "}
            Add to Cart{" "}
          </button>
        </div>
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
    getOneCat: catId => {
      dispatch(fetchOneCat(catId));
    },
    addCatToCart: cat => {
      dispatch(addToCart(cat));
    }
  };
};

export default connect(mapState, mapDispatch)(SingleCat);
