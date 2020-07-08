import React from "react"
import {
  Link,
  NavLink,
  withRouter,
  RouteComponentProps,
} from "react-router-dom"
import "../styles/components/header.scss"
import { textToSlug } from "../utils/string"

interface IStoreHeader extends RouteComponentProps {
  logo?: React.ReactElement
  name: string
  navigation: any[]
  match: any
}

const StoreHeader: React.FC<IStoreHeader> = ({
  name,
  logo,
  navigation,
  match,
}) => {
  const {
    params: { collectionName },
  } = match

  return (
    <header id="store-header">
      <nav>
        <Link to={`/store/${textToSlug(name)}`} id="store-logo">
          {logo || name}
        </Link>
        <ul id="main-nav">
          {navigation.map((link: any, index: number) => (
            <li key={index}>
              <NavLink
                isActive={() =>
                  textToSlug(link.name.toLowerCase()) === collectionName
                }
                activeClassName="active"
                to={`/store/${textToSlug(
                  name.toLowerCase()
                )}/collection/${textToSlug(link.name.toLowerCase())}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
export default withRouter(StoreHeader)
