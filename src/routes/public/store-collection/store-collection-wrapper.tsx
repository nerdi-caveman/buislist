import React from "react"
import Head from "../../../components/head"
import ProductGrid from "../../../components/product-grid"

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
        <section className="">
          <ProductGrid product={products} addToFavourite={addStoreFavourite} />
        </section>
      </main>
    </div>
  )
}
export default StoreCollectionWrapper
