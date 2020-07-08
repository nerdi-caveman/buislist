import React, { MouseEventHandler } from "react"
import Head from "../../../components/head"

interface IMyStoreProductsWrapper {
  location: any
  isAddProductModalOpen: boolean
  openAddProductModal: MouseEventHandler<Element>
  closeAddProductModal: MouseEventHandler<Element>
}

const MyStoreProductsWrapper: React.FC<IMyStoreProductsWrapper> = ({
  location,
  openAddProductModal,
  closeAddProductModal,
  isAddProductModalOpen,
}) => {
  return (
    <div id="my-store-product" className="main-container">
      <Head title="My Products" />
      <main className="page-container">
        <div className="row space-between">
          <h1>My Products</h1>
          <button
            id="add-product"
            onClick={openAddProductModal}
            className="btn btn-lg btn-dark-outline"
          >
            Add a product
          </button>
        </div>
        <section className="section-container" id="product">
          <div className="mini-section">
            <div className="section-container" id ="conta"></div>
            {isAddProductModalOpen && (
              <>
                <div id="#add-product-modal">f</div>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
export default MyStoreProductsWrapper
