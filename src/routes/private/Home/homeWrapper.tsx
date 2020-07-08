import React, { useState } from "react"
import Searchbar from "../../../components/searchbar"
import Icon from "@mdi/react"
import {
  mdiCar,
  mdiHanger,
  mdiTelevision,
  mdiSofa,
  mdiOfficeBuilding,
  mdiCellphoneIphone,
  mdiHomeOutline,
  mdiGamepadVariantOutline,
  mdiFoodAppleOutline,
  mdiHairDryerOutline,
  mdiChevronRight,
  mdiBookOpenOutline,
} from "@mdi/js"
import { Link } from "react-router-dom"
import Storebanner from "../../../assets/barts-store-signage-1884573.jpg"
import tech from "../../../assets/silver-macbook-beside-black-sony-ps4-dualshock-4-silver-682933.jpg"
import carouselimg1 from "../../../assets/cooked-meat-on-plate-2313686.jpg"
import media from "../../../assets/headphones_camera_retro_122094_3840x2400.jpg"
import Productbanner from "../../../assets/brown-top-hanging-on-rack-1488464.jpg"
import Accessoriesbanner from "../../../assets/headphones_bw_headset_120277_3840x2400.jpg"
import photography from "../../../assets/woman-making-clay-pot-2166456.jpg"
import ab from "../../../assets/four-assorted-perfume-glass-bottles-965989.jpg"
import ProductGrid from "../../../components/product-grid"
import "../../../styles/pages/home.scss"
import Head from "../../../components/head"
import StoresGrid from "../../../components/stores-grid"
import { textToSlug } from "../../../utils/string"
import { productsData } from "../../../utils/data"

// let storesImages: any = [
//   {
//     id: 1,
//     carouselImages: [{ src: media }, { src: tech }],
//     premium: true,
//     location: "Ibadan, Nigeria",
//   },
//   {
//     id: 2,
//     carouselImages: [
//       { src: Storebanner },
//       { src: media },
//       { src: carouselimg1 },
//       { src: photography },
//     ],
//     premium: false,
//     location: "Lagos, Nigeria",
//   },
//   {
//     id: 3,
//     carouselImages: [
//       { src: carouselimg1 },
//       { src: Storebanner },
//       { src: Productbanner },
//       { src: tech },
//       { src: Accessoriesbanner },
//     ],
//     premium: false,
//     location: "Anambra, Nigeria",
//   },
//   {
//     id: 4,
//     carouselImages: [
//       { src: Productbanner },
//       { src: carouselimg1 },
//       { src: tech },
//       { src: ab },
//       { src: photography },
//     ],
//     premium: true,
//     location: "Abuja, Nigeria",
//   },
//   {
//     id: 5,
//     carouselImages: [
//       { src: tech },
//       { src: Productbanner },
//       { src: media },
//       { src: carouselimg1 },
//       { src: Accessoriesbanner },
//     ],
//     premium: true,
//     location: "Ibadan, Nigeria",
//   },
//   {
//     id: 6,
//     carouselImages: [
//       { src: Storebanner },
//       { src: media },
//       { src: carouselimg1 },
//       { src: photography },
//       { src: tech },
//     ],
//     premium: false,
//     location: "Port Harcout, Nigeria",
//   },
// ];

let featuredStores: any = [
  {
    id: 1,
    carouselImages: [{ src: media }, { src: tech }],
    premium: true,
    location: "Ibadan, Nigeria",
  },
  {
    id: 2,
    carouselImages: [
      { src: carouselimg1 },
      { src: Storebanner },
      { src: Productbanner },
      { src: tech },
      { src: Accessoriesbanner },
    ],
    premium: false,
    location: "Anambra, Nigeria",
  },
  {
    id: 3,
    carouselImages: [
      { src: tech },
      { src: Productbanner },
      { src: media },
      { src: carouselimg1 },
      { src: Accessoriesbanner },
    ],
    premium: true,
    location: "Ibadan, Nigeria",
  },
  {
    id: 4,
    carouselImages: [
      { src: Storebanner },
      { src: media },
      { src: carouselimg1 },
      { src: photography },
      { src: tech },
    ],
    premium: false,
    location: "Port Harcout, Nigeria",
  },
]

