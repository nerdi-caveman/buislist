import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Slider from "../components/slider";
import Storebanner from "../assets/san-diego-apparel-america-s-finest-city-176837.jpg";
import tech from "../assets/araltasher___BtjFtkShNjx___.jpg";
import media from "../assets/headphones_camera_retro_122094_3840x2400.jpg";
import Productbanner from "../assets/brown-top-hanging-on-rack-1488464.jpg";
import Accessoriesbanner from "../assets/headphones_bw_headset_120277_3840x2400.jpg";
import photography from "../assets/back1.jpg";

Enzyme.configure({ adapter: new Adapter() });

describe("Slider component", () => {
  it("Should render", () => {
    const firstSlider = [
      { src: Storebanner, caption: "Beauty" },
      { src: tech, caption: "Tech" },
      { src: photography, caption: "Photography" },
      { src: Accessoriesbanner, caption: "Accessories" },
      { src: Productbanner, caption: "Fasion" },
      { src: media, caption: "Media" }
    ];
    shallow(<Slider images={firstSlider} />);
  });
});
