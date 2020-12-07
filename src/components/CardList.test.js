import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("expect to render without crashing", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Jhon Doe",
      username: "JhonJhon",
      email: "johon@gmail.com",
    },
  ];

  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
