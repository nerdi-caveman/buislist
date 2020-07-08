import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "../routes/public/home";

Enzyme.configure({ adapter: new Adapter() });

describe("Home page", () => {
  it("Should render home page", () => {
    shallow(<Home />);
  });
});
