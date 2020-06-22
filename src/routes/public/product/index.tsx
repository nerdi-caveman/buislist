import React from "react"
import ProductWrapper from "./product-wrapper"
import { withRouter } from "react-router-dom"
import Header from "../../../components/header"
import UserHeader from "../../../components/userheader"
import { checkAuth } from "../../../utils"
import { productsData } from "../../../utils/data"

const Product: React.FC<any> = ({ ...props }) => {

  return (
    <>
      {checkAuth(1) ? <UserHeader /> : <Header />}
      <ProductWrapper product = {productsData[3]} />
    </>
  )
}
export default withRouter(Product)
