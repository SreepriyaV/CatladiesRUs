"use strict";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SingleUserComponent from "./SingleUserComponent.jsx";
import AllOrders from "./AllOrders.jsx";
import { fetchUser, putStatus } from "../store/reducers/singleUser";
import { connect } from "react-redux";

//COMPONENT
class UserManagementComponent extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.getUser(event.target.userName.value)
  }

  render() {
    const {user}= this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            UserName:<input type="userName" name="userName" />
          </div>
          <div>
            <button>search</button>
          </div>
        </form>

        {user.userName ? <SingleUserComponent user={user} /> : null}
        {user.userName ? <AllOrders user={user} /> : null}
       
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.singleUser
  };
};

const mapDispatch = dispatch => {
  return {
    getUser: (userName) => {
      dispatch(fetchUser(userName));
    }
  }
};

export default connect(mapState, mapDispatch)(UserManagementComponent);