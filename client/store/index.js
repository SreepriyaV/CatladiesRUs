import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import singleUser from './singleUser'
import cats from './cats'
import cat from './oneCat-reducer'
import cart from './cart-reducer'

const reducer = combineReducers({user, cats, cart, cat, singleUser})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user';
export * from './cats';
export * from './singleUser';
