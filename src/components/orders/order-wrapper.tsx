import React from "react"
import { OrderAttributes } from "../../data-types"
import { formatCurrency } from "../../modules/price"

interface IOrdersWrapper {
  order: OrderAttributes
  id: string
  approve?: Function
}

const OrdersWrapper: React.FC<IOrdersWrapper> = ({ order, id }) => {
  return (
    <div className="order-list">
      <div className="img-container">
        <img src={order.product.carouselImages![0].src} alt="" />
      </div>
      <div className="row space-between details">
        <p>
          {order.product.name}
          <span> ({order.quantity})</span>
        </p>
        <p className="h3">{formatCurrency(order.product.price, "NGN")}</p>
      </div>
      <div className="row sub-detail">
        <p>
          #{order.id} &#183;{" "}
          <span>{new Date(order.date).toLocaleString()}</span>
        </p>
      </div>
      <div className="row labels">
        {order.status === "1" && (
          <p className="badge badge-md badge-back badge-danger">pending</p>
        )}
        {order.status === "2" && (
          <p className="badge badge-md badge-back badge-warning">shipped</p>
        )}
        {order.status === "3" && (
          <p className="badge badge-md badge-back badge-success">delivered</p>
        )}
      </div>
      <div className=" usr-labels">
        Customer:
        <div className="">
          <p className="badge badge-md badge-back badge-warning">
            {order.customer_name}
          </p>
          <p className="badge badge-md badge-back badge-warning">
            {order.customer_email}
          </p>
          <p className="badge badge-md badge-back badge-warning">
            {order.customer_address}
          </p>
          <p className="badge badge-md badge-back badge-warning">
            {order.customer_phone}
          </p>
        </div>
      </div>
    </div>
  )
}
export default OrdersWrapper
