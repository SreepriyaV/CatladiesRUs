'use strict';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import {fetchUser, putStatus } from '../store/user';


/**
 * COMPONENT
 */
class SingleUserComponent extends Component {
  constructor(props) {
    super(props);

    this.onSubmit=this.onSubmit.bind(this);

  }

  componentDidMount() {

    this.props.getUser(this.props.userName);
  }

  onSubmit()
  {
      this.props.changeStatus('true', this.props.userName);
  }


  render() {
    const { user } = this.props;

    return (
      <div>
        <h1>{user.userName}</h1> 
        {/* //did we use username? not name */}
        <h2>{user.email}</h2>
        <button onClick={this.onSubmit}>isAdmin</button>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  };
};

const mapDispatch = dispatch => {
  return {
    getUser: (userName) => {
      dispatch(fetchUser(userName));
    },
    changeStatus: (status, userName) => {
        dispatch(putStatus(status, userName))
    }
  };
};
export default connect(mapState, mapDispatch)(SingleUserComponent);
