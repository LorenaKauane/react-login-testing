import React from "react";
import { mount } from "enzyme";
import Products from "./";

it("Should mount component", () => {
    const wrap = mount(<Products />);
    expect(wrap.find("strong").at(0).text()).toEqual("Hello stranger, Products!");
});
