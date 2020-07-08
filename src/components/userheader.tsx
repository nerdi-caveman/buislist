import React from "react"
import { Link, NavLink } from "react-router-dom"
import "../styles/components/header.scss"

interface IUserHeader {
  position?: "fixed" | "relative"
}

const UserHeader: React.FC<IUserHeader> = ({ position = "fixed" }) => {
  return (
    <header id="usr-header" style={{ position }}>
      <nav>
        <Link to="" id="logo"></Link>
        <ul id="main-nav">
          <li>
            <Link to="/my-store" target = "_blank" rel ="noopenner noreferrer">My Store</Link>
          </li>
          <li>Inbox</li>
          <li>
            <NavLink to="/favourites">Favourites</NavLink>
          </li>
          <li>
            <div id="usr-icon">
              <div id="usr-img"></div>
            </div>
            <ul id="usr-account"></ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default UserHeader
