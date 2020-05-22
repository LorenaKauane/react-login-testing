import React from "react";
import Dashboard from "./";
import { mount } from "enzyme";

it("Total amount payable", () => {
  const props = {
    username: "João",
    products: [
      {
        id: 1,
        name: "T-shirt",
        price: 10,
      },
      {
        id: 2,
        name: "Pants",
        price: 10,
      },
    ],
  };
  const dashboard = mount(<Dashboard {...props} />);
  expect(dashboard.find("p").at(0).text()).toEqual("Welcome, João!");
  expect(dashboard.find("strong").at(0).text()).toEqual("Total:20");
});
