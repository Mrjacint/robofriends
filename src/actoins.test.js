import * as actions from "./actions";
import {
  CHANGE_SEARCH_FIELD,
  REQEST_ROBOTS_PENDING,
  REQEST_ROBOTS_SUCCESS,
} from "./constants";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import nock from "nock";

const mockStore = configureMockStore([thunkMiddleware]);

let store;

beforeEach(() => {
  store = mockStore();
});

it("should create actoin to search robots", () => {
  store.dispatch(actions.requestRobots());
  const text = "act";
  const expectedActoins = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
  expect(actions.setSearchField(text)).toEqual(expectedActoins);
});

it("handels requesting robots API", () => {
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  //console.log(action);
  const expectedActoins = {
    type: REQEST_ROBOTS_PENDING,
  };
  expect(action[0]).toEqual(expectedActoins);
});

it("handels REQEST_ROBOTS_SUCCESS when fetching has been done", () => {
  const fakeAPIData = {
    id: 3,
    name: "jhon",
    email: "jhon@gmail.com",
  };
  const expectedActoins = [
    {
      type: REQEST_ROBOTS_PENDING,
    },
    {
      type: REQEST_ROBOTS_SUCCESS,
      payload: fakeAPIData,
    },
  ];
  const store = mockStore();
  nock("https://jsonplaceholder.typicode.com/")
    .defaultReplyHeaders({
      "access-control-allow-origin": "*",
      "access-control-allow-credentials": "true",
    })
    .persist()
    .get("/users")
    .reply(200, fakeAPIData);

  return store.dispatch(actions.requestRobots()).then(() => {
    console.log("then action", store.getActions());
    expect(store.getActions()).toEqual(expectedActoins);
  });
});
