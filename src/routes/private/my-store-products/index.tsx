import React, { useState, MouseEventHandler } from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import MyStoreHeader from "../../../components/my-store-header"
import MyStoreProductsWrapper from "./my-store-product-wrapper"

interface IMyStoreProducts extends RouteComponentProps {}

const MyStoreProducts: React.FC<IMyStoreProducts> = ({ location }) => {
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false)

  const openAddProductModal: MouseEventHandler<Element> = (e: any) => {
    setIsAddProductModalOpen(true)
  }

  const closeAddProductModal: MouseEventHandler<Element> = (e: any) => {
    setIsAddProductModalOpen(false)
  }

  const myStoreProductsWrapperProps = {
    location,
    isAddProductModalOpen,
    openAddProductModal,
    closeAddProductModal,
  }
  return (
    <>
      <MyStoreHeader />
      <MyStoreProductsWrapper {...myStoreProductsWrapperProps} />
    </>
  )
}
export default withRouter(MyStoreProducts)