const Categories: React.FC<any> = () => {
  const categories = [
    {
      path: mdiCar,
      label: "Cars",
    },
    {
      path: mdiCellphoneIphone,
      label: "Phones & Tablets",
    },
    {
      path: mdiTelevision,
      label: "Electronics",
    },
    {
      path: mdiHanger,
      label: "Fashion",
    },
    {
      path: mdiHairDryerOutline,
      label: "Health & Beauty",
    },
    {
      path: mdiBookOpenOutline,
      label: "Stationaries",
    },
    {
      path: mdiSofa,
      label: "Furnitures",
    },
    {
      path: mdiFoodAppleOutline,
      label: "Supermarket",
    },
    {
      path: mdiOfficeBuilding,
      label: "Real Estate",
    },
    {
      path: mdiHomeOutline,
      label: "Home & Office",
    },
    {
      path: mdiGamepadVariantOutline,
      label: "Gaming",
    },
  ]
  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul>
        {categories.map((item: any, index: number) => (
          <li key={index}>
            <Link
              to={`/category/${textToSlug(
                item.label.toLowerCase()
              )}?location=nigeria`}
            >
              <Icon path={item.path} color="#222" size={0.8} />
              <p>{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const HomeWrapper: React.FC<any> = () => {
  const [recommendedProducts, setRecommendedProducts] = useState(productsData)
  const [recentProducts, setRecentProducts] = useState(productsData)

  const addStoreFavourite = (
    store: any[],
    setStore: any,
    item: any,
    idx: number
  ) => {
    const newProfiles = [...store]
    newProfiles[idx]["favourite"] = !item.favourite
    setStore([...newProfiles])
  }

  return (
    <div id="priv-home">
      <Head title="Find talented people, great products, and local stores nearby" />
      <div className="page-container">
        <Searchbar />
        <Categories />
        <section id="products" className="mini-section ">
          <div className="row space-between section-head">
            <h2>Products you might like</h2>
          </div>
          <ProductGrid
            product={recommendedProducts}
            addToFavourite={(item: any, idx: number) => {
              addStoreFavourite(
                recommendedProducts,
                setRecommendedProducts,
                item,
                idx
              )
            }}
          />
        </section>
      </div>
      <section id="explore-store" className="mini-section">
        <div className="page-container">
          <div className="row space-between section-head">
            <h2>Explore stores</h2>
          </div>
          <StoresGrid
            id="2"
            stores={featuredStores}
            addToFavourite={addStoreFavourite}
            showDetails={false}
          />
        </div>
      </section>
      <div className="page-container">
        <section id="trending-products" className="mini-section ">
          <div className="row space-between section-head">
            <h2>Recently added products</h2>
          </div>
          <ProductGrid
            id="2"
            product={recentProducts}
            addToFavourite={(item: any, idx: number) => {
              addStoreFavourite(
                recentProducts,
                setRecentProducts,
                item,
                idx
              )
            }}
          />
          <div className="see-all">
            <Link to="">
              See all products
              <Icon path={mdiChevronRight} color="#ff5a60" size={1.2} />
            </Link>
          </div>
        </section>
        <section id="recent-vwd-products" className="mini-section ">
          <div className="row space-between section-head">
            <h2>Recently viewed products</h2>
          </div>
          <ProductGrid
            id="3"
            product={recentProducts}
            addToFavourite={(item: any, idx: number) => {
              addStoreFavourite(
                recentProducts,
                setRecentProducts,
                item,
                idx
              )
            }}
          />
        </section>
      </div>
    </div>
  )
}
export default HomeWrapper
