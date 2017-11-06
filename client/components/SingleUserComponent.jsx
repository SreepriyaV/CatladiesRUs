"use strict";
import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchUser, putStatus } from "../store/reducers/singleUser";

//COMPONENT
class SingleUserComponent extends Component {
  constructor(props) {
    super(props);


    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.userName !== nextProps.userName) {
  //     this.props.getUser(nextProps.userName);
  //   }
  // }
  // componentDidMount() {
  //   this.props.getUser(this.props.userName);
  // }

  onSubmit(event, adminStatus) {
    event.preventDefault();

    this.props.changeStatus(this.props.user.userName, adminStatus);
  }

  render() {
    const { user } = this.props;


    return (
      <div>
        <h2>User Details</h2>
        <h3>{user.userName}</h3>
        <h3>{user.email}</h3>
        <button
          onClick={() => {
            this.onSubmit(event, true);
          }}
        >
          isAdmin
        </button>
        <button
          onClick={() => {
            this.onSubmit(event, false);
          }}
        >
          notAdmin
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
