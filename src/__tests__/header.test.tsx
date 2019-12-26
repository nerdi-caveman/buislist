import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "../components/header";
import { MemoryRouter as Router } from "react-router-dom";
import UserHeader from "../components/userheader";

Enzyme.configure({ adapter: new Adapter() });

describe("Header component", () => {
  const App: React.FC = () => (
    <Router>
      <Header />
    </Router>
  );
  it("Should render Header", () => {
    shallow(<App />);
  });

  it("should have three lists", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("header nav #main-nav li")).toHaveLength(3);
  });

  it("should have a logo container", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("header nav a#logo")).toHaveLength(1);
  });
});

describe("User Header component", () => {
  const App: React.FC = () => (
    <Router>
      <UserHeader />
    </Router>
  );
  it("Should render Header", () => {
    shallow(<App />);
  });

  it("should have four lists", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("header nav #main-nav li")).toHaveLength(4);
  });

  it("should have a logo container", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("header nav a#logo")).toHaveLength(1);
  });
});
