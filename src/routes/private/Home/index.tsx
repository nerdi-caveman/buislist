import React from "react"
import HomeWrapper from "./homeWrapper"
import { checkAuth } from "../../../utils"
import UserHeader from "../../../components/userheader"
import Header from "../../../components/header"

const PrivateHome: React.FC<any> = () => (
  <>
    {checkAuth(1) ? <UserHeader /> : <Header />}
    <HomeWrapper />
  </>
)
export default PrivateHome
