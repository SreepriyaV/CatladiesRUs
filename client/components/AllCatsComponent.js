'use strict';
import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchCats} from '../store/reducers/cats';

 /*
component local state: { hairLength: '',  profession: ''}
componentDidMount: loads all cats in redux store, which "connect" passes down as props
render: 
 */

class AllCatsComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      filteredCats: []
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    console.log('component mounted')
    this.props.getCats()
  }

  handleChange(event) {
    const target = event.target;
    const key = target.name === 'hairLength' ? 'hairLength' : 'profession'
    const newState = this.props.cats.filter(cat => cat[key] === target.value)
    this.setState({filteredCats: newState})
  }

  render() {

    const cats = (this.state.filteredCats.length) ? this.state.filteredCats : this.props.cats;
    console.log(cats)
    return (
      <div>
        <fieldset>
          <legend>Hair Length</legend>
            <div>
              <input id="short" name="hairLength" value="short" type="checkbox" onChange={this.handleChange} />
              <label htmlFor="short">Short</label>
            </div>
            <div>
              <input id="medium" name="hairLength" value="medium" type="checkbox" onChange={this.handleChange} />
              <label htmlFor="medium">Medium</label>
            </div>
            <div>
              <input id="long" name="hairLength" value="long" type="checkbox" onChange={this.handleChange} />
              <label htmlFor="long">Long</label>
            </div>
        </fieldset>
        <fieldset>
          <legend>Profession</legend>
            <div>
              <input id="Drama-Queen" name="profession" value="Drama-Queen" type="checkbox" onChange={this.handleChange} />
              <label htmlFor="Drama-Queen">Drama Queen</label>
            </div>
            <div>
              <input id="Howler" name="profession" value="Howler" type="checkbox" onChange={this.handleChange} />
              <label htmlFor="Howler">Howler</label>
            </div>
            <div>
              <input id="Spazzer" name="profession" value="Spazzer" type="checkbox" onChange={this.handleChange} />
              <label htmlFor="Spazzer">Spazzer</label>
            </div>
            <div>
              <input id="Other" name="profession" value="Other" type="checkbox" onChange={this.handleChange} />
              <label htmlFor="Other">Other</label>
            </div>
        </fieldset>

        {/* MAKE A CLEAR FILTERS BUTTON */}

        <ul>{ cats.map( cat => 
        <li key={cat.id}>
        <Link to={`/cats/${cat.id}`}>
          <img src={cat.image} alt="cats" height="200"/>
          <h4> {cat.name} </h4>
        </Link> 
          <h4>Price: {cat.price}</h4>
        </li>)}
        </ul>
      </div>
    )  
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
        return dispatch(fetchCats());
      }
  };
};

export default connect(mapState, mapDispatch)(AllCatsComponent);
