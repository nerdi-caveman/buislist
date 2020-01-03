import React, { useState } from "react";
import Head from "../../components/head";
import Imagebanner from "../../assets/people-near-vegetable-display-2919590.jpg";
import Storebanner from "../../assets/san-diego-apparel-america-s-finest-city-176837.jpg";
import tech from "../../assets/araltasher___BtjFtkShNjx___.jpg";
import media from "../../assets/headphones_camera_retro_122094_3840x2400.jpg";
import Productbanner from "../../assets/brown-top-hanging-on-rack-1488464.jpg";
import Accessoriesbanner from "../../assets/headphones_bw_headset_120277_3840x2400.jpg";
import photography from "../../assets/back1.jpg";
import loader from "../../assets/d938fa8c-09d3-4093-8145-7bb890cf8a76.gif";
import ReactDataList from "react-datalist";
import { Link } from "react-router-dom";
import Img from "react-image";

const Loader: React.FC<any> = () => {
  return (
    <>
      <img src={loader} alt="loading" />
    </>
  );
};

const Home: React.FC<{}> = props => {
  const data = ["Ibadan, Nigeria", "Lagos, Nigeria", "Berlin, Germany"];
  const optionsMenu = ["All", "Stores", "Products", "Services"];
  const [menu, setMenu] = useState(optionsMenu[0]);
  const itemData = [
    "Perfume oils",
    "Software Engineer",
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
    console.log(fetchData);
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
                  <label htmlFor="item">FIND</label>
                  <ReactDataList
                    list="item"
                    placeholder="What you are looking for"
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
          <h2>Discover buislist</h2>
          <div className="grid grid-3">
            <Link to="" className="each-img-card">
              <figure className="vertical">
                <Img src={media} alt="stores" />
                <span className="card-overlay"></span>
                <figcaption>Media</figcaption>
              </figure>
            </Link>
            <Link to="" className="each-img-card">
              <figure className="vertical">
                <Img src={Productbanner} alt="stores" />
                <span className="card-overlay"></span>
                <figcaption>Fashion</figcaption>
              </figure>
            </Link>
            <Link to="" className="each-img-card">
              <figure className="vertical">
                <Img src={Accessoriesbanner} alt="stores" />
                <span className="card-overlay"></span>
                <figcaption>Accessories</figcaption>
              </figure>
            </Link>
            <Link to="" className="each-img-card">
              <figure className="vertical">
                <Img src={photography} alt="stores" />
                <span className="card-overlay"></span>
                <figcaption>Photgraphy</figcaption>
              </figure>
            </Link>
            <Link to="" className="each-img-card">
              <figure className="vertical">
                <Img src={tech} alt="stores" />
                <span className="card-overlay"></span>
                <figcaption>Tech</figcaption>
              </figure>
            </Link>
            <Link to="" className="each-img-card">
              <figure className="vertical">
                <Img src={Storebanner} alt="stores" />
                <span className="card-overlay"></span>
                <figcaption>Beauty</figcaption>
              </figure>
            </Link>
          </div>
        </div>
      </section>

      <section id="stores" className="mini-section ">
        <div className="page-container">
          <h2>Discover buislist</h2>
          <div className="grid grid-3">
            <Link to="" className="each-img-card">
              <figure className="vertical">
                <Img src={media} alt="stores" />
                <span className="card-overlay"></span>
                <figcaption>Media</figcaption>
              </figure>
            </Link>
            <Link to="" className="each-img-card">
              <figure className="vertical">
                <Img src={Productbanner} alt="stores" />
                <span className="card-overlay"></span>
                <figcaption>Fashion</figcaption>
              </figure>
            </Link>
            <Link to="" className="each-img-card">
              <figure className="vertical">
                <Img src={Accessoriesbanner} alt="stores" />
                <span className="card-overlay"></span>
                <figcaption>Accessories</figcaption>
              </figure>
            </Link>
            <Link to="" className="each-img-card">
              <figure className="vertical">
                <Img src={photography} alt="stores" />
                <span className="card-overlay"></span>
                <figcaption>Photgraphy</figcaption>
              </figure>
            </Link>
            <Link to="" className="each-img-card">
              <figure className="vertical">
                <Img src={tech} alt="stores" />
                <span className="card-overlay"></span>
                <figcaption>Tech</figcaption>
              </figure>
            </Link>
            <Link to="" className="each-img-card">
              <figure className="vertical">
                <Img src={Storebanner} alt="stores" />
                <span className="card-overlay"></span>
                <figcaption>Beauty</figcaption>
              </figure>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
