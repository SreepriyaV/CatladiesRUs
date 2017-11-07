'use strict';
//const nodemailer = require('nodemailer');

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ThankYou from './ThankYou.js'
//import nodemailer from 'nodemailer';
import { connect } from 'react-redux';

//COMPONENT
class BuildPurchaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      email: ''
    };
    this.onHandleChange = this.onHandleChange.bind(this);
   // this.sendMail = this.sendMail.bind(this);
  }

sendMail(email)
{
    const message = 'Your order has been shipped. Thank You for shopping with us. ';
    const subject = 'Order Shipped';
    document.location.href = `mailto:${email}?subject=`
        + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(message);

}


  onHandleChange(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    this.setState({
      name: event.target.name.value,
      address: event.target.address.value,
      email: event.target.email.value
    });
    this.sendMail(event.target.email.value);
   this.props.history.push('/purchase/ThankYou');
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
                placeholder="Textarea"
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

// const mapDispatch = dispatch => {
//   return {
//       getCats: () => {
//         return dispatch(fetchCats());
//       }
//   };
// };

export default connect(mapState, null)(BuildPurchaseComponent);
