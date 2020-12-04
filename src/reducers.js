import {
  CHANGE_SEARCH_FIELD,
  REQEST_ROBOTS_PENDING,
  REQEST_ROBOTS_SUCCESS,
  REQEST_ROBOTS_FAILED,
} from "./constants";

const initalStateSearch = {
  searchField: "",
};

export const searchRobots = (state = initalStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case REQEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
