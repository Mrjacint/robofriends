import React from "react";
import { shallow } from "enzyme";

import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobot: jest.fn(),
    robots: [
      {
        id: 3,
        name: "jhon",
        email: "jhon@gmail.com",
      },
    ],
    searchField: "a",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("expect to render MainPage component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robots correctly", () => {
  //console.log(wrapper.find("CardList").props().robots);
  const mockProps2 = {
    onRequestRobot: jest.fn(),
    robots: [
      {
        id: 3,
        name: "jhon",
        email: "jhon@gmail.com",
      },
    ],
    searchField: "a",
    isPending: false,
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);

  expect(wrapper.find("CardList").props().robots).toEqual([]);
  expect(wrapper2.find("CardList").props().robots).toEqual([]);
});

it("filters robots correctly 2", () => {
  const mockProps2 = {
    onRequestRobot: jest.fn(),
    robots: [
      {
        id: 3,
        name: "jhon",
        email: "jhon@gmail.com",
      },
    ],
    searchField: "jhon",
    isPending: false,
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);

  expect(wrapper2.find("CardList").props().robots).toEqual([
    {
      id: 3,
      name: "jhon",
      email: "jhon@gmail.com",
    },
  ]);
});

it("expect render all components", () => {
  //console.log(wrapper.debug());
  expect(wrapper.find("div").length).toBe(1);
});

it("expect render loading text", () => {
  //console.log(wrapper.debug());
  wrapper.setProps({ isPending: true });
  expect(wrapper.find("div").length).toBe(0);
  expect(wrapper.find("h1").length).toBe(1);
  expect(wrapper.find("h1").text()).toContain("Loading");
});
