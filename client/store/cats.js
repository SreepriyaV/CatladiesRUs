import axios from 'axios'


/**
 * ACTION TYPES
 */
const GET_CATS = 'GET_CATS'


/**
 * INITIAL STATE
 */
const defaultCats = [];

/**
 * ACTION CREATORS
 */
const getCats = users => ({type: GET_CATS, users})


/**
 * THUNK CREATORS
 */
export const fetchCats = () =>
  dispatch =>
    axios.get('/api/cats/')
      .then(res =>
        dispatch(getCats(res.data || defaultUser)))
      .catch(err => console.log(err))



/**
 * REDUCER
 */
export default function (state = defaultCats, action) {
  switch (action.type) {
    case GET_CATS:
      return {...state, users: action.users}
   
    default:
      return state
  }
}
