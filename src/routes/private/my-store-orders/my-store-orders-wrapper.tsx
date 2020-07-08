import React from "react"
import Head from "../../../components/head"
import Tab from "../../../components/tab"
import { getSearchParams } from "../../../utils"

interface IMyStoreOrdersWrapper {
  location: any
}

interface IOrderView {
  tab: string
}

const OrderView: React.FC<IOrderView> = ({ tab }) => {
  switch (tab) {
    case "all":
      return <>all</>
    case "pending":
      return <>pending</>
    case "cancelled":
      return <>cancelled</>
    case "shipped":
      return <>shipped</>
    default:
      return <>all</>
  }
}

const MyStoreOrdersWrapper: React.FC<IMyStoreOrdersWrapper> = ({
  location,
}) => {
  const tab: string = getSearchParams(location.search).tab || ""

  return (
    <div id="my-store" className="main-container">
      <Head title="My Orders" />
      <main className="page-container">
        <h1>Orders</h1>

        <Tab
          search={location.search}
          links={["All Orders", "Pending", "Shipped", "Cancelled"]}
          getSelected={() => {}}
          defaultTab="all orders"
        />

        <section className="section-container">
          <div className="mini-section">
            <OrderView tab={tab.toLowerCase()} />
          </div>
        </section>
      </main>
    </div>
  )
}
export default MyStoreOrdersWrapper
