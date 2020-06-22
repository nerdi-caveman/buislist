import React, { useState } from "react"
import StoreWrapper from "./store-wrapper"
import { withRouter } from "react-router-dom"
import { slugToText } from "../../../utils/string"
import Header from "../../../components/header"
import { checkAuth } from "../../../utils"
import UserHeader from "../../../components/userheader"
import StoreHeader from "../../../components/store-header"
import { productsData } from "../../../utils/data"
import Icon from "@mdi/react"
import { mdiApple } from "@mdi/js"

interface IStore {
  match: any
}

const Store: React.FC<IStore> = ({ match }) => {
  const data = {
    name: slugToText(match.params.name),
    collections: [
      { name: "New and Featured", products: productsData.slice(3, 6) },
      { name: "Mens", products: productsData.slice(4, 7) },
      { name: "Womens", products: productsData.slice(8, 10) },
      { name: "Kids", products: productsData.slice(0, 3) },
      { name: "Shoes", products: productsData.slice(0, 3) },
    ],
    bestSellers: productsData.slice(0, 3),
  }
  const [storeData] = useState(data)
  return (
    <>
      {checkAuth(1) ? <UserHeader position="relative" /> : <Header />}
      <StoreHeader
        name={storeData.name}
        logo={
          <>
            <Icon path={mdiApple} size={1} color="#000000" /> {storeData.name}
          </>
        }
        navigation={storeData.collections}
      />
      <StoreWrapper storeData={storeData} />
    </>
  )
}
export default withRouter(Store)
