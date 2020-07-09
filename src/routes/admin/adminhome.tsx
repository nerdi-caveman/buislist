import React, { useState } from "react";
import Head from "../../components/head";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import "../../styles/pages/home.scss";
import Statistics from '../../components/stats';
import Searchbar from "../../components/adminsearchbar";
import Userchart from "../../components/userchart";
import Productssold from "../../components/productssold";


const Adminhome: React.FC<{}> = props => {

  const data = ["Ibadan, Nigeria", "Lagos, Nigeria", "Berlin, Germany"];
  const optionsMenu = ["All", "Stores", "Products"];
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

  const SliderLabel: React.FC<any> = () => {
    return (
      <div className="carousel-label">
        <p className="label">INTRODUCING</p>
        <h2>Uber Stores</h2>
        <p className="desc">Grow your business, manage orders, engage with your customers and more</p>

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

  const addStoreFavourite = (item: any, value: boolean) => {
    item.favourite = !value;
  };

  return (
    <div id= "home" className="home">
      <Head title="Find talented people, great products, and local stores nearby" />     

       
      <section id="left-section" className="side-section">
        <div className="page-container">
        
        <div className="ls-part">
        <div className="stats-part">  
        <div className="row space-between section-head">
            <h2>Statistics</h2>
            <Searchbar />
          </div>
          <div className="side-grid">
            <Statistics />
          </div>
        </div>
        </div>
        </div>
      </section>


      <section id="right-section" className="side-section">
        <div className="page-container">
          <div className="row space-between section-head">
            <h2>Products sold</h2>
          </div>
          <div className="side-grid">
          <Productssold />
          </div>
          <div className="see-all">
            <Link to="/products">
              See all Products
              <Icon path={mdiChevronRight} color="#ff5a60" size={1.2} />
            </Link>
          </div>
        </div>
      </section>  


      <section id="bottom-section" className="side-section">
        <div className="page-container">
      <div className="stats-part">  
            <Userchart />
        </div>
        </div>
      </section>    

    </div>
  );
};
export default Adminhome;
