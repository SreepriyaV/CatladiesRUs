"use strict";
import React,{Component} from "react";
import {withRouter, Link} from 'react-router-dom'
import { connect } from "react-redux";
import {fetchOneCat} from "../store";

class SingleCat extends React.Component {
  componentDidMount () {
    const catId = this.props.match.params.catId;
    this.props.getOneCat(catId);
  }

  render () {
    const { cat } = this.props;
    console.log("cat props", this.props); // TODO: remove debugging console.logs from master
    return (
    <div>
         {/* <div className="className1">
            { cat.quantity === 0 ?
                <h2> OUT OF STOCK </h2>
                : null
            }
        </div>  */}

        <div>
            <img src={cat.image} alt="cats" height="300"/>
            <h2>{ cat.name }</h2>
            <h4>About: { cat.description }</h4> {/* TODO: change label from About to Description */}
            <h4>Breed: { cat.breed} </h4>
            <h4>Age: { cat.age } </h4>
            <h4>Color: { cat.color } </h4>
            <h4>Hair length: { cat.hairLength } </h4>
            <h4>Profession: { cat.profession } </h4>
            <br />
            <h4>Price: { cat.price } </h4>
            <button> Add to Cart </button >
        </div>

        {/* <div className="className1">
            { currentUser.name ?
                <AddReview />
                : null
            }
        </div> */}
        {/* <Reviews /> */}
    </div>
    );
  }
}

//CONTAINER
const mapState = state => {
  return {
    cat: state.cat
  };
};

const mapDispatch = dispatch => {
  return {
    getOneCat: (catId) => {
      dispatch(fetchOneCat(catId))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleCat);

