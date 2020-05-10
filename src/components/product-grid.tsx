import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiHeart, mdiHeartOutline } from "@mdi/js";
import Slider from "./slider";
import { formatCurrency } from "../modules/price";
import { textToSlug } from "../utils/string";

interface IProductGrid {
  product: any;
  grid: number;
  id: string | number;
  addToFavourite: any;
}

const ProductGrid: React.FC<any> = ({
  product,
  grid = 6,
  addToFavourite,
  id = 1,
}: IProductGrid) => {
  const [productState, setProductState] = useState(product);

  const updateFavourite = (item: any, index: number) => {
    const newProfiles = [...productState];
    newProfiles[index]["favourite"] = !item.favourite;
    setProductState(() => [...newProfiles]);

    addToFavourite(item, !item.favourite);
  };

  return (
    <div className="product-banner">
      <div className={`grid grid-${grid}`}>
        {productState.map((item: any, index: number) => (
          <div key={index}>
            <div className="favourite">
              <input
                checked={item.favourite !== undefined ? item.favourite : false}
                type="checkbox"
                id={`profilefavourite${id}${index}`}
                name={`profilefavourite${id}${index}`}
                onChange={() => updateFavourite(item, index)}
              />
              <label htmlFor={`profilefavourite${id}${index}`}>
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
            <div className="each-img-card">
              <div className="">
                <Slider
                  id={`slider22${id}${index}`}
                  images={item.carouselImages}
                  margin={6}
                  url={`/product/${textToSlug("JBL Headphones")}/${id}`}
                />
              </div>
              <div className="people-desc">
                {item.premium && (
                  <div className="badge badge-sm badge-sm-back">Promoted</div>
                )}
                <p className="label label-sm ">Phones, pcs & Gadgets </p>
                <p className="desc">JBL Headphones</p>
                <p className="price">{formatCurrency("2300", "NGN")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductGrid;
