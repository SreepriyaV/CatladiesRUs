import axios from "axios";

//ACTION TYPES
const GET_ORDERS = "GET_ORDERS";
const GET_ONE_ORDER = "GET_ONE_ORDER";

//INITIAL STATE
const defaultOrders = [];

//ACTION CREATORS
const getOrders = orders => ({ type: GET_ORDERS, orders });
const getOneOrder = singleOrder => ({ type: GET_ONE_ORDER, singleOrder });

//THUNK CREATORS
export const fetchOrders = userId => dispatch =>
  axios
    .get(`/api/orders/${userId}`)
    .then(res => dispatch(getOrders(res.data)))
    .catch(err => console.log(err));

export const fetchSingleOrder = orderId => dispatch =>
  axios
    .get(`/api/orders/users/${orderId}`)
    .then(res => dispatch(getOneOrder(res.data)))
    .catch(err => console.log(err));

export const changeStatus = orderId => dispatch =>
  axios
    .put(`/api/orders/users/${orderId}`)
    .then(res => dispatch(getOneOrder(res.data)))
    .catch(err => console.log(err));

//REDUCER
export default function(state = defaultOrders, action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders;
    case GET_ONE_ORDER:
      return action.singleOrder;
    default:
      return state;
  }
}
