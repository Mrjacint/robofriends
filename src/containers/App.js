import React, { useEffect } from "react";
import { connect } from "react-redux";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import Header from "../components/Header";
import "./App.css";

import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobot: () => dispatch(requestRobots()),
  };
};

const App = (props) => {
  //   const [robots, setRobots] = useState([]);
  //const [searchField, setSerachfeald] = useState("");

  const { onRequestRobot } = props;
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => {
    //     setRobots(users);
    //   });
    onRequestRobot();
  }, [onRequestRobot]);

  //   const onSearchChange = (event) => {
  //     setSerachfeald(event.target.value);
  //   };

  const filteredRobots = props.robots.filter((robot) => {
    return robot.name.toLowerCase().includes(props.searchField.toLowerCase());
  });
  return props.isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <Header />
      <SearchBox searchChange={props.onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
