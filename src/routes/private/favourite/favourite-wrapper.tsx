import React from "react"
import UserHeader from "../../../components/userheader"
import Tab from "../../../components/tab"
import { getSearchParams } from "../../../utils"
import { withRouter, RouteComponentProps } from "react-router-dom"
import ProductGrid from "../../../components/product-grid"
interface IFavouriteWrapper extends RouteComponentProps {
  favouriteProduct: any[]
  setFavouriteProduct: any
}

const FavouriteWrapper: React.FC<IFavouriteWrapper> = ({
  favouriteProduct,
  setFavouriteProduct,
  location,
}) => {
  const removeFromFavourite: Function = (item: any, idx: number) => {
    const obj = [...favouriteProduct]
    obj.splice(obj.indexOf(item), 1)
    setFavouriteProduct(obj)
  }
  const tab: string = getSearchParams(location.search).tab || ""

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

          <section className="section-container">
            <div className="mini-section">
              {tab.toLowerCase() !== "stores" ? (
                <ProductGrid
                  product={favouriteProduct}
                  removeFavouriteIcon={true}
                  removeFromFavourite={removeFromFavourite}
                />
              ) : (
                ""
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
export default withRouter(FavouriteWrapper)
