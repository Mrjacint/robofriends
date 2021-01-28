import {
  CHANGE_SEARCH_FIELD,
  REQEST_ROBOTS_PENDING,
  REQEST_ROBOTS_SUCCESS,
  REQEST_ROBOTS_FAILED,
} from "./constants";
import {
  IinitalStateSearch,
  IinitialStateRobots,
  IsearchRobotAction,
  IrequestRobotsAction,
} from "./types";

const initalStateSearch: IinitalStateSearch = {
    searchField: "",
};

const initialStateRobots: IinitialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
};

export const searchRobots = (
  state = initalStateSearch,
  action: IsearchRobotAction
) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestRobots = (state = initialStateRobots, action: IrequestRobotsAction) => {
  //console.log(state);
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
