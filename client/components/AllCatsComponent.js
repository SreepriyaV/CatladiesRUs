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
      cats:[]
    }
    this.onSelectSubmit = this.onSelectSubmit.bind(this);
  }

  onSelectSubmit(event) {
    this.setState({ category: event.target.value });
  }

  onSelectCategory()
  {
    
  }
  render() {
    const { cats } = props;

    return (
      <div>
        <ul>{cats.map(cat => <li key={cat.id}>{cat.name}</li>)}</ul>

        <div>
          <select  onChange={this.onSelectSubmit}>
            {/* <option>AGE</option>
            <option value="kitten"> Kitten</option> //if age less than 10
            <option value="adult"> Adult</option> //if age greater than 10 */}
            {/* <option>Color</option>

            {cats.map(cat => (
              <option key={cat.id} value={cat.color}>
                {" "}
                cat.color
              </option>
            ))} */}
            <option>HairLength</option>
            
            
            <option>Profession</option>
           
            ))}
            {/* <option>Breed</option>
            {cats.map(cat => (
              <option key={cat.id} value={cat.breed}>
                {" "}
                cat.breed
              </option>
            ))} */}
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
