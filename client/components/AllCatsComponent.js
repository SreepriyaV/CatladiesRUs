"use strict";
import React,{Component} from "react";
import {withRouter, Link} from 'react-router-dom'
import { connect } from "react-redux";
import {fetchCats} from "../store/cats";

class AllCatsComponent extends Component {
  constructor(props) {
    super(props);
    //this.onSelectSubmit = this.onSelectSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCats()
  }

  // onSelectSubmit(event) {
  // }
  
  render() {
    const { cats } = this.props;
    return (
      <div>
        <ul>{ cats.map( cat => 
        <li key={cat.id}>
        <Link to={`/cats/${cat.id}`}>
          <img src={cat.image} alt="cats" height="200"/>
          <h4> {cat.name} </h4>
        </Link> 
          <h4>Price: {cat.price}</h4>
        </li>)}
        </ul>

        <div>
          <select onChange={this.onSelectSubmit}>
            <option>HairLength</option>
            <option value="short"> short</option>
            <option value="medium"> medium</option>
            <option value="long"> long</option>
            <option>Profession</option>
            <option value="Drama Queen"> Drama Queen</option>
            <option value="Painter (fingers-crossed)">
              Painter (fingers-crossed)
            </option>
            <option value="Howler"> Howler</option>
            <option value="Spazzer"> Spazzer</option>
            <option value="Man of the People"> Man of the People</option>
          </select>
        </div>
      </div>
    );
  }
}

//CONTAINER
const mapState = state => {
  return {
    cats: state.cats
  };
};

const mapDispatch = dispatch => {
  return {
    getCats: () => {
      dispatch(fetchCats())
    }
  }
}
export default connect(mapState, mapDispatch)(AllCatsComponent);
