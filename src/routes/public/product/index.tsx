import React from "react";
import ProductWrapper from "./product-wrapper";
import { withRouter } from "react-router-dom";

const Product: React.FC<any> = ({ ...props }) => {
  const params = props?.match?.params;
  console.log(params);

  return <ProductWrapper />;
};
export default withRouter(Product);
