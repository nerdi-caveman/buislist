import React from "react"
import Head from "../../../components/head"

interface IMyStoreWrapper {}

const MyStoreWrapper: React.FC<IMyStoreWrapper> = () => {
  return (
    <div id="my-store" className="main-container">
      <Head title="My Store" />
    </div>
  )
}
export default MyStoreWrapper
