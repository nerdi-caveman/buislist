import React from "react"
import MyStoreWrapper from "./my-store-collections-wrapper"
import { withRouter } from "react-router-dom"
import MyStoreHeader from "../../../components/my-store-header"

const MyStore: React.FC = () => {
  return (
    <>
      <MyStoreHeader />
      <MyStoreWrapper />
    </>
  )
}
export default withRouter(MyStore)
