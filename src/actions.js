import {
  CHANGE_SEARCH_FIELD,
  REQEST_ROBOTS_PENDING,
  REQEST_ROBOTS_SUCCESS,
  REQEST_ROBOTS_FAILED,
} from "./constants";

import { apiCall } from "./apis/api";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQEST_ROBOTS_PENDING });
  return apiCall("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
      //console.log(data);
      dispatch({ type: REQEST_ROBOTS_SUCCESS, payload: data });
    })
    .catch((error) => dispatch({ type: REQEST_ROBOTS_FAILED, payload: error }));
};
