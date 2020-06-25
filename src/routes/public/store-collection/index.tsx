import React, { useState } from "react"
import StoreCollectionWrapper from "./store-collection-wrapper"
import { withRouter } from "react-router-dom"
import { slugToText } from "../../../utils/string"
import { productsData } from "../../../utils/data"
import { checkAuth } from "../../../utils"
import UserHeader from "../../../components/userheader"
import Header from "../../../components/header"
import StoreHeader from "../../../components/store-header"
import Icon from "@mdi/react"
import { mdiApple } from "@mdi/js"

interface IStoreCollection {
  match: any
}

const StoreCollection: React.FC<IStoreCollection> = ({ match }) => {
  const {
    params: { name, collectionName },
  } = match

  const addStoreFavourite = (item: any, value: boolean) => {
    item.favourite = !value
  }

  const [storeData, setStoreData] = useState({
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
  })
  const [products, setProducts] = useState(productsData)

  return (
    <>
      {checkAuth(1) ? <UserHeader position="relative" /> : <Header />}
      <StoreHeader
        name={slugToText(name)}
        logo={
          <>
            <Icon path={mdiApple} size={1} color="#000000" />
          </>
        }
        navigation={storeData.collections}
      />
      <StoreCollectionWrapper
        storeName={slugToText(name)}
        collectionName={slugToText(collectionName)}
        products={products}
        addStoreFavourite={addStoreFavourite}
      />
    </>
  )
}
export default withRouter(StoreCollection)
