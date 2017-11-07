import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeCat, createNewOrder} from '../store'

/**
 * COMPONENT
 */
class Cart extends Component {

    constructor(props){
        super(props);
        this.state = {
            quantity: []
        }
        this.changeQuantity = this.changeQuantity.bind(this)
        this.handlePurchase = this.handlePurchase.bind(this)
    }

    getSubtotal = (catArray, quantityArray) => {
        let total = 0
        catArray.forEach((cat, idx) => {
            total += Number(cat.price) * quantityArray[idx]
        })
        return total.toFixed(2)
    }

    changeQuantity(event) {
        const key = Number(event.target.value);
        const id = event.target.id
        const quantity = (this.state.quantity.length) ? this.state.quantity : this.props.quantity
        const newQuantity = quantity.map((el, i) => {
            return ((i === key)
            ? (id === 'up') ? ++el : --el
            : el)})
        this.setState({quantity: newQuantity})
    }

    handlePurchase(cart, quantityArray, totalPrice, userId) {
        this.props.startOrder(cart, quantityArray, totalPrice, userId)
    }

    render () {
        const cart = this.props.cart
        let quantity = (this.state.quantity.length) ? this.state.quantity : this.props.quantity
        let subtotal = this.getSubtotal(cart, quantity)
        const userId = this.props.user.id || null
        return (
          <div>
            <h3>Your Cart</h3>
            <div>{cart.map((cat, index) => {
                    return (
                    <div key={index}>
                        <h3>{cat.name}</h3>
                        <img src={cat.image} />
                        <h4>{cat.price}</h4>
                        <button id="down" value={index} onClick={this.changeQuantity} disabled={quantity[index] === 0}>-</button>
                        <p>{quantity[index]}</p>
                        <button id="up" value={index} onClick={this.changeQuantity} disabled={quantity[index] === cat.quantity}>+</button>
                        <button onClick={() => this.props.removeCatFromCart(cat, this.props.cart)}>Remove Cat from Cart</button>
                    </div>
                    )
                }
            )}</div>
            <div>
                <h3>Subtotal:</h3>
                <h3>{subtotal}</h3>
            </div>
            <div>
                <Link to="/cart/purchase">
                    <button type="submit" onClick={() => this.handlePurchase(cart, quantity, subtotal, userId)}>Continue To Checkout</button>
                </Link>
            </div>
          </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = ({cart, user}) => {
    let quantities = []
    cart.forEach(cat => {quantities.push(1)})
    return {
        user,
        cart,
        quantity: quantities
    }
}

const mapDispatch = dispatch => {
    return {
        removeCatFromCart: (cat, cart) => {
            dispatch(removeCat(cat, cart))
        },
        startOrder: (cart, quantity, totalPrice, userId) => {
            dispatch(createNewOrder(cart, quantity, totalPrice, userId))
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
