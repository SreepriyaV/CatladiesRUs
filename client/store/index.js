import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './reducers/user'
import cats from './reducers/cats'
import cart from './reducers/cart-reducer'
import cat from './reducers/oneCat-reducer'
const reducer = combineReducers({user, cats, cat, cart})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './reducers/user';
export * from './reducers/cats';
export * from './reducers/cart-reducer'
