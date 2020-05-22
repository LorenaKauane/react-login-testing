import React from "react";
import Login from "./";
import { mount } from "enzyme";

it("Click the button and show the alert", () => {
  const login = mount(<Login />);
  window.alert = jest.fn();
  login.find("button").simulate("click");
  expect(window.alert).toHaveBeenCalledWith("Hello");
});
