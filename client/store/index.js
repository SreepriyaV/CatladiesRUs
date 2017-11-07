import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './reducers/user';
import cats from './reducers/cats';
import cat from './reducers/oneCat-reducer';
import cart from './reducers/cart-reducer';
import singleUser from './reducers/singleUser';
import orders from './reducers/orders-reducer';
import currentOrder from './reducers/currentOrder';

const reducer = combineReducers({
  user,
  cats,
  cart,
  cat,
  singleUser,
  orders,
  currentOrder
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const defaultState = {
  user: {},
  cats: [],
  cart: [],
  cat: {},
  singleUser: {},
  orders: [],
  currentOrder: {}
};

const store = createStore(
  reducer,
  JSON.parse(localStorage.getItem('state')) || defaultState,
  middleware
);
//

store.subscribe(() => {
  // ... synchronize localStorage with store state
  const state = store.getState();
  localStorage.setItem('state', JSON.stringify(state));
});

export default store;
export * from './reducers/user';
export * from './reducers/cats';
export * from './reducers/oneCat-reducer';
export * from './reducers/cart-reducer';
export * from './reducers/singleUser';
export * from './reducers/orders-reducer';
export * from './reducers/currentOrder';
