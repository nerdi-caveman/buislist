import React from "react"
import UserHeader from "../../../components/userheader"
import Tab from "../../../components/tab"
import { getSearchParams } from "../../../utils"
import { withRouter, RouteComponentProps } from "react-router-dom"
import ProductGrid from "../../../components/product-grid"
import StoresGrid from "../../../components/stores-grid"
interface IFavouriteWrapper extends RouteComponentProps {
  favouriteProduct: any[]
  setFavouriteProduct: any
  favouriteStore: any[]
  setFavouriteStore: any
  removeFromFavourite: Function
}

const FavouriteWrapper: React.FC<IFavouriteWrapper> = ({
  favouriteProduct,
  setFavouriteProduct,
  removeFromFavourite,
  favouriteStore,
  setFavouriteStore,
  location,
}) => {
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
                  removeFromFavourite={(item: any, idx: number) => {
                    removeFromFavourite(
                      favouriteProduct,
                      setFavouriteProduct ,
                      item,
                      idx
                    )
                  }}
                />
              ) : (
                <StoresGrid
                  removeFavouriteIcon={true}
                  id="2"
                  stores={favouriteStore}
                  removeFromFavourite={(item: any, idx: number) => {
                    removeFromFavourite(
                      favouriteStore,
                      setFavouriteStore,
                      item,
                      idx
                    )
                  }}
                  showDetails={false}
                />
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
export default withRouter(FavouriteWrapper)
