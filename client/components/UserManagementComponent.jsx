'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleUserComponent from './SingleUserComponent.jsx'

//COMPONENT
export default class UserManagementComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      clicked: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
      console.log("event", event.target.userName.value)
    this.setState({ userName: event.target.userName.value, clicked: true });
    
  }

  render() {
     const {userName} = this.state;
     console.log("UN",userName);
    return (
      <div>

          <form onSubmit={this.onSubmit}>
              <div>
        UserName:<input type="userName" name="userName" />
     </div>
     <div>
          {/* <Link to ={`/users/user/${userName}`}><button>search</button></Link> */}
          <button>search</button>
          </div>
          </form>
         
             {this.state.clicked ? <SingleUserComponent userName={userName} /> : null} 
            
      </div>
      
    );
  }
}

