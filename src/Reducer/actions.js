import * as api from "../api/api";
import * as actionTypes from "./constants";

export const fetchAll = () => async (dispatch) => {
  try {
    api
      .getData()
      .then((res) =>
        dispatch({ type: actionTypes.FETCH_ALL, payload: res.data })
      );
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearches = (query) => async (dispatch) => {
  try {
    api.getSearch(query).then((res) => {
      if (res.data.country) {
        dispatch({ type: actionTypes.SEARCH, payload: res.data });
      } else {
        dispatch({ type: actionTypes.FETCH_ALL, payload: res.data });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
