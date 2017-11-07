/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {default as Cart} from './Cart.jsx'
export {Login, Signup} from './auth-form'
export { default as AllCatsComponent} from './AllCatsComponent'
export { default as SingleUserComponent} from './SingleUserComponent.jsx'
export { default as SingleCat} from './SingleCat.jsx'
export { default as AllOrders} from './AllOrders.jsx'
export { default as SingleOrder} from './SingleOrder.jsx'
export { default as BuildPurchaseComponent} from './BuildPurchaseComponent.jsx'
export { default as ThankYou} from './ThankYou.js'
export { default as UserManagementComponent} from './UserManagementComponent.jsx'

