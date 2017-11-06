import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeCat} from '../store'

/**
 * COMPONENT
 */
class Cart extends Component {

    //Maybe this isn't necessary
    // constructor(props){
    //     super(props);
    //     this.getSubtotal = this.getSubtotal.bind(this);
    // }

    // handleRemove = (event) => {
        //this function is for a different issue
    // }

    getSubtotal = (array) => {
        let total = 0
        array.forEach(cat => {total += cat.price})
        return total
    }

    render () {
        const cart = this.props.cart
        console.log(cart)
        return (
          <div>
            <h3>Your Cart</h3>
            <div>{cart.map((cat, index) => {
                    return (
                    <div key={index}>
                        <h3>{cat.name}</h3>
                        <img src={cat.image} />
                        <h4>{cat.price}</h4>
                        {/* <button>-</button>
                        <p>{quantity}</p>
                        <button>+</button> */}
                        <button onClick={() => this.props.removeCatFromCart(cat, this.props.cart)}>Remove Cat from Cart</button>
                    </div>
                    )
                }
            )}</div>
            <div>
                <h3>Subtotal:</h3>
                <h3>{this.getSubtotal(cart)}</h3>
            </div>
            <div>
                <Link to="#">
                    <button disabled={true}>Continue To Checkout</button>
                </Link>
            </div>
          </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = ({cart}) => ({cart})

const mapDispatch = dispatch => {
    return {
        removeCatFromCart: (cat, cart) => {
            dispatch(removeCat(cat, cart))
        }
    }
}


export default connect(mapState, mapDispatch)(Cart)

// /**
//  * PROP TYPES
//  */
// UserHome.propTypes = {
//   email: PropTypes.string
// }