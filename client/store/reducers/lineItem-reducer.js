import axios from "axios";
//import history from '../history'

//ACTION TYPES
const GET_CART_ITEMS = "GET_CART_ITEMS";
const GET_USER_CART = "GET_USER_CART";

//INITIAL STATE
const defaultCartItems = [];

//ACTION CREATORS
export const getCartItems = cartItems => ({ type: GET_CART_ITEMS, cartItems });
export const getUserCart = userCart => ({ type: GET_USER_CART, userCart });

//THUNK CREATORS
export const fetchCarts = () => dispatch =>
  axios
    .get("/api/carts/")
    .then(res => dispatch(getCartItems(res.data)))
    .catch(err => console.log(err));

export const fetchUserCart = orderId => dispatch =>
  axios
    .get(`/api/carts/${orderId}`)
    .then(res => dispatch(getUserCart(res.data)))
    .catch(err => console.log(err));

//REDUCER
export default function(state = defaultCartItems, action) {
  switch (action.type) {
    case GET_CART_ITEMS:
      return action.cartItems;
    case GET_USER_CART:
      return action.userCart;

    default:
      return state;
  }
}
