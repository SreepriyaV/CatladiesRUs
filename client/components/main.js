import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'

//COMPONENT
// *  The Main component is our 'picture frame' - it displays the navbar and anything
// *  else common to our entire app. The 'picture' inside the frame is the space
// *  rendered out by the component's `children`.

const Main = (props) => {
  const {children, handleClick, isLoggedIn, user} = props

  return (
    <div>
      <h1>CatladiesRUs</h1>
      <nav>
        {
          isLoggedIn
            ? <div>
              <h3>Welcome, {user.userName}!</h3>
              {/* The navbar will show these links after you log in */}
              <Link to="/home">Home</Link>
              <a href="#" onClick={handleClick}>Logout</a>
              <Link to={`/orders/${user.id}`}>Purchase History</Link>
              { user.isAdmin ? <Link to="/users/user/Admin">Admin</Link> : null}
            </div>
            : <div>
              {/* The navbar will show these links before you log in */}
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
        }
          <div>
            <Link to="/cats">Cats</Link>
            <Link to="/cart">My Cart</Link>
          </div>
      </nav>
      <hr />
      {children}
    </div>
  )
}

//CONTAINER
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

//PROP TYPES
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
