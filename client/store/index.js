import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
<<<<<<< HEAD
import user from './reducers/user'
=======
import user from './user'
>>>>>>> master
import cats from './reducers/cats'
import cat from './reducers/oneCat-reducer'
import cart from './reducers/cart-reducer'
<<<<<<< HEAD
import cat from './reducers/oneCat-reducer'
const reducer = combineReducers({user, cats, cat, cart})
=======
import singleUser from './reducers/singleUser'

const reducer = combineReducers({user, cats, cart, cat, singleUser})
>>>>>>> master
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './reducers/user';
export * from './reducers/cats';
export * from './reducers/oneCat-reducer';
export * from './reducers/cart-reducer'
export * from './reducers/singleUser';
