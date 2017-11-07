import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeCat, createCart, createNewOrder} from '../store'

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

    handlePurchase(cart, quantityArray, totalPrice) {
        console.log('cart', cart)
        console.log('quantityArray', quantityArray)
        console.log('totalPrice', totalPrice)
        this.props.startOrder(totalPrice)
        .then(order => order.id)
        .then(orderId => {
            cart.forEach((cat, idx) => {
                this.props.createLineItem(cat, quantityArray[idx])
                .then(lineItem => {
                    lineItem.setCatId(cat.id)
                    lineItem.setOrderId(orderId)
                })
            })
        })
    }

    render () {
        const cart = this.props.cart
        let quantity = (this.state.quantity.length) ? this.state.quantity : this.props.quantity
        let subtotal = this.getSubtotal(cart, quantity)
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
                <Link to="#">
                    <button type="submit" onSubmit={() => this.handlePurchase(cart, quantity, subtotal)}>Continue To Checkout</button>
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
        },
        startOrder: (totalPrice) => {
            dispatch(createNewOrder(totalPrice))
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
