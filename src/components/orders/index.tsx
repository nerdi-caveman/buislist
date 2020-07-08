import React, { HTMLAttributes } from "react"
import OrdersWrapper from "./order-wrapper"
import { OrderAttributes } from "../../data-types"
import "./style.scss"

interface IOrder extends HTMLAttributes<{}> {
  order: OrderAttributes
}

const Order: React.FC<IOrder> = ({ order, id = "" }) => {
  return <OrdersWrapper order={order} id={id} />
}
export default Order
