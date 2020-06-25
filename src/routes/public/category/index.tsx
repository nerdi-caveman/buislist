import React, { useState, useRef, useEffect, Fragment } from "react"
import Head from "../../../components/head"
import { withRouter } from "react-router-dom"
import { slugToText, toCapital } from "../../../utils/string"
import "../../../styles/pages/category.scss"
import { getSearchParams, setSearchParams, checkAuth } from "../../../utils"
import { formatCurrency, currencyToNumber } from "../../../modules/price"
import Modal from "../../../components/modal"
import ProductGrid from "../../../components/product-grid"
import { productsData } from "../../../utils/data"
import UserHeader from "../../../components/userheader"
import Header from "../../../components/header"
import ReactRadioBtn from "../../../components/react-radiobtn"

interface IFilter {
  options: any[]
  location: any
  getData: Function
}

/**
 * Determine what options to show depending on data recieved and
 * return the respective options to parent component on button
 */

const Filter: React.FC<IFilter> = ({ location, options, getData }) => {
  const searchParams: any = getSearchParams(location.search)
  const obj = options.map((item: any, idx: number) => ({
    name: item.label,
    value: searchParams[item.label.toLowerCase()] || "", //set defaultValue from searchParams
  }))
  const [selectedOptions, setSelectedOptions] = useState(obj)

  const addToSelectedOptions: Function = (value: string, idx: number): void => {
    const optionsCopy = selectedOptions
    optionsCopy[idx].value = value
    setSelectedOptions([...optionsCopy])
  }

  const submit = (): void => {
    getData(selectedOptions)
  }
  return (
    <>
      <div className="container section-container" id="filter-container">
        {options.map((option: any, idx: number) => {
          let defaultChecked: any

          // find the default value from the search params and assign its index as defaultChecked
          if (searchParams[option.label.toLowerCase()]) {
            const defaultValue: string =
              searchParams[option.label.toLowerCase()]

            for (let i = 0; i < option.values.length; i++) {
              if (
                option.values[i].toLowerCase() === defaultValue.toLowerCase()
              ) {
                defaultChecked = i
                break
              }
            }
          }

          return (
            <div key={idx} className="container section">
              <h3 className="section-header">{option.label}</h3>
              <div className="form-control">
                <ReactRadioBtn
                  onSelect={(value: string) => {
                    addToSelectedOptions(value, idx)
                    submit()
                  }}
                  id={`${option.label}${idx}`}
                  type="c"
                  defaultChecked={defaultChecked}
                  items={option.values.map((item: any) => ({
                    label: item,
                    value: item,
                  }))}
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

const Price: React.FC<any> = ({
  search,
  min = "",
  max = "",
  currency = "NGN",
}) => {
  const [from, setFrom] = useState(formatCurrency(min, currency))
  const [to, setTo] = useState(formatCurrency(max, currency))
  const [err, setErr] = useState("")
  const refs: any = useRef()

  console.log(currencyToNumber(from))
  // remove all focus events and styles
  useEffect(() => {
    let current: boolean = true
    let onFocusInput: any
    if (current) {
      if (refs.current) {
        onFocusInput = document.addEventListener("click", (e: any) => {
          let inputs: any = refs.current?.querySelectorAll(
            ".form-control input"
          )
          let isInputOne: boolean = inputs
            ? !!inputs[0]?.contains(e.target)
            : true
          let isInputTwo: boolean = inputs
            ? !!inputs[1]?.contains(e.target)
            : true

          if (!isInputOne || !isInputTwo) {
            inputs[0].classList.remove("err")
            inputs[1].classList.remove("err")
            setErr("")
          }
        })
      }
    }
    return () => {
      document.removeEventListener("click", onFocusInput)
      current = false
    }
  }, [])

  return (
    <div className="pop-up" id="price">
      <div className="container" ref={refs}>
        <form className="">
          <div className="row">
            <div className="form-control">
              <label>From</label>
              <input
                type="text"
                name="from"
                placeholder="00.00"
                value={from}
                onChange={(e: any) => {
                  const price = currencyToNumber(e.target.value)
                  if (!isNaN(price)) {
                    if (price <= currencyToNumber(to)) {
                      setFrom(formatCurrency(price, currency))
                      e.target.classList.remove("err")
                      setErr("")
                    } else {
                      e.target.classList.add("err")
                      setErr("Price cannot be greater than to price ")
                    }
                  } else {
                    e.target.classList.add("err")
                    setErr("Price must be a number")
                  }
                }}
              />
            </div>
            <div className="form-control dash"></div>

            <div className="form-control">
              <label>To</label>
              <input
                type="text"
                name="to"
                placeholder="00.00"
                value={to}
                onChange={(e: any) => {
                  const price = currencyToNumber(e.target.value)
                  if (!isNaN(price)) {
                    setTo(formatCurrency(price, currency))
                    e.target.classList.remove("err")
                    setErr("")
                  } else {
                    e.target.classList.add("err")
                    setErr("Price must be a number")
                  }
                }}
              />
            </div>
          </div>
          {err.length ? <p className="error">{err}</p> : ""}
          <div className="footer">
            <button
              className="btn btn-sm btn-dark"
              onClick={(e: any) => {
                e.preventDefault()
                e.stopPropagation()
                setSearchParams(
                  { from: currencyToNumber(from), to: currencyToNumber(to) },
                  search
                )
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const Category: React.FC<any> = ({ match, location }) => {
  const [showPrice, setShowPrice] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const [categorySearchParams, setCategorySearchParams] = useState([])
  const refs: any = useRef()
  const page: string = toCapital(slugToText(match.params.name))
  const searchParams: any = getSearchParams(location.search)

  const filters: any = [
    {
      label: "Brand",
      type: "list",
      values: ["Toyota", "Honda", "Hyundai", "Jeep"],
    },
    {
      label: "Transmission",
      type: "list",
      values: ["Automatic", "Manual"],
    },
    {
      label: "Condition",
      type: "list",
      values: ["Brand New", "Nigerian Used", "Foreign Used"],
    },
  ]

  const filterInSearchParams: Function = (
    filter: any[],
    params: any
  ): boolean => {
    for (let i = 0; i < filter.length; i++) {
      if (
        params[filter[i].label.toLowerCase()] ||
        params[toCapital(filter[i].label)]
      ) {
        return true
      }
    }
    return false
  }

  // remove price focus events and styles
  useEffect(() => {
    let current: boolean = true
    let onFocusInput: any
    let esc: any
    if (current) {
      if (refs.current) {
        onFocusInput = (e: any) => {
          let price: any = refs.current?.querySelector(".price")
          let isPrice: boolean = !!price?.contains(e.target)
          let form: any = refs.current?.querySelector("form")
          let isForm: boolean = !!form?.contains(e.target)

          if (!isPrice && !isForm) {
            setShowPrice(false)
          }
        }

        esc = (e: any) => {
          const keyVal = e.which || e.keyCode || e.charCode || 0
          if (keyVal && keyVal === 27) {
            setShowPrice(false)
          }
        }
        document.addEventListener("keydown", esc)
        document.addEventListener("click", onFocusInput)
      }
    }
    return () => {
      document.removeEventListener("click", onFocusInput)
      current = false
    }
  }, [])

  const addStoreFavourite = (item: any, value: boolean) => {
    item.favourite = !value
  }

  const submitfilter = async () => {
    const params: any = {}
    categorySearchParams.forEach((element: any) => {
      params[element.name.toLowerCase()] = element.value.toLowerCase()
    })

    setSearchParams(params, location.search)
  }

  return (
    <Fragment>
      {checkAuth(1) ? <UserHeader /> : <Header />}
      <div id="category" className="main-container">
        <Head title="Find talented people, great products, and local stores nearby" />

        <main className="page-container">
          <div ref={refs}>
            <h1>
              {page}
              {searchParams.location
                ? ` in ${toCapital(searchParams.location)}`
                : ""}
            </h1>
            <div className="row options">
              <button
                onClick={() => {
                  setSearchParams({ type: "recently-viewed" }, location.search)
                }}
                className="tags active"
              >
                Recently added
              </button>
              <button
                onClick={() => {
                  setShowPrice(true)
                }}
                className="tags price"
              >
                Price
              </button>
              <button
                id="filter"
                onClick={(e: any) => {
                  e.target.classList.add("active")
                  const html: any = document.querySelector("html")
                  html.style.overflowY = "hidden"

                  setShowFilter(true)
                }}
                className={
                  filterInSearchParams(filters, searchParams)
                    ? "active tags filter"
                    : "tags filter"
                }
              >
                Filters
              </button>
              {showPrice && (
                <Price
                  search={location.search}
                  min={searchParams.from}
                  max={searchParams.to}
                />
              )}
              {showFilter && (
                <Modal
                  title="Filters"
                  closeModal={() => {
                    setShowFilter(false)
                  }}
                  onSubmit={submitfilter}
                >
                  <Filter
                    location={location}
                    options={filters}
                    getData={(value: any) => {
                      setCategorySearchParams(value)
                    }}
                  />
                </Modal>
              )}
            </div>
          </div>
          <section className="">
            <ProductGrid
              product={productsData}
              addToFavourite={addStoreFavourite}
            />
          </section>
        </main>
      </div>
    </Fragment>
  )
}

export default withRouter(Category)
