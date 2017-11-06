"use strict";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SingleUserComponent from "./SingleUserComponent.jsx";

//COMPONENT
export default class UserManagementComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.setState({ userName: event.target.userName.value });
  }

  render() {
    const { userName } = this.state;

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

        {userName ? <SingleUserComponent userName={userName} /> : null}
       
      </div>
    );
  }
}
