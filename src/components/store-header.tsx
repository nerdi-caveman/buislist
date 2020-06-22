import React from "react"
import { Link } from "react-router-dom"
import "../styles/components/header.scss"
import { textToSlug } from "../utils/string"

interface IStoreHeader {
  logo?: React.ReactElement
  name: string
  navigation: any[]
}

const StoreHeader: React.FC<IStoreHeader> = ({ name, logo, navigation }) => {
  return (
    <header id="store-header">
      <nav>
        <Link to={`/store/${textToSlug(name)}`} id="store-logo">
          {logo || name}
        </Link>
        <ul id="main-nav">
          {navigation.map((link: any, index: number) => (
            <li key={index}>
              <Link
                to={`/store/${textToSlug(name)}/collection/${textToSlug(
                  link.name
                )}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
export default StoreHeader
