import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactCarousel from "../components/react-carousel";
import img1 from "../../assets/headphones_camera_retro_122094_3840x2400.jpg";
import img2 from "../../assets/brown-top-hanging-on-rack-1488464.jpg";
import img3 from "../../assets/headphones_bw_headset_120277_3840x2400.jpg";

Enzyme.configure({ adapter: new Adapter() });

describe("React Carousel", () => {
  it("Should render carousel", () => {
    shallow(<ReactCarousel animation="fadein" />);
  });

  it("Should not accept supported animation type ", () => {
    const wrapper = mount(<ReactCarousel animation="fadefin" />);
    expect(wrapper.find("p.error")).toHaveLength(1);
  });

  it("Should accept supported animation type ", () => {
    const wrapper = mount(<ReactCarousel animation="fadein" />);
    expect(wrapper.find("p.error")).toHaveLength(0);
  });

  it("Should have all 3 images", () => {
    const img = ["", "", ""];
    const wrapper = mount(<ReactCarousel animation="fadein" imgSrc={img} />);
    expect(wrapper.find("img")).toHaveLength(3);
  });
});
