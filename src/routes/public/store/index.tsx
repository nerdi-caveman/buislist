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
    phone: "1938",
    location: "Ibadan",
    category: "Electronics",
    email: "inioluwa4is@gmail.com",
    whatsapp: "https://whatsapp.com/sjfeJxrDk2",
    facebook: "https://facebook.com/sjfeJxrDk2",
    instagram: "https://instagram.com/sjfeJxrDk2",
    twitter: "https://twitter.com/sjfeJxrDk2",
    premium: true,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam repudiandae inventore officia doloremque tempore minus repellat vitae nisi similique perferendis deserunt in non eaque. Autem quas nulla odit quidem!",
    favourite: true,
    collections: [
      { name: "New and Featured", products: productsData.slice(3, 6) },
      { name: "Mens", products: productsData.slice(4, 7) },
      { name: "Womens", products: productsData.slice(8, 10) },
      { name: "Kids", products: productsData.slice(0, 3) },
      { name: "Shoes", products: productsData.slice(0, 3) },
    ],
    bestSellers: productsData.slice(0, 3),
  }
  const [storeData, setStoreData] = useState(data)
  return (
    <>
      {checkAuth(1) ? <UserHeader position="relative" /> : <Header />}
      <StoreHeader
        name={storeData.name}
        logo={
          <>
            <Icon path={mdiApple} size={1} color="#000000" />
          </>
        }
        navigation={storeData.collections}
      />
      <StoreWrapper
        storeData={storeData}
        setToFavourite={(value: boolean) => {
          setStoreData({ ...storeData, favourite: value })
        }}
      />
    </>
  )
}
export default withRouter(Store)
