'use strict';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import {fetchUser, putStatus } from '../store/reducers/singleUser';


//COMPONENT
class SingleUserComponent extends Component {
  constructor(props) {
    super(props);
    this.onSubmit=this.onSubmit.bind(this);

  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.userName);
  }

  onSubmit(){
    this.props.changeStatus(this.props.match.params.userName);
  }


  render() {

    const { user } = this.props;
  
    return (
      <div>
        <h2>User Details</h2>
        <h3>{user.userName}</h3>
        <h3>{user.email}</h3>
        <button onClick={this.onSubmit}>isAdmin</button>
      </div>
    );
  }
}

//CONTAINER
const mapState = state => {
  return {
    user: state.singleUser
  };
};

const mapDispatch = dispatch => {
  return {
    getUser: (userName) => {
      dispatch(fetchUser(userName));
    },
    changeStatus: (userName) => {
        dispatch(putStatus(userName))
    }
  };
};
export default connect(mapState, mapDispatch)(SingleUserComponent);
