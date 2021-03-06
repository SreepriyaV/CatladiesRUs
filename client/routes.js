import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';

import {
  Main,
  Login,
  Signup,
  UserHome,
  AllCatsComponent,
  SingleCat,
  SingleUserComponent,
  Cart,
  AllOrders,
  SingleOrder,
  UserManagementComponent,
  BuildPurchaseComponent,
  ThankYou
} from './components';
import { me } from './store';

//COMPONENT
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Router history={history}>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route
              exact
              path="/users/user/Admin"
              component={UserManagementComponent}
            />
            
            <Route exact path="/purchase/ThankYou" component={ThankYou} />
            <Route
              exact
              path="/cart/purchase"
              component={BuildPurchaseComponent}
            />
            <Route
              path={'/users/user/:userName'}
              component={SingleUserComponent}
            />
            

            <Route exact path="/cats" component={AllCatsComponent} />
            <Route exact path="/cats/:catId" component={SingleCat} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/orders/:userId" component={AllOrders} />
            <Route
              exact
              path="/orders/users/:orderId"
              component={SingleOrder}
            />
            {isLoggedIn && (
              <Switch>
                {/* Routes placed here are only available after logging in */}
                <Route path="/home" component={UserHome} />
              </Switch>
            )}
            {/* Displays our Login component as a fallback */}
            <Route component={Login} />
          </Switch>
        </Main>
      </Router>
    );
  }
}

//CONTAINER

const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    }
  };
};

export default connect(mapState, mapDispatch)(Routes);

//PROP TYPES
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
