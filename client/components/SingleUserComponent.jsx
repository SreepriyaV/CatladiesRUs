'use strict';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import {fetchUser, putStatus } from '../store/reducers/singleUser';


//COMPONENT
class SingleUserComponent extends Component {
  constructor(props) {
    super(props);

       this.state = {
     
      status: false
    };

    this.onSubmit=this.onSubmit.bind(this);
     this.onSubmitNotAdmin=this.onSubmitNotAdmin.bind(this);


  }

  componentDidMount() {
    //this.props.getUser(this.props.match.params.userName);

   console.log(this.props) 
   this.props.getUser(this.props.userName);
  }

  onSubmit(){
   
     event.preventDefault();
      //this.props.changeStatus(this.props.match.params.userName);
     this.setState({  status: true });
    this.props.changeStatus(this.props.userName, this.state.status);
   
  }
   onSubmitNotAdmin(){
  //  this.props.changeStatus(this.props.match.params.userName);
     event.preventDefault();
     this.setState({ status: false });
    this.props.notadmin(this.props.userName, this.state.status );
  }



  render() {

    const { user } = this.props;
    console.log("user", user);
  
    return (
      <div>
        <h2>User Details</h2>
        <h3>{user.userName}</h3>
        <h3>{user.email}</h3>
        <button onClick={this.onSubmit}>isAdmin</button>
         <button onClick={this.onSubmitNotAdmin}>notAdmin</button>
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
    changeStatus: (userName, status) => {
        dispatch(putStatus(userName, status))
     
    },
       notadmin: (userName, status) => {
        
        dispatch(putStatus(userName, status))
    },
  };
};
export default connect(mapState, mapDispatch)(SingleUserComponent);
