import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import history from '../history';
import { logout as logOutUser } from '../redux/auth';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div>
            <ul className="navbar-nav">
              <li>
                <NavLink to="/cats" activeClassName="active">Cats</NavLink>
              </li>
              <li>
                <NavLink to="/cart" activeClassName="active">Cart</NavLink>
              </li>
            </ul>
            { this.props.currentUser ? this.renderLogout() : this.renderLoginSignup() }
          </div>
        </div>
      </nav>
    );
  }

  renderLoginSignup() {
    return (
      <ul className="navbar-right">
        <li>
         <NavLink to="/signup" activeClassName="active">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">Login</NavLink>
        </li>
      </ul>
    );
  }

  renderLogout() {
    const name = this.props.currentUser.userName;
    return (
      <ul className="navbar-right">
        <li>
        <button
          className="navbar-btn"
          onClick={this.props.logout}>
          logout {name}
        </button>
        </li>
      </ul>
    );
  }
}

const mapState = ({currentUser}) => ({currentUser});
// // equivalent to:
// const mapState = state => {
//   return {
//     currentUser: state.currentUser
//   };
// };

const mapDispatch = dispatch => ({
  logout: () => {
    dispatch(logOutUser());
    // history.push('/'); // removed to demo logout instant re-render
  }
});

export default withRouter(connect(mapState, mapDispatch)(Navbar));
