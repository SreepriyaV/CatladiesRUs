import axios from "axios";

//ACTION TYPES
const GET_CATS = "GET_CATS";

//INITIAL STATE
const defaultCats = [];

//ACTION CREATORS
const getCats = cats => ({ type: GET_CATS, cats });

//THUNK CREATORS
export const fetchCats = () => dispatch =>
  axios
    .get("/api/cats/")
    .then(res => dispatch(getCats(res.data)))
    .catch(err => console.log(err));

//REDUCER
export default function(state = defaultCats, action) {
  switch (action.type) {
    case GET_CATS:
      return action.cats;

    default:
      return state;
  }
}
