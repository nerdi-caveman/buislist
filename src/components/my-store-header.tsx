import React from "react"
import { Link, NavLink } from "react-router-dom"
import "../styles/components/header.scss"

interface IMyStoreHeader {
  position?: "fixed" | "relative"
}

const MyStoreHeader: React.FC<IMyStoreHeader> = ({ position = "fixed" }) => {
  return (
    <header id="usr-header" style={{ position }}>
      <nav>
        <Link to="/my-store" id="logo"></Link>
        <ul id="main-nav">
          <li>
            <NavLink to="/my-store/orders" >Orders</NavLink>
          </li>
          <li>
            <NavLink to="/my-store/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/my-store/collections">Collections</NavLink>
          </li>
          <li>
            <NavLink to="/my-store/payments">Payment</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default MyStoreHeader
