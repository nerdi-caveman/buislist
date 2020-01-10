import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import ab from "../assets/four-assorted-perfume-glass-bottles-965989.jpg";
import ReactCarousel from "./react-carousel";
import badge from "../assets/verified-badge.png";
import Icon from "@mdi/react";
import { mdiMapMarker, mdiStar, mdiHeart, mdiHeartOutline } from "@mdi/js";

interface addToFavourite{
    
}
interface IStoresGrid {
  stores: any;
  grid: number;
  addToFavourite: any;
}

const StoresGrid: React.FC<any> = ({
  stores,
  grid = 6,
  addToFavourite
}: IStoresGrid) => {
  const [storesState, setStoresState] = useState(stores);

  //   const reducer = (state: any, action: { type: string, index:number | string, value :any }) => {
  //     switch (action.type) {
  //       case "addFavourite": {
  //         return [...state, {...rest}];
  //       }
  //       default:
  //         throw new Error();
  //     }
  //   };
  //   const [storesState, dispatch] = useReducer(reducer, stores);

  const updateFavourite = (item:any ,index:number) => {
    const newStores = [...storesState];
    newStores[index]["favourite"] = !item.favourite;
    setStoresState(() => [...newStores]);

    addToFavourite(item, !item.favourite);
  }

  return (
    <div className="store-banner">
      <div className={`grid grid-${grid}`}>
        {storesState.map((item: any, index: number) => (
          <div key={index}>
            <div className="favourite">
              <input
                checked={item.favourite}
                type="checkbox"
                id={"favourite" + index}
                name={"favourite" + index}
                onChange={()=>updateFavourite(item, index)}
              />
              <label htmlFor={`favourite${index}`}>
                <Icon
                  className="not-selected"
                  path={mdiHeartOutline}
                  size={0.9}
                  color="#444444"
                />
                <Icon
                  className="selected"
                  path={mdiHeart}
                  size={0.9}
                  color="#444444"
                />
              </label>
            </div>
            <Link to="/" className="each-img-card">
              <div className="vertical-md fig">
                <ReactCarousel
                  animation="fadein"
                  imgSrc={item.carouselImages}
                  interval={3000}
                  event="hover"
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
          </div>
        ))}
      </div>
    </div>
  );
};
export default StoresGrid;
