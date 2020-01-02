import React, { useState } from "react";
import Head from "../../components/head";
import Imagebanner from "../../assets/people-near-vegetable-display-2919590.jpg";
import ReactDataList from "react-datalist";

const Home: React.FC<{}> = () => {
  const data = ["Ibadan, Nigeria", "Lagos, Nigeria", "Berlin, Germany"];
  const optionsMenu = ["All", "Stores", "Products", "Services"];
  const [menu, setMenu] = useState(optionsMenu[0]);
  const itemData = [
    "Perfume oils",
    "Software Engineer",
    "Fashion designer",
    "Photographer",
    ""
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
          <img src={Imagebanner} alt="Banner" />
        </div>
        <div className="header-search">
          <div className="page-container">
            <div className="header-filtr">
              <h1>Find local stores and businesses around you.</h1>
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
                    <span className = "rpple"></span>
                    <p>Search</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
