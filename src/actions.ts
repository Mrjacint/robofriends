import {
  CHANGE_SEARCH_FIELD,
  REQEST_ROBOTS_PENDING,
  REQEST_ROBOTS_SUCCESS,
  REQEST_ROBOTS_FAILED,
} from "./constants";

import {} from './types'

import { apiCall } from "./apis/api";
import { AnyAction } from "redux";
import { ThunkDispatch } from 'redux-thunk'


export const setSearchField = (text:string) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    //console.log(dispatch)
  dispatch({ type: REQEST_ROBOTS_PENDING });
  try {
        const data = await apiCall("https://jsonplaceholder.typicode.com/users");
        dispatch({ type: REQEST_ROBOTS_SUCCESS, payload: data });
    } catch (error) {
        return dispatch({ type: REQEST_ROBOTS_FAILED, payload: error });
    }
};
