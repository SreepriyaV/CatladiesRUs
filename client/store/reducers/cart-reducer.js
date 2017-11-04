import axios from 'axios'
//import history from '../history'

/**
 * ACTION TYPES
 */
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
const DELETE_CAT = 'DELETE_CAT'

/**
 * INITIAL STATE
 */
const cart = []

/**
 * ACTION CREATORS
 */
export const addToCart = cat => ({type: ADD_TO_CART, cat})
export const updateQuantity = (newCart) => ({type: UPDATE_QUANTITY, newCart})
export const deleteCat = newCart => ({type: DELETE_CAT, newCart})

/**
 * REDUCER
 */
export default function (state = cart, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.cat];
    case UPDATE_QUANTITY:
      return action.newCart;
    case DELETE_CAT:
      return action.newCart;
    default:
      return state
  }
}

/**
 * THUNK
 */

 export function addCatToCart()
 {
   return (dispatch) => axios.put('/api/cart', {catId: 1, quantity: 1})
   .then((res) => dispatch(addCatToCart(res.data)))
   .catch(err => console.log(err))
 }
