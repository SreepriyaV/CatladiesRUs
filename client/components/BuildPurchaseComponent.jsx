"use strict";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import ThankYou from "./ThankYou.js";
import { connect } from "react-redux";

//COMPONENT
class BuildPurchaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      email: ""
    };
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  sendMail(email) {
    const message =
      "Your order has been confirmed. Thank You for shopping with us. ";
    const subject = "Order Confirmation";
    document.location.href =
      `mailto:${email}?subject=` +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(message);
  }

  onHandleChange(event) {
    event.preventDefault();
    this.setState({
      name: event.target.name.value,
      address: event.target.address.value,
      email: event.target.email.value
    });
    this.sendMail(event.target.email.value);
    this.props.history.push("/purchase/ThankYou");
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <div>
          <form onSubmit={this.onHandleChange}>
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="e.g Alex Smith"
              />
            </div>

            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="e.g. alexsmith@gmail.com"
                value={user && user.email}
              />
            </div>

            <label className="label">Address</label>
            <div className="control">
              <textarea
                className="textarea"
                name="address"
                placeholder="To Address"
                value={user && user.address}
              />
            </div>

            <label className="label">Card Number</label>
            <div className="control">
              <input
                className="input"
                type="cardnumber"
                name="cardnumber"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
            </div>

            <label className="label">Expiration Date</label>
            <div className="control">
              <input
                className="input"
                type="expirationdate"
                name="expirationdate"
                placeholder="MM / YY"
              />
            </div>

            <label className="label">CVC</label>
            <div className="control">
              <input
                className="input"
                type="CVC"
                name="CVC"
                placeholder="CVC"
              />
            </div>

            <label className="checkbox">
              <input type="checkbox" />
              I agree to the <a href="#">terms and conditions</a>
            </label>

            <div className="control">
              <button className="button is-link">CheckOut</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

//CONTAINER
const mapState = state => {
  return {
    user: state.user
  };
};

export default connect(mapState, null)(BuildPurchaseComponent);
