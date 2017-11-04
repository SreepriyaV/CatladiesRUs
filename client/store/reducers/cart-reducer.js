import axios from 'axios'
//import history from '../history'

//ACTION TYPES
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
const DELETE_CAT = 'DELETE_CAT'
const LOAD_CART = 'LOAD_CART'
const GET_CART_ITEMS = 'GET_CART_ITEMS'

//INITIAL STATE
const defaultCart = []

//ACTION CREATORS
export const addToCart = cat => ({type: ADD_TO_CART, cat})
export const updateQuantity = (newCart) => ({type: UPDATE_QUANTITY, newCart})
export const deleteCat = newCart => ({type: DELETE_CAT, newCart})
export const getCartItems = carts => ({type: GET_CART_ITEMS, carts})
export const loadCart = (cart) => ({type: LOAD_CART, cart})

//THUNK CREATORS
export const fetchCarts = () =>
dispatch =>
  axios.get('/api/carts/')
    .then(res =>
      dispatch(getCartItems(res.data)))
    .catch(err => console.log(err))

//REDUCER
export default function (state = defaultCart, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.cat];
    case UPDATE_QUANTITY:
      return action.newCart;
    case DELETE_CAT:
      return action.newCart;
    case GET_CART_ITEMS:
      return action.carts;
    case LOAD_CART:
      return action.cart;
    default:
      return state
  }
}
