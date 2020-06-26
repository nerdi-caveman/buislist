import React from "react"
import Head from "../../../components/head"
import ProductGrid from "../../../components/product-grid"
import { toCapital } from "../../../utils/string"

interface IStoreCollectionWrapper {
  collectionName: string
  storeName: string
  addStoreFavourite: Function
  products: any[]
}

const StoreCollectionWrapper: React.FC<IStoreCollectionWrapper> = ({
  collectionName,
  storeName,
  products,
  addStoreFavourite,
}) => {
  return (
    <div id="store-collection-page" className="main-container">
      <Head title={`${collectionName} by ${storeName}`} />

      <main className="page-container">
        <section id="collection-section" className="mini-section">
          <div className="row space-between section-head">
            <h2>{toCapital(collectionName)} collection</h2>
          </div>
          <ProductGrid product={products} addToFavourite={addStoreFavourite} />
        </section>
      </main>

      <section className="mini-section ">
        <div className="page-container">
          <div className="section-container">
            <div className="section mini-section">
              <h2 className="section-head">More from {storeName}</h2>
              <ProductGrid
              id="more-products"
                product={[...products.slice(0, 6)]}
                addToFavourite={addStoreFavourite}
              />
            </div>
            <div className="section mini-section">
              <h2 className="section-head">Other Products you might like</h2>
              <ProductGrid
                id="other-products"
                product={[...products.slice(0, 6)]}
                addToFavourite={addStoreFavourite}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default StoreCollectionWrapper
