import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import AllCats from './AllCats';
import Review from './Review';

class SingleCat extends React.Component {

  constructor () {
    super();
    this.state = {
      cat: {},
      currentUser: {}
    };
  }

  componentDidMount () {
    const catId = this.props.match.params.id;
      axios.get(`/api/cats/${catId}`)
        .then(res => res.data)
        .then(cat => this.setState({
          cat: cat
        }));
    // I DONT KNOW HOW TO PUT THE CURRENT USER IN THE LOCAL STATE
  }

  render () {

    return (
    <div>
        <div className="className1">
            { cat.quantity === 0 ?
                <h2> OUT OF STOCK </h2>
                : null
            }
        </div>

        <div>
            <h2>{ cat.image }</h2>
            <h2>{ cat.name }</h2>
            <h4>About: { cat.description }</h4>
            <h4>Breed: { cat.breed} </h4>
            <h4>Age: { cat.age } </h4>
            <h4>Color: { cat.color } </h4>
            <h4>Hair length: { cat.hairLength } </h4>
            <h4>Profession: { cat.profession } </h4>
            <br />
            <h4>Price: { cat.price } </h4>
        </div>

        <div className="className1">
            { currentUser.name ?
                <Review />
                : null
            }
        </div>
    </div>
    );
  }
}

export default SingleArtist;

