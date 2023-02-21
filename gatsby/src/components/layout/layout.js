import React from "react";
import { Normalizer } from "../styles/Normalizer"
import { Typography } from "../styles/Typography"
import Header from "./header"




function Layout({ children, scroll  }) {



  return (
    <>
      <Normalizer />
      <Typography />
      <Header scroll={scroll} />
      <main >{children}</main>
    </>
  )
}


export default Layout
