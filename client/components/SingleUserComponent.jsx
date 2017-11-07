"use strict";
import React, { Component } from "react";

import { connect } from "react-redux";
import { putStatus } from "../store/reducers/singleUser";

//COMPONENT
class SingleUserComponent extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event, adminStatus) {
    event.preventDefault();
    this.props.changeStatus(this.props.user.userName, adminStatus);
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <h1>User Details</h1>
        <h4>Username: {user.userName}</h4>
        <h4>User email: {user.email}</h4>
        <h4>Admin Status: {user.isAdmin}</h4>
        <button
          onClick={() => {
            this.onSubmit(event, true);
          }}
        >
          Make An Admin
        </button>
        <button
          onClick={() => {
            this.onSubmit(event, false);
          }}
        >
          Remove As Admin
        </button>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    changeStatus: (userName, status) => {
      dispatch(putStatus(userName, status));
    }
  };
};

export default connect(null, mapDispatch)(SingleUserComponent);
