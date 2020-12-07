import {
  CHANGE_SEARCH_FIELD,
  REQEST_ROBOTS_PENDING,
  REQEST_ROBOTS_SUCCESS,
  REQEST_ROBOTS_FAILED,
} from "./constants";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initalStateSearch = {
    searchField: "",
  };

  it("should return the inital state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle CHANGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchRobots(initalStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({
      searchField: "abc",
    });
  });
});

describe("requestRobots", () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: "",
  };

  it("should return the inital state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQEST_ROBOTS_PENDING,
      })
    ).toEqual({
      isPending: true,
      robots: [],
      error: "",
    });
  });

  it("should handle REQEST_ROBOTS_SUCCESS", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 3,
            name: "jhon",
            email: "jhon@gmail.com",
          },
        ],
      })
    ).toEqual({
      isPending: false,
      robots: [
        {
          id: 3,
          name: "jhon",
          email: "jhon@gmail.com",
        },
      ],
      error: "",
    });
  });

  it("should handle REQEST_ROBOTS_FAILED", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQEST_ROBOTS_FAILED,
        payload: "error massage",
      })
    ).toEqual({
      isPending: false,
      robots: [],
      error: "error massage",
    });
  });
});
