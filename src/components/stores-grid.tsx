import React from "react";
import { Link } from "react-router-dom";
import Storebanner from "../assets/woman-making-clay-pot-2166456.jpg";
import ab from "../assets/four-assorted-perfume-glass-bottles-965989.jpg";
import photography from "../assets/people-near-vegetable-display-2919590.jpg";
import tech from "../assets/silver-macbook-beside-black-sony-ps4-dualshock-4-silver-682933.jpg";
import carouselimg1 from "../assets/cooked-meat-on-plate-2313686.jpg";
import ReactCarousel from "./react-carousel";
import badge from "../assets/verified-badge.png";
import Icon from "@mdi/react";
import { mdiMapMarker, mdiStar } from "@mdi/js";

interface IStoresGrid {
  stores: [any];
  grid: number;
}
const carouselImages = [
  { src: Storebanner },
  { src: tech },
  { src: ab },
  { src: carouselimg1 },
  { src: photography }
];

const StoresGrid: React.FC<any> = ({ stores, grid = 6 }: IStoresGrid) => {
  return (
    <div className="store-banner">
      <div className={`grid grid-${grid}`}>
        {stores.map((item, index) => (
          <Link to="/" className="each-img-card"key = {index}>
            <div className="vertical-md fig">
              <ReactCarousel
                animation="fadein"
                imgSrc={item.carouselImages}
                interval={6500}
                event = "hover"
                id={index + 2}
              />
              <span className="card-overlay"></span>
              <figure className="store-details">
                <div className="img">
                  <img src={ab} alt="stores" />
                </div>
                <figcaption>
                  <p>Nike</p> <img src={badge} alt="badge" />
                </figcaption>
              </figure>
            </div>
            <div className="store-desc">
              {item.premium && <div className="badge badge-sm">Premium</div>}
              <p className="label label-sm ">
                <Icon path={mdiMapMarker} size={0.55} color="#8b8b8b" />{" "}
                {item.location}
              </p>
              <p className="desc">
                We build the best shoes for sports. Just do it
              </p>
              <p className="rating label label-md">
                4.32
                <Icon path={mdiStar} size={0.66} color="#8333b8" />
                <span className="review ">(204)</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default StoresGrid;
