import React from "react"
import Head from "../../../components/head"
import "../../../styles/pages/store.scss"
import ProductGrid from "../../../components/product-grid"
import { productsData } from "../../../utils/data"
import Slider from "../../../components/slider"
import { textToSlug } from "../../../utils/string"

type collection = {
  name: string
  products: any
}

type store = {
  name: string
  collections: collection[]
  bestSellers: any[]
}

interface IStoreWrapper {
  storeData: store
}

const StoreWrapper: React.FC<IStoreWrapper> = ({ storeData }) => {
  const { name, collections, bestSellers } = storeData

  const addStoreFavourite = (item: any, value: boolean) => {
    item.favourite = !value
  }

  const collectionSlider = collections.map((item: any, idx: number) => {
    return {
      src: item.products[0].carouselImages[0].src,
      caption: item.name,
      url: `/store/${textToSlug(name)}/collections/${textToSlug(item.name)}`,
    }
  })

  return (
    <div id="store" className="main-container">
      <Head title={`${name}`} />
      <div className="page-container">
        <section id="" className="mini-section ">
          <div className="row space-between section-head">
            <h2>New</h2>
          </div>
          <ProductGrid
            grid={4}
            product={collections[2].products}
            addToFavourite={addStoreFavourite}
          />
        </section>
        <section id="collection-slider" className="mini-section ">
          <div className="row space-between section-head">
            <h2>Collections</h2>
          </div>

          <Slider images={collectionSlider} id="slider3" margin={25} url="ff" />
        </section>
        <section id="" className="mini-section ">
          <div className="row space-between section-head">
            <h2>Best Sellers</h2>
          </div>

          <ProductGrid
            grid={4}
            product={bestSellers}
            addToFavourite={addStoreFavourite}
          />
        </section>
      </div>
      <footer>fj</footer>
    </div>
  )
}
export default StoreWrapper
