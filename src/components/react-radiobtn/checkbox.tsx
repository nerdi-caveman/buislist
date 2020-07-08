import React from "react"
import "./style.scss"

interface IReactCheckBtn {
  onSelect: Function
  items: any
  id: string
  defaultChecked?: number | string
  type?: string
  htmlType?: string
}

const ReactCheckBtn: React.FC<IReactCheckBtn> = ({
  onSelect,
  items,
  defaultChecked = 1,
  id,
  htmlType = "radio",
  type = "b",
}) => {
  const supportedHtmlTypes: string[] = ["checkbox", "radio"]
  if (!supportedHtmlTypes.includes(htmlType)) {
    return <></>
  }
  if (type === "c") {
    return (
      <>
        {items.map((item: any, index: number) => (
          <div key={index} className={`form-group ${type}`}>
            <input
              name={id}
              id={id + index}
              type={htmlType || "radio"}
              defaultChecked={index === 0}
              value={item.value}
              onChange={(e: any) => {
                onSelect(e.target.value)
              }}
            />
            <label htmlFor={id + index}></label>
            <p>{item.label}</p>
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
            type={htmlType || "radio"}
            defaultChecked={index === 0}
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
export default ReactCheckBtn
