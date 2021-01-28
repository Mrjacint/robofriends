import React, { useEffect } from "react";

import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";
import Header from "./Header";

import "./MainPage.css";
import { IRobot, ImainProps } from '../types'



const MainPage: React.FunctionComponent<ImainProps> = (props) => {
  const {
    onRequestRobot,
    robots,
    searchField,
    onSearchChange,
    isPending,
  } = props;

  console.log(props)

  useEffect(() => {
    onRequestRobot();
  }, [onRequestRobot]);

  const filteredRobots: IRobot[] = robots.filter((robot: IRobot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default MainPage;
