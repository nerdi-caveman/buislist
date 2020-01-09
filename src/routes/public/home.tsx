import React, { useState } from "react";
import Head from "../../components/head";
import Imagebanner from "../../assets/people-near-vegetable-display-2919590.jpg";
import Storebanner from "../../assets/barts-store-signage-1884573.jpg";
import tech from "../../assets/silver-macbook-beside-black-sony-ps4-dualshock-4-silver-682933.jpg";
import carouselimg1 from "../../assets/cooked-meat-on-plate-2313686.jpg";
import media from "../../assets/headphones_camera_retro_122094_3840x2400.jpg";
import Productbanner from "../../assets/brown-top-hanging-on-rack-1488464.jpg";
import Accessoriesbanner from "../../assets/headphones_bw_headset_120277_3840x2400.jpg";
import photography from "../../assets/woman-making-clay-pot-2166456.jpg";
import ab from "../../assets/four-assorted-perfume-glass-bottles-965989.jpg";
import ReactDataList from "../../components/react-datalist";
import { Link } from "react-router-dom";
import Img from "react-image";
import Slider from "../../components/slider";
import ReactCarousel from "../../components/react-carousel";
import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import StoresGrid from "../../components/stores-grid";
// import "../../styles/components/stores-grid.scss";

const firstSlider = [
  { src: Storebanner, caption: "Stores" },
  { src: tech, caption: "Products" },
  { src: photography, caption: "People" }
];
const carouselImages = [
  { src: Storebanner },
  { src: tech },
  { src: ab },
  { src: carouselimg1 },
  { src: photography }
];
const storesImages: any = [
  {
    carouselImages: [
      { src: media },
      { src: tech },
      { src: Storebanner },
      { src: ab },
      { src: Productbanner }
    ],
    premium: true,
    location: "Ibadan, Nigeria"
  },
  {
    carouselImages: [
      { src: Storebanner },
      { src: media },
      { src: carouselimg1 },
      { src: photography },
      { src: tech }
    ],
    premium: true,
    location: "Lagos, Nigeria"
  },
  {
    carouselImages: [
      { src: carouselimg1 },
      { src: Storebanner },
      { src: Productbanner },
      { src: tech },
      { src: Accessoriesbanner }
    ],
    premium: true,
    location: "Anambra, Nigeria"
  },
  {
    carouselImages: [
      { src: Productbanner },
      { src: carouselimg1 },
      { src: tech },
      { src: ab },
      { src: photography }
    ],
    premium: true,
    location: "Abuja, Nigeria"
  },
  {
    carouselImages: [
      { src: tech },
      { src: Productbanner },
      { src: media },
      { src: carouselimg1 },
      { src: Accessoriesbanner }
    ],
    premium: true,
    location: "Ibadan, Nigeria"
  },
  {
    carouselImages: [
      { src: Storebanner },
      { src: media },
      { src: carouselimg1 },
      { src: photography },
      { src: tech }
    ],
    premium: true,
    location: "Port Harcout, Nigeria"
  },
  {
    carouselImages: [
      { src: carouselimg1 },
      { src: Storebanner },
      { src: Productbanner },
      { src: tech },
      { src: Accessoriesbanner }
    ],
    premium: true,
    location: "Osogbo, Nigeria"
  },
  {
    carouselImages: [
      { src: Productbanner },
      { src: carouselimg1 },
      { src: tech },
      { src: ab },
      { src: photography }
    ],
    premium: false,
    location: "Lagos, Nigeria"
  },
  {
    carouselImages: [
      { src: tech },
      { src: Productbanner },
      { src: media },
      { src: carouselimg1 },
      { src: Accessoriesbanner }
    ],
    premium: false,
    location: "Abuja, Nigeria"
  }
];
const Home: React.FC<{}> = props => {
  const data = ["Ibadan, Nigeria", "Lagos, Nigeria", "Berlin, Germany"];
  const optionsMenu = ["All", "Stores", "Products", "People"];
  const [menu, setMenu] = useState(optionsMenu[0]);
  const itemData = [
    "Perfume oils",
    "Software Engineer",
    "Dessy Naija",
    "Fashion designer",
    "Photographer"
  ];
  const [items, setItems] = useState([""]);

  const search = (e: any): void => {
    let replace: string = e.target.value.toLowerCase();
    let regex = new RegExp(replace);

    const fetchData: string[] = itemData.filter(item =>
      item.toLowerCase().match(regex) ? true : false
    );
    setItems(fetchData);
  };

  const SliderLabel: React.FC = () => {
    return (
      <div className="carousel-label">
        <p className="label">INTRODUCING</p>
        <h2>Uber Stores</h2>
        <p className="desc">Grow your business, manage orders, and more</p>

        <Link to="">
          <button className="btn btn-md">
            <span className="rpple"></span>
            <p>Own a store</p>
            <Icon path={mdiChevronRight} size={0.8} color="#4b4b4b" />
          </button>
        </Link>
      </div>
    );
  };

  return (
    <div className="home">
      <Head title="Local stores and business nearby" />
      <section className="landing-page-header">
        <div className="banner-img">
          <Img src={Imagebanner} alt="Banner" />
        </div>
        <div className="header-search">
          <div className="page-container">
            <div className="header-filtr">
              <h1>Find local stores, services and talents around you.</h1>
              <form>
                <div className="form-group" id="fltr-item">
                  <label htmlFor="item">LOOKING FOR</label>
                  <ReactDataList
                    list="item"
                    placeholder="Everything"
                    forcePoly={true}
                    options={items}
                    menuTitle="Explore"
                    onInputChange={search}
                    initialMenuFilter={menu}
                    optionsMenu={optionsMenu}
                    getSelectedMenu={(e: any) => setMenu(e)}
                    getSelectedOption={(e: any) => console.log(e)}
                  />
                </div>
                <div className="form-group" id="fltr-where">
                  <label htmlFor="location">WHERE</label>
                  <ReactDataList
                    list="location"
                    placeholder="Anywhere"
                    forcePoly={true}
                    options={data}
                    onInputChange={(e: any) => console.log(e.target.value)}
                    getSelectedOption={(e: any) => console.log(e)}
                  />
                </div>
                <div
                  className="form-group row-align-right"
                  style={{ margin: "7px 0 0", paddingBottom: 0 }}
                >
                  <button type="button" className="btn btn-lg btn-primary">
                    <span className="rpple"></span>
                    <p>Search</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="explore">
        <div className="page-container">
          <h2>Discover </h2>
        </div>
        <Slider id="slider1" images={firstSlider} margin={25} />
      </section>

      <section id="learn-more-stores" className="mini-section ">
        <ReactCarousel
          animation="fadein"
          imgSrc={carouselImages}
          interval={6500}
          label={<SliderLabel />}
        />
      </section>

      <section id="stores" className="mini-section ">
        <div className="page-container">
          <div className = "row space-between section-head">
            <h2>Discover Stores</h2> <Link to="">SEE ALL<Icon path = {mdiChevronRight} color = "#ff5a60" size = {1.2}/></Link>
          </div>
          <StoresGrid stores={storesImages} />
        </div>
      </section>
    </div>
  );
};
export default Home;
