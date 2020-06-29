import React from "react"
import Icon from "@mdi/react"
import { mdiHeart, mdiHeartOutline, mdiClose } from "@mdi/js"
import Slider from "./slider"
import { formatCurrency } from "../modules/price"
import { textToSlug } from "../utils/string"

interface IProductGrid {
  product: any
  grid?: number
  removeFavouriteIcon?: boolean
  id?: string | number
  removeFromFavourite?: Function | any
  addToFavourite?: any
}

const ProductGrid: React.FC<IProductGrid> = ({
  product,
  grid = 6,
  addToFavourite,
  removeFavouriteIcon = false,
  removeFromFavourite,
  id = 1,
}) => {
  return (
    <div className="product-banner">
      <div className={`grid grid-${grid}`}>
        {product.map((item: any, index: number) => (
          <div key={index}>
            <div className="favourite">
              {/* decide the view for either remove from or add to favourite*/}
              {!removeFavouriteIcon ? (
                <>
                  <button onClick={() => addToFavourite(item, index)}>
                    {item.favourite ? (
                      <Icon path={mdiHeart} size={0.8} color="#222222" />
                    ) : (
                      <Icon path={mdiHeartOutline} size={0.8} color="#222222" />
                    )}
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => removeFromFavourite(item, index)}>
                    <Icon
                      className="not-selected"
                      path={mdiClose}
                      size={0.8}
                      color="#222222"
                    />
                  </button>
                </>
              )}
            </div>
            <div className="each-img-card">
              <div className="">
                <Slider
                  id={`slider22${id}${index}`}
                  images={item.carouselImages.slice(0, 1)}
                  margin={6}
                  url={`/product/${textToSlug("JBL Headphones")}/${id}`}
                />
              </div>
              <div className="people-desc">
                {item.premium && (
                  <div className="badge badge-sm badge-sm-back">Promoted</div>
                )}
                <p className="label label-sm ">{item.store.category}</p>
                <p className="desc">{item.name}</p>
                <p className="price">{formatCurrency(item.price, "NGN")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ProductGrid
