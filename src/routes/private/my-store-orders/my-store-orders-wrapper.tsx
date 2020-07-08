import React from "react"
import Head from "../../../components/head"
import Tab from "../../../components/tab"
import { getSearchParams } from "../../../utils"
import Order from "../../../components/orders"
import "../../../styles/pages/order.scss"

interface IMyStoreOrdersWrapper {
  location: any
  shippedOrders: any[]
  cancelledOrders: any[]
  deliveredOrders: any[]
  pendingOrders: any[]
  allOrders: any[]
}

interface IOrderView {
  tab: string
  shippedOrders: any[]
  cancelledOrders: any[]
  pendingOrders: any[]
  deliveredOrders: any[]
  allOrders: any[]
}

const OrderView: React.FC<IOrderView> = ({
  shippedOrders,
  cancelledOrders,
  deliveredOrders,
  pendingOrders,
  allOrders,
  tab,
}) => {
  switch (tab) {
    case "all":
      return (
        <>
          {allOrders.map((item: any, idx: number) => (
            <li key={idx}>
              <Order order={item} id={idx.toString()} />
            </li>
          ))}
        </>
      )
    case "pending":
      return (
        <>
          {pendingOrders.map((item: any, idx: number) => (
            <li key={idx} className="section">
              <Order order={item} id={idx.toString()} />
            </li>
          ))}
        </>
      )
    case "cancelled":
      return (
        <>
          {cancelledOrders.map((item: any, idx: number) => (
            <li key={idx} className="section">
              <Order order={item} id={idx.toString()} />
            </li>
          ))}
        </>
      )
    case "shipped":
      return (
        <>
          {shippedOrders.map((item: any, idx: number) => (
            <li key={idx} className="section">
              <Order order={item} id={idx.toString()} />
            </li>
          ))}
        </>
      )
    case "delivered":
      return (
        <>
          {deliveredOrders.map((item: any, idx: number) => (
            <li key={idx} className="section">
              <Order order={item} id={idx.toString()} />
            </li>
          ))}
        </>
      )
    default:
      return (
        <>
          {allOrders.map((item: any, idx: number) => (
            <li key={idx} className="section">
              <Order order={item} id={idx.toString()} />
            </li>
          ))}
        </>
      )
  }
}

const MyStoreOrdersWrapper: React.FC<IMyStoreOrdersWrapper> = ({
  shippedOrders,
  cancelledOrders,
  deliveredOrders,
  pendingOrders,
  allOrders,
  location,
}) => {
  const tab: string = getSearchParams(location.search).tab || ""

  return (
    <div id="my-orders-page" className="main-container">
      <Head title="My Orders" />
      <main className="page-container">
        <h1>My Orders</h1>

        <Tab
          search={location.search}
          links={["All Orders", "Pending", "Shipped", "Delivered", "Cancelled"]}
          defaultTab="all orders"
        />

        <section className="section-container" id="orders">
          <div className="mini-section">
            <ul className="section-container">
              <OrderView
                shippedOrders={shippedOrders}
                deliveredOrders={deliveredOrders}
                cancelledOrders={cancelledOrders}
                pendingOrders={pendingOrders}
                allOrders={allOrders}
                tab={tab.toLowerCase()}
              />
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
export default MyStoreOrdersWrapper
