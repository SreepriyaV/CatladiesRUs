'use strict';
import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchCats} from '../store/reducers/cats';
import SearchBar from './SearchBar.jsx';

class AllCatsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredCats: [],
      inputValue: '',
      short: false,
      medium: false,
      long: false,
      dramaQueen: false,
      howler: false,
      spazzer: false,
      other: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    console.log('component mounted')
    this.props.getCats()
  }

  handleChange(event) {
    const target = event.target;
    const key = target.name === 'hairLength' ? 'hairLength' : 'profession'
    const newState = this.props.cats.filter(cat => cat[key] === target.value)
    const checkbox = target.id
    const checked = target.checked
    this.setState({filteredCats: newState, [checkbox]: checked})
  }

  handleSearch (event) {
    const value = event.target.value;
    const regEx = new RegExp(value, 'i')
    const newState = this.props.cats.filter(cat => cat.name.match(regEx))
    this.setState({
      filteredCats: newState,
      inputValue: value
    });
  }

  clearFilters() {
    this.setState({
      filteredCats: [],
      inputValue: '',
      short: false,
      medium: false,
      long: false,
      dramaQueen: false,
      howler: false,
      spazzer: false,
      other: false
    })
  }

  render() {

    const cats = (this.state.filteredCats.length) ? this.state.filteredCats : this.props.cats;

    console.log('input value', this.state.inputValue)
    console.log('filtered Cats', cats)
    return (
      <catstyle>
      <div>
        <fieldset>
          <legend>Hair Length</legend>
            <div>
              <input id="short" name="hairLength" value="short" type="checkbox" checked={this.state.short} onChange={this.handleChange} />
              <label htmlFor="short">Short</label>
            </div>
            <div>
              <input id="medium" name="hairLength" value="medium" type="checkbox" checked={this.state.medium} onChange={this.handleChange} />
              <label htmlFor="medium">Medium</label>
            </div>
            <div>
              <input id="long" name="hairLength" value="long" type="checkbox" checked={this.state.long} onChange={this.handleChange} />
              <label htmlFor="long">Long</label>
            </div>
        </fieldset>
        <fieldset>
          <legend>Profession</legend>
            <div>
              <input id="dramaQueen" name="profession" value="drama-Queen" type="checkbox" checked={this.state.dramaQueen} onChange={this.handleChange} />
              <label htmlFor="dramaQueen">Drama Queen</label>
            </div>
            <div>
              <input id="howler" name="profession" value="Howler" type="checkbox" checked={this.state.howler} onChange={this.handleChange} />
              <label htmlFor="howler">Howler</label>
            </div>
            <div>
              <input id="spazzer" name="profession" value="Spazzer" type="checkbox" checked={this.state.spazzer} onChange={this.handleChange} />
              <label htmlFor="spazzer">Spazzer</label>
            </div>
            <div>
              <input id="other" name="profession" value="Other" type="checkbox" checked={this.state.other} onChange={this.handleChange} />
              <label htmlFor="other">Other</label>
            </div>
            <div>
              <input type="reset" value="Clear the Filters" onClick={this.clearFilters} />
            </div>
        </fieldset>

        <SearchBar handleChange={this.handleSearch} inputValue={this.state.inputValue} />

        <br /> <br />
        <div>{ cats.map( cat => (
          <div id="catstyleid" key={cat.id}>
            <Link to={`/cats/${cat.id}`}>
              <img src={cat.image} alt="cats" height="275" width="300" />
              <h4> {cat.name} </h4>
            </Link>
            <h4>Price: {cat.price}</h4>
            </div>
            ))}
        </div>
      </div>
      </catstyle>
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
        return dispatch(fetchCats());
      }
  };
};

export default connect(mapState, mapDispatch)(AllCatsComponent);