import React from "react";
import { connect } from "react-redux";

import { setSearchField, requestRobots } from "../actions";
import "./App.css";
import MainPage from "../components/MainPage";
import { ImainProps } from "../types";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IinitialStateRobots, IinitalStateSearch, Idispatch } from "../types";

interface Istate {
  searchRobots: IinitalStateSearch;
  requestRobots: IinitialStateRobots;
}

const mapStateToProps = (state: Istate) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
): Idispatch => {
  return {
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setSearchField(event.target.value)),
    onRequestRobot: () => dispatch(requestRobots()),
  };
};

const App: React.FunctionComponent<ImainProps> = (props) => {
  // console.log(props)
  return <MainPage {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
