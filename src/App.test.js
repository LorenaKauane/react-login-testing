import React from "react";
import App from "./App";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

it("should render the Login for the non logged in user", () => {
  const props = {
    isLoggedin: false,
    username: null,
    products: [],
  };
  const app = mount(<App {...props} />);
  expect(toJson(app)).toMatchSnapshot();
});

it("should render the Dashboard for the logged in user", () => {
  const props = {
    isLoggedin: true,
    username: "Pedro",
    products: [
      {
        id: 1,
        name: "T-shirt",
        price: 25,
      },
      {
        id: 2,
        name: "Pants",
        price: 50,
      },
    ],
  };
  const app = mount(<App {...props} />);
  expect(toJson(app)).toMatchSnapshot();
});

it("should render the Dashboard for the logged in user without Products", () => {
  const props = {
    isLoggedin: true,
    username: "Joana",
    products: null,
  };
  const app = mount(<App {...props} />);

  expect(toJson(app)).toMatchSnapshot();
});
