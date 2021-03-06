import React, { FormEventHandler } from "react"
import Head from "../../../components/head"
import "../../../styles/pages/store.scss"
import ProductGrid from "../../../components/product-grid"
import Slider from "../../../components/slider"
import { textToSlug, toTitleCase } from "../../../utils/string"
import {
  mdiHeartOutline,
  mdiHeart,
  mdiTwitter,
  mdiFacebook,
  mdiInstagram,
  mdiWhatsapp,
  mdiEmailBox,
} from "@mdi/js"
import Icon from "@mdi/react"

interface ISocialMedia {
  twitter: string
  email: string
  whatsapp: string
  facebook: string
  instagram: string
}

const SocialMedia: React.FC<ISocialMedia> = ({
  twitter,
  email,
  whatsapp,
  facebook,
  instagram,
}) => {
  const media = [
    { link: twitter, path: mdiTwitter },
    { link: email, path: mdiEmailBox, type: "email" },
    { link: whatsapp, path: mdiWhatsapp },
    { link: facebook, path: mdiFacebook },
    { link: instagram, path: mdiInstagram },
  ]
  return (
    <ul>
      {media.map(
        (item: any, idx: number) =>
          !!item.link && (
            <li key={idx}>
              <a
                href={`${item.type && "mailto:"}${item.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon path={item.path} size={1} color="#fff" />
              </a>
            </li>
          )
      )}
    </ul>
  )
}

type collection = {
  name: string
  products: any
}

type store = ISocialMedia & {
  name: string
  favourite: boolean
  premium: boolean
  category: string
  description: string
  phone: string | number
  location: string
  collections: collection[]
  bestSellers: any[]
}

interface IStoreWrapper {
  storeData: store
  setStoreData?:any
  setToFavourite: Function
  setFeatured:any
  featured:any
  setBestSellers:any
  bestSellers:any
}

const StoreWrapper: React.FC<IStoreWrapper> = ({
  storeData,
  setFeatured,
  featured,
  setBestSellers,
  bestSellers,
  setToFavourite,
}) => {
  const {
    name,
    phone,
    premium,
    category,
    favourite,
    description,
    collections,
    instagram,
    whatsapp,
    facebook,
    email,
    twitter,
    location,
  } = storeData

  const addStoreFavourite:Function = (
    store: any[],
    setStore: any,
    item: any,
    idx: number
  ) => {
    const newProfiles = [...store]
    newProfiles[idx]["favourite"] = !item.favourite
    setStore([...newProfiles])
  }

  const collectionSlider = collections.map((item: any, idx: number) => {
    return {
      src: item.products[0].carouselImages[0].src,
      caption: item.name,
      url: `/store/${textToSlug(name)}/collection/${textToSlug(item.name)}`,
    }
  })
  const addToFavourite: FormEventHandler<HTMLButtonElement> = (): void => {
    setToFavourite(!favourite)
  }

  return (
    <div id="store" className="main-container">
      <Head title={`${name}`} />
      <section id="store-desc">
        <article className="page-container">
          <button
            id="add-store"
            className="btn btn-sm btn-default with-left-icon"
            onClick={addToFavourite}
          >
            {favourite ? (
              <Icon
                className="selected"
                path={mdiHeart}
                size={0.8}
                color="#222222"
              />
            ) : (
              <Icon path={mdiHeartOutline} size={0.8} color="#222222" />
            )}
            Add to favourite
          </button>
          {premium && <div className="badge badge-sm badge-back">Premium</div>}
          <h1>{toTitleCase(name)}</h1>
          <p className="label">{location}, Nigeria</p>
          <p className="badge badge-md badge-back badge-fade">{category}</p>
          <p className="desc">{description}</p>

          <div className="social-media">
            <SocialMedia
              twitter={twitter}
              whatsapp={whatsapp}
              facebook={facebook}
              instagram={instagram}
              email={email}
            />
          </div>
        </article>
      </section>
      <div className="page-container">
        <section id="new-section" className="mini-section ">
          <div className="row space-between section-head">
            <h2>New and Featured</h2>
          </div>
          <ProductGrid
            grid={4}
            product={featured}
            addToFavourite={(item: any, idx: number) => {
              addStoreFavourite(
                featured,
                setFeatured,
                item,
                idx
              )
            }}
          />
        </section>
        <section id="collection-section" className="mini-section ">
          <div className="row space-between section-head">
            <h2>Collections</h2>
          </div>

          <Slider images={collectionSlider} id="slider3" margin={25} />
        </section>
        <section id="best-sellers-section" className="mini-section ">
          <div className="row space-between section-head">
            <h2>Best Sellers</h2>
          </div>
          <ProductGrid
            id="sellers"
            grid={4}
            product={bestSellers}
            addToFavourite={(item: any, idx: number) => {
              addStoreFavourite(
                bestSellers,
                setBestSellers,
                item,
                idx
              )
            }}
          />
        </section>
      </div>
      <div id="contact-seller">
        <div className="container box-shadow">
          <ul>
            <li>
              <button className="btn btn-sm btn-dark">Message</button>
            </li>
            <li>
              <a href={`tel:${phone}`} className="btn btn-sm btn-secondary">
                Phone
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer style={{ background: "#000" }}>
        <div className="page-container">
          <div className="img img-rounded">
            <img src="" alt="" />
          </div>
        </div>
      </footer>
    </div>
  )
}
export default StoreWrapper
