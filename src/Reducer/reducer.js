import * as actionTypes from "./constants";

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL:
      return action.payload;
    case actionTypes.SEARCH:
      return [action.payload];
    default:
      return state;
  }
};

export default reducer;
