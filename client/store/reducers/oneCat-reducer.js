import axios from "axios";

//ACTION TYPES
const GET_A_CAT = "GET_A_CAT";

//INITIAL STATE
const defaultCat = {};

//ACTION CREATORS
const getOneCat = cat => ({ type: GET_A_CAT, cat });

//THUNK CREATORS
export const fetchOneCat = catId => dispatch => {
  axios
    .get(`/api/cats/${catId}`)
    .then(res => dispatch(getOneCat(res.data)))
    .catch(err => console.log(err));
};

//REDUCER
export default function(state = defaultCat, action) {
  switch (action.type) {
    case GET_A_CAT:
      return action.cat;
    default:
      return state;
  }
}
