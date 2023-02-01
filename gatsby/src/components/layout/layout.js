import React from "react"
import { Normalizer } from "../styles/Normalizer"
import { Typography } from "../styles/Typography"
import Header from "./header"




function Layout({ children, dark }) {


  return (
    <>
      <Normalizer />
      <Typography />
      <Header dark={dark} />
      <main>{children}</main>
    </>
  )
}


export default Layout
