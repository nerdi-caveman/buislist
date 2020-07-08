import React, { useState, useEffect, useRef } from "react"
import { isFunction } from "util"
import Icon from "@mdi/react"
import { mdiClose, mdiMapMarker } from "@mdi/js"

type TSearchDatalist = {
  name: string
  title: string
  placeholder: string
  onInputChange: Function
  dropdownType: string
  items: any
}

const Dropdown: React.FC<any> = ({ items, onSelect }) => {
  if (items.length < 1 || items[0] === "") return <ul></ul>
  return (
    <div className="dropdown">
      <ul>
        {items.map((item: any, id: number) => (
          <li key={id}>
            <button
              onClick={(e: any) => {
                onSelect(item)
              }}
            >
              {item}
            </button>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  )
}

const SearchDatalist: React.FC<any> = ({
  name,
  title,
  placeholder = "",
  onInputChange,
  items,
}: TSearchDatalist) => {
  const [inputValue, setInputValue] = useState("")
  const [showClearButton, setShowClearButton] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const refs: any = useRef()

  const clearInput = (): void => {
    setInputValue("")
    setShowClearButton(false)
  }

  if (isFunction(onInputChange)) {
  } else {
    throw TypeError(
      `onInputChange expected a function but ${typeof onInputChange} given`
    )
  }
  const onDropdownSelect = (item: string) => {
    setInputValue(item)
    setShowDropdown(false)
    setShowClearButton(true)
    onInputChange(item)
  }

  // remove all focus events and styles
  useEffect(() => {
    let current: boolean = true
    let onFocusInput: any
    if (current) {
      if (refs.current) {
        onFocusInput = document.addEventListener("click", (e: any) => {
          let dropdown: any = refs.current?.querySelector(".dropdown")
          let label: any = refs.current?.querySelector("label")
          let isDropdown: boolean = !!dropdown?.contains(e.target)
          let isLabel: boolean = !!label?.contains(e.target)

          if (!isDropdown && !isLabel) {
            label?.classList.remove("active")
            setShowDropdown(false)
          }
        })
      }
    }
    return () => {
      document.removeEventListener("click", onFocusInput)
      current = false
    }
  })

  return (
    <div className="search-datalist" ref={refs}>
      <div className="form-control">
        <label htmlFor={`data-${name}`}>
          {title && <div>{title}</div>}
          <input
            type="text"
            name={name}
            id={`data-${name}`}
            placeholder={placeholder}
            value={inputValue}
            onFocus={(e: any) => {
              e.target.parentElement.classList.add("active")
              setShowDropdown(true)
            }}
            onChange={(e: any) => {
              e.target.value.length > 0
                ? setShowClearButton(true)
                : setShowClearButton(false)
              setInputValue(e.target.value)
              onInputChange(e.target.value)
            }}
          />
          {showClearButton && (
            <button className="input-close" onClick={clearInput}>
              <Icon path={mdiClose} size={0.725} color="#555" />
            </button>
          )}
        </label>
        {showDropdown && <Dropdown onSelect={onDropdownSelect} items={items} />}
      </div>
    </div>
  )
}
export default SearchDatalist
