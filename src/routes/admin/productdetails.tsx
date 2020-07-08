import React, { useState } from "react";
import Head from "../../components/head";
import { productsData } from "../../utils/data";
import Slider from "../../components/slider";
import "../../styles/pages/product.scss";
import { toCapital } from "../../utils/string";
import { Link } from "react-router-dom";

const ProductWrapper: React.FC<any> = () => {

  const data = productsData[3];
  const location = data.location;
  const available: boolean =
    data.delivery.available.includes(location.city) ||
    data.delivery.available.includes("any");


  return (
    <div id="product" className="main-container">
      <Head title={`${data.name} in ${data.location}`} />
      <div className="page-container">
        <main>
          <Slider
            id={`slider22`}
            images={data.carouselImages}
            margin={6}
            isLink={false}
          />
          <div className="section-container ">
            <div className="people-desc section">
              <div className="product-det">
                {data.premium && (
                  <div className="badge badge-sm badge-sm-back">Promoted</div>
                )}
                <h2>{data.name} lore</h2>
                <p className="label label-md ">{data.store.category}</p>
                <p className="">
                  {available ? "Delivers" : "Does not deliver"} to{" "}
                  {toCapital(location.city)}
                </p>
              </div>
              
            </div>
            <div className="section">
              <h3>Stores that sell this product</h3>
              <div id="prod-details-storeslist" className="store-logo">
                <Link to={`/stores/${data.store.name}`}>
                  <div className="rounded-img img-md">
                    <img src={data.store.img} alt="store logo" />
                  </div>
                  <p>{toCapital(data.store.name)}</p>
                </Link>
              </div>
              <div id="prod-details-storeslist" className="store-logo">
                <Link to={`/stores/${data.store.name}`}>
                  <div className="rounded-img img-md">
                    <img src={data.store.img} alt="store logo" />
                  </div>
                  <p>{toCapital(data.store.name)}</p>
                </Link>
              </div>
            </div>
            <div className="section">
              <h3>Product details</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur sint dolores reprehenderit eveniet voluptatum
                maiores sequi, quibusdam tempore itaque inventore, dolore, quis
                quae id similique consequatur hic! Non, quas tempora.
              </p>
            </div>
            <div className="section" id="spec">
              <h3>Specifications</h3>
              <ul>
                {data.specifications.map((item: any, index: number) => (
                  <li>
                    <h4>{item.name}: </h4>
                    <p>{item.value}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="section"></div>
          </div>
        </main>
      </div>
      
    </div>
  );
};
export default ProductWrapper;
