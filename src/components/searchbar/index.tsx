import React, { useState } from "react";
import SearchbarWrapper from "./searchbar-wrapper";

const Searchbar: React.FC<any> = () => {
  const itemData = [
    "Perfume oils",
    "Software Engineer",
    "Dessy Naija",
    "Fashion designer",
    "Photographer",
  ];
  const locationData = [
    "Ibadan",
    "Abuja",
    "Lagos",
    "Bodija",
    "Ibadan North",
  ];
  const [items, setItems] = useState([""]);
  const [locations, setLocations] = useState([""]);

  const searchProductStore = (value: string): void => {
    let replace: string = value.toLowerCase();
    let regex = new RegExp(replace);

    const fetchData: string[] = itemData.filter((item) =>
      item.toLowerCase().match(regex) ? true : false
    );
    setItems(fetchData);
  };

  const searchLocation = (value: string): void => {
    let replace: string = value.toLowerCase();
    let regex = new RegExp(replace);

    const fetchData: string[] = locationData.filter((item) =>
      item.toLowerCase().match(regex) ? true : false
    );
    setLocations(fetchData);
  };
  return (
    <SearchbarWrapper
      searchProductStore={searchProductStore}
      searchLocation={searchLocation}
      items={items}
      locations = {locations}
    />
  );
};
export default Searchbar;
