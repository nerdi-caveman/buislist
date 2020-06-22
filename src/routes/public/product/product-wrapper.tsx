import React, { useState } from "react"
import Head from "../../../components/head"
import { productsData } from "../../../utils/data"
import Slider from "../../../components/slider"
import "../../../styles/pages/product.scss"
import { formatCurrency } from "../../../modules/price"
import ReactRadioBtn from "../../../components/react-radiobtn"
import { toCapital, textToSlug } from "../../../utils/string"
import ProductGrid from "../../../components/product-grid"
import { Link } from "react-router-dom"

interface IProductWrapper {
  product: any
}

const ProductWrapper: React.FC<IProductWrapper> = ({ product }) => {
  const addStoreFavourite = (item: any, value: boolean) => {
    item.favourite = !value
  }
  const [data] = useState(product)

  const [price] = useState(
    parseInt(data?.price) + parseInt(data?.delivery.price)
  )
  const location = data?.location
  const available: boolean =
    data?.delivery.available.includes(location.city) ||
    data?.delivery.available.includes("any")

  return (
    <div id="product" className="main-container">
      <Head title={`${data.name} in ${data.location}`} />
      <div className="page-container">
        <main>
          <Slider
            id={`slider22`}
            images={data.carouselImages}
            margin={6}
            isLink={false}
          />
          <div className="section-container ">
            <div className="people-desc section">
              <div className="product-det">
                {data.premium && (
                  <div className="badge badge-sm badge-sm-back">Promoted</div>
                )}
                <h2>{data.name} lore</h2>
                <p className="label label-md ">{data.store.category}</p>
                <p className="">
                  {available ? "Delivers" : "Does not deliver"} to{" "}
                  {toCapital(location.city)}
                </p>
              </div>
              <div className="store-logo">
                <Link to={`/store/${textToSlug(data.store.name)}`}>
                  <div className="rounded-img img-md">
                    <img src={data.store.img} alt="store logo" />
                  </div>
                  <p>{toCapital(data.store.name)}</p>
                </Link>
              </div>
            </div>
            <div className="section">
              <h3>Product details</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur sint dolores reprehenderit eveniet voluptatum
                maiores sequi, quibusdam tempore itaque inventore, dolore, quis
                quae id similique consequatur hic! Non, quas tempora.
              </p>
            </div>
            <div className="section" id="spec">
              <h3>Specifications</h3>
              <ul>
                {data.specifications.map((item: any, index: number) => (
                  <li key={index}>
                    <h4>{item.name}: </h4>
                    <p>{item.value}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="section"></div>
          </div>
        </main>
        <aside>
          <div className="container">
            <div className="" style={{ paddingBottom: "48px" }}>
              <div className="item-det box-shadow">
                <div className="section-container ">
                  <div className="section">
                    <h1>{data.name}</h1>
                    <p className="price">{formatCurrency(price, "NGN")}</p>
                  </div>
                  <div className="section">
                    <p className="label label-md ">Size</p>
                    <ReactRadioBtn
                      onSelect={(value: string) => {
                        console.log(value)
                      }}
                      id="size"
                      type="b"
                      items={["9inch", "12inch", "l"]}
                    />
                  </div>
                  <div className="section">
                    <p className="label label-md ">Color</p>
                    <ReactRadioBtn
                      onSelect={(value: string) => {
                        console.log(value)
                      }}
                      id="color"
                      items={["black", "Rose", "Gold", "Silver", "Green"]}
                    />
                  </div>
                  <div className="section">
                    <p className="label label-md ">Delivery options</p>
                    <ReactRadioBtn
                      onSelect={(value: string) => {
                        console.log(value)
                      }}
                      id="delivery-options"
                      type="c"
                      items={[
                        {
                          label: (
                            <>
                              Door step
                              <span className="warning-color">
                                {" "}
                                +{formatCurrency(
                                  data.delivery.price,
                                  "NGN"
                                )}{" "}
                              </span>
                            </>
                          ),
                          value: "black",
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="footer">
                  <button className="btn btn-lg btn-secondary">Buy now</button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="page-container">
        <div className="section-container">
          <div className="section">
            <h2 className="section-header">
              More from {toCapital(data.store.name)}
            </h2>
            <ProductGrid
              product={[
                productsData[0],
                productsData[1],
                productsData[2],
                productsData[4],
                productsData[5],
                productsData[3],
              ]}
              addToFavourite={addStoreFavourite}
            />
          </div>
          <div className="section">
            <h2 className="section-header">Recently Viewed</h2>
            <ProductGrid
              id="2"
              product={[
                productsData[0],
                productsData[1],
                productsData[2],
                productsData[4],
                productsData[5],
                productsData[3],
              ]}
              addToFavourite={addStoreFavourite}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductWrapper
