import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeCat} from '../store'

/**
 * COMPONENT
 */
class Cart extends Component {

    constructor(props){
        super(props);
        this.state = {
            quantity: []
        }
        this.decreaseQuantity = this.decreaseQuantity.bind(this)
        this.increaseQuantity = this.increaseQuantity.bind(this)
    }

    getSubtotal = (array) => {
        let total = 0
        array.forEach(cat => {
            total += Number(cat.price)
        })
        return total.toFixed(2)
    }

    decreaseQuantity(event) {
        const key = Number(event.target.value);
        const quantity = (this.state.quantity.length) ? this.state.quantity : this.props.quantity
        const newQuantity = quantity.map((el, i) => { return ((i === key) ? --el : el)})
        this.setState({quantity: newQuantity})
    }

    increaseQuantity(event) {
        const key = Number(event.target.value);
        const quantity = (this.state.quantity.length) ? this.state.quantity : this.props.quantity
        const newQuantity = quantity.map((el, i) => { return ((i === key) ? ++el : el)})
        console.log('key', typeof key)
        console.log('newQuantity', newQuantity)
        this.setState({quantity: newQuantity})
    }

    render () {
        const cart = this.props.cart
        let quantity = (this.state.quantity.length) ? this.state.quantity : this.props.quantity
        //console.log(quantity)
        return (
          <div>
            <h3>Your Cart</h3>
            <div>{cart.map((cat, index) => {
                    return (
                    <div key={index}>
                        <h3>{cat.name}</h3>
                        <img src={cat.image} />
                        <h4>{cat.price}</h4>
                        <button value={index} onClick={this.decreaseQuantity} disabled={quantity[index] === 0}>-</button>
                        <p>{quantity[index]}</p>
                        <button value={index} onClick={this.increaseQuantity} disabled={quantity[index] === cat.quantity}>+</button>
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
const mapState = ({cart}) => {
    let quantities = []
    cart.forEach(cat => {quantities.push(1)})
    return {
        cart,
        quantity: quantities
    }
}

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
