import React from "react";
import "./style.scss";

interface IReactRadioBtn {
  onSelect: Function;
  items: any;
  id: string;
  type?: string;
}

const ReactRadioBtn: React.FC<any> = ({
  onSelect,
  items,
  id,
  type = "b",
}: IReactRadioBtn) => {
  if (type === "c") {
    return (
      <>
        {items.map((item: any, index: number) => (
          <div key={index} id={id} className={`form-group ${type}`}>
            <input
              name={id}
              id={id + index}
              type="radio"
              defaultChecked = {index === 0}
              value={item.value}
              onChange={(e: any) => onSelect(e.target.value)}
            />
            <label htmlFor={id + index}></label>
            <p>{item.label}</p>
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      {items.map((item: any, index: number) => (
        <div key={index} id={id} className={`form-group ${type}`}>
          <input
            name={id}
            id={id + index}
            type="radio"
            defaultChecked = {index === 0}
            value={item}
            onChange={(e: any) => onSelect(e.target.value)}
          />
          <label htmlFor={id + index}>
            <p>{item}</p>
          </label>
        </div>
      ))}
    </>
  );
};
export default ReactRadioBtn;
