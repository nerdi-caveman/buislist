import React, { useState } from "react"
import UserHeader from "../../../components/userheader"
import Tab from "../../../components/tab"
import { getSearchParams } from "../../../utils"
import { withRouter, RouteComponentProps } from "react-router-dom"
import ProductGrid from "../../../components/product-grid"
import { productsData } from "../../../utils/data"

interface IFavouriteWrapper extends RouteComponentProps {}

const FavouriteWrapper: React.FC<IFavouriteWrapper> = ({ location }) => {
  const [favouriteProduct, setFavouriteProduct] = useState(productsData)

  const removeFromFavourite: Function = (item: any, idx: number) => {
    const obj = [...favouriteProduct]
    obj.splice(obj.indexOf(item), 1)
    setFavouriteProduct(obj)
    console.log(obj)
  }

  return (
    <div className="">
      <UserHeader />
      <div id="favourite" className="main-container">
        <main className="page-container">
          <h1>Favourites</h1>
          <Tab
            search={location.search}
            links={["Products", "Stores"]}
            getSelected={() => {}}
          />

          <ProductGrid
            product={favouriteProduct}
            removeFavouriteIcon={true}
            removeFromFavourite={removeFromFavourite}
          />
        </main>
      </div>
    </div>
  )
}
export default withRouter(FavouriteWrapper)
