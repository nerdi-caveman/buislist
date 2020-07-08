import React from "react"
import { toCapital, textToSlug, slugToText } from "../../utils/string"
import { NavLink } from "react-router-dom"
import "./style.scss"
import { getSearchParams } from "../../utils"

interface ITab {
  getSelected?: Function
  search: string
  defaultTab: string
  links: string[]
}

const Tab: React.FC<ITab> = ({ search, getSelected, defaultTab, links }) => {
  const tabSearchParams: string = getSearchParams(search).tab
  return (
    <nav className="tab-container">
      <ul>
        {links.map((item: string, idx: number) => (
          <li key={idx}>
            <NavLink
              activeClassName="active"
              isActive={() =>
                slugToText(tabSearchParams || "") === item.toLowerCase() ||
                (!!!slugToText(tabSearchParams || "") &&
                  item.toLowerCase() === defaultTab)
              }
              to={`?tab=${textToSlug(item.toLowerCase())}`}
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
