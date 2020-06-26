import React from "react"
import { toCapital } from "../../utils/string"
import { Link, NavLink } from "react-router-dom"
import "./style.scss"
import { getSearchParams } from "../../utils"
import product from "../../routes/public/product"

interface ITab {
  getSelected?: Function
  search: string
  links: string[]
}

const Tab: React.FC<ITab> = ({ search, getSelected, links }) => {
  const tabSearchParams: string = getSearchParams(search).tab
  return (
    <nav className="tab-container">
      <ul>
        {links.map((item: string, idx: number) => (
          <li key={idx}>
            <NavLink
              activeClassName="active"
              isActive={() =>
                tabSearchParams === item.toLowerCase() ||
                (!!!tabSearchParams && item.toLowerCase() === "products")
              }
              to={`?tab=${item.toLowerCase()}`}
            >
              {toCapital(item)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Tab
