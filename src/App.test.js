import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

it("should render the Login for the non logged in user", () => {
  const props = {
    isLoggedin: false,
    username: null,
    products: [],
  };
  const app = mount(<App {...props} />);

  expect(app.find(Dashboard)).toHaveLength(0);
  expect(app.find(Login)).toHaveLength(1);
  expect(app.find("strong").at(0).text()).toEqual(
    "Hello stranger. Sign in to continue."
  );
  expect(app.find("button").at(0).text()).toEqual("Sign");
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

  expect(app.find(Dashboard)).toHaveLength(1);
  expect(app.find(Login)).toHaveLength(0);

  expect(app.find("p").at(0).text()).toEqual("Welcome, Pedro!");

  expect(app.find("li")).toHaveLength(2);
  expect(app.find("li").at(0).text()).toEqual("Name: T-shirt|Price: 25");
  expect(app.find("li").at(1).text()).toEqual("Name: Pants|Price: 50");
});

it("should render the Dashboard for the logged in user without Products", () => {
  const props = {
    isLoggedin: true,
    username: "Joana",
    products: null,
  };
  const app = mount(<App {...props} />);

  expect(app.find(Dashboard)).toHaveLength(1);
  expect(app.find("p").at(0).text()).toEqual("Welcome, Joana!");
  expect(app.find("strong").at(0).text()).toEqual(
    "Joana has no registered products"
  );
});
