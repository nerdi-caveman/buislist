import React, { useState } from "react"
import FavouriteWrapper from "./favourite-wrapper"
import { productsData } from "../../../utils/data"

interface IFavourite {}

const Favourite: React.FC<IFavourite> = () => {
  const [favouriteProduct, setFavouriteProduct] = useState(productsData)
  return (
    <>
      <FavouriteWrapper favouriteProduct = {favouriteProduct} setFavouriteProduct = {setFavouriteProduct}/>
    </>
  )
}
export default Favourite
