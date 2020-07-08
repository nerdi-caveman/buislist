import React from "react"
import MyStoreOrdersWrapper from "./my-store-orders-wrapper"
import { withRouter, RouteComponentProps } from "react-router-dom"
import MyStoreHeader from "../../../components/my-store-header"

interface IMyStoreOrders extends RouteComponentProps {}

const MyStoreOrders: React.FC<IMyStoreOrders> = ({ location }) => {
  return (
    <>
      <MyStoreHeader />
      <MyStoreOrdersWrapper location={location} />
    </>
  )
}
export default withRouter(MyStoreOrders)
