"use strict";
import React from "react";

import { connect } from "react-redux";

/**
 * COMPONENT
 */
class AllCatsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      cats: [],
      selectedCats: []
    };
    this.onSelectSubmit = this.onSelectSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ cats: this.props.cats });
  }

  onSelectSubmit(event) {
    this.setState({ category: event.target.value });
  }

  selectCategory(category) {
    let newCats;

    if (category) {
      newCats = this.state.cats.filter(cats => cats.category == category);
      this.setState({ selectedCats: newCats });
    }
  }
  render() {
    //const { cats } = props;
    const { cats } = this.state;
    console.log("HELLO ");
    return (
      <div>
        <ul>{cats && cats.map(cat => <li key={cat.id}>{cat.name}</li>)}</ul>

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

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    cats: state.cats
  };
};

export default connect(mapState)(AllCatsComponent);
