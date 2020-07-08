import React, { useState } from "react"
import MyStoreOrdersWrapper from "./my-store-orders-wrapper"
import { withRouter, RouteComponentProps } from "react-router-dom"
import MyStoreHeader from "../../../components/my-store-header"
import { orderData } from "../../../utils/data"

interface IMyStoreOrders extends RouteComponentProps {}

const MyStoreOrders: React.FC<IMyStoreOrders> = ({ location }) => {
  const [orders] = useState(
    orderData.filter((item: any, idx: number) => item.status !== "0")
  )
  const [pendingOrders] = useState(
    orders.filter((item: any, idx: number) => item.status === "1")
  )
  const [shippedOrders] = useState(
    orders.filter((item: any, idx: number) => item.status === "2")
  )
  const [deliveredOrders] = useState(
    orders.filter((item: any, idx: number) => item.status === "3")
  )
  const [cancelledOrders] = useState(
    orderData.filter((item: any, idx: number) => item.status === "0")
  )

  return (
    <>
      <MyStoreHeader />
      <MyStoreOrdersWrapper
        location={location}
        shippedOrders={shippedOrders}
        cancelledOrders={cancelledOrders}
        deliveredOrders={deliveredOrders}
        pendingOrders={pendingOrders}
        allOrders={orders}
      />
    </>
  )
}
export default withRouter(MyStoreOrders)
