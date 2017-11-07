import axios from 'axios';

//ACTION TYPES
const CREATE_ORDER = 'CREATE_ORDER'
const LOAD_ORDER = 'LOAD_ORDER'

//ACTION CREATORS
export const createOrder = (order) => ({type: CREATE_ORDER, order})
export const loadOrder = (order) => ({type: LOAD_ORDER, order})

//INITIAL STATE
const defaultCO = {}

//THUNK CREATORS
export const createNewOrder = (cart, quantity, totalPrice, userId) =>
    dispatch => {
        axios.post('/api/orders', {totalPrice, cart, quantity, userId})
        .then(res => {
            dispatch(createOrder(res.data))
        })
        .catch(err => console.error(err))

    }

export const loadPreviousOrder = (userId) => 
    dispatch => {
        axios.get(`/api/orders/${userId}`)
        .then(res => dispatch(loadOrder(res.data)))
        .catch(err => console.error(err))
    }

//REDUCER

export default function (state = defaultCO, action) {
    switch (action.type) {
        case CREATE_ORDER:
            return action.order;
        case LOAD_ORDER:
            return action.order;
        default:
            return state;
    }
}