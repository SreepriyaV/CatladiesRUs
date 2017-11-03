import axios from "axios";

/**
 * ACTION TYPES
 */
const GET_SINGLE_USER = 'GET_SINGLE_USER';
//const CHANGE_STATUS = 'CHANGE_STATUS'

/**
 * INITIAL STATE
 */
const defaultSingleUser = {};

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_SINGLE_USER, user });

//const changeUserStatus = status => ({type: CHANGE_STATUS, status})

/**
 * THUNK CREATORS
 */ 
export const fetchUser = (userId) => dispatch =>
  axios
    .get(`/api/users/${userId}`)
    .then(res => dispatch(getUser(res.data)))
    .catch(err => console.log(err));

export const putStatus = (userId) => dispatch =>
  axios
    .put(`/api/users/${userId}`)
    .then(res => dispatch(getUser(res.data)))
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function(state = defaultSingleUser, action) {
  switch (action.type) {
    case GET_SINGLE_USER:
      return action.user;
      
    default:
      return state;
  }
}
