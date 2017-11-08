
//ACTION TYPES
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const DELETE_CAT = 'DELETE_CAT';
const CLEAR_CART = 'CLEAR_CART';

//INITIAL STATE
const defaultCart = [];

//ACTION CREATORS
export const addToCart = cat => ({ type: ADD_TO_CART, cat });
export const updateQuantity = newCart => ({ type: UPDATE_QUANTITY, newCart });
export const deleteCat = newCart => ({ type: DELETE_CAT, newCart });
export const clearCart = () => ({ type: CLEAR_CART})

//THUNK CREATORS

export const removeCat = (catToRemove, cart) => dispatch => {
  const newCart = cart.filter(cat => cat.id !== catToRemove.id);
  dispatch(deleteCat(newCart));
};


//REDUCER
export default function(state = defaultCart, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.cat];
    case UPDATE_QUANTITY:
      return action.newCart;
    case DELETE_CAT:
      return action.newCart;
    case CLEAR_CART:
      return defaultCart;
    default:
      return state;
  }
}
