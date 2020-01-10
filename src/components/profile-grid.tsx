import React from "react";
import { Link } from "react-router-dom";
import ab from "../assets/four-assorted-perfume-glass-bottles-965989.jpg";
import ReactCarousel from "./react-carousel";
import badge from "../assets/verified-badge.png";
import Icon from "@mdi/react";
import { mdiMapMarker, mdiStar } from "@mdi/js";

interface IProfileGrid {
  stores: [any];
  grid: number;
}

const ProfileGrid: React.FC<any> = ({ stores, grid = 6 }: IProfileGrid) => {
  return (
    <div className="people-banner">
      <div className={`grid grid-${grid}`}>
        {stores.map((item, index) => (
          <div key={index}>
            <Link to="/" className="each-img-card">
              <div className="vertical-md fig">
                <span className="card-overlay"></span>
                <img src={item.src} alt="people" className="profile-back" />
                <figure className="people-details">
                  <div className="img">
                    <img src={item.src} alt="stores" />
                  </div>
                  <figcaption>
                    <p className="name">Nike</p> <img src={badge} alt="badge" />
                  </figcaption>
                </figure>
              </div>
              <div className="people-desc">
                {item.premium && <div className="badge badge-sm">Premium</div>}
                <p className="label label-sm ">Photography</p>
                <p className="desc">
                  We build the best shoes for sports. Just do it✔
                  <span role="img" aria-label="fire">
                    🔥
                  </span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProfileGrid;
