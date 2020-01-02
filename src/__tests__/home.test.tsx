import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "../routes/public/home";

Enzyme.configure({ adapter: new Adapter() });

describe("Home page", () => {
  it("Should render home page", () => {
    shallow(<Home />);
  });

  it("Should display initial location", () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find(".header-filtr form #location").text()).toEqual("");
  });

  it("Should set location", () => {
    const wrapper = mount(<Home />);
    wrapper
      .find(".header-filtr form #location")
      .simulate("change", { target: { value: "Ibadan" } });
    expect(wrapper.find(".header-filtr form #location").prop("value")).toBe(
      "Ibadan"
    );
  });

  it("Should show location dropdown", () => {
    const wrapper = mount(<Home />);
    wrapper
      .find(".header-filtr form #location")
      .simulate("change", { target: { value: "Ibadan" } });
    expect(wrapper.find(".header-filtr form #location").prop("value")).toBe(
      "Ibadan"
    );
  });
});
