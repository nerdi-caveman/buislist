import React from "react"
import "./style.scss"

interface IReactRadioBtn {
  onSelect: Function
  items: any
  id: string
  defaultChecked?: number
  type?: string
}

const ReactRadioBtn: React.FC<IReactRadioBtn> = ({
  onSelect,
  items,
  defaultChecked,
  id,
  type = "b",
}) => {
  if (type === "c") {
    return (
      <>
        {items.map((item: any, index: number) => (
          <div key={index} className={`form-group ${type}`}>
            <input
              name={id}
              id={id + index}
              type={"radio"}
              defaultChecked={index === defaultChecked}
              value={item.value}
              onClick={(e: any) => {
                onSelect(e.target.value)
              }}
            />
            <label htmlFor={id + index}></label>
            <label className="label" htmlFor={id + index}>
              {item.label}
            </label>
          </div>
        ))}
      </>
    )
  }
  return (
    <>
      {items.map((item: any, index: number) => (
        <div key={index} className={`form-group ${type}`}>
          <input
            name={id}
            id={id + index}
            type={"radio"}
            defaultChecked={index === defaultChecked}
            value={item}
            onChange={(e: any) => onSelect(e.target.value)}
          />
          <label htmlFor={id + index}>
            <p>{item}</p>
          </label>
        </div>
      ))}
    </>
  )
}
export default ReactRadioBtn
