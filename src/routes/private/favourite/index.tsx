import React, { useState } from "react"
import FavouriteWrapper from "./favourite-wrapper"
import { productsData, storesData } from "../../../utils/data"

interface IFavourite {}

const Favourite: React.FC<IFavourite> = () => {
  const [favouriteProduct, setFavouriteProduct] = useState(productsData)
  const [favouriteStore, setFavouriteStore] = useState(storesData)

  const removeFromFavourite: Function = (
    store: any[],
    setStore: any,
    item: any,
    idx: number
  ) => {
    const obj = [...store]
    obj.splice(idx, 1)
    setStore(obj)
  }
  return (
    <>
      <FavouriteWrapper
        removeFromFavourite={removeFromFavourite}
        setFavouriteStore={setFavouriteStore}
        favouriteStore={favouriteStore}
        favouriteProduct={favouriteProduct}
        setFavouriteProduct={setFavouriteProduct}
      />
    </>
  )
}
export default Favourite
