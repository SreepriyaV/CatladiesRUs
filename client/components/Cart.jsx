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
        this.changeQuantity = this.changeQuantity.bind(this)
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

    handlePurchase(quantityArray, cart) {
        cart.forEach((cat, idx) => {
            this.props.createLineItem(cat, quantityArray[idx])
        })
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
                <h3>{this.getSubtotal(cart, quantity)}</h3>
            </div>
            <div>
                <Link to="#">
                    <button type="submit" onSubmit={() => this.handlePurchase(quantity, cart)} disabled={true}>Continue To Checkout</button>
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
        },
        createLineItem: (cat, quantity) => {
            dispatch(createCart(cat, quantity))
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
