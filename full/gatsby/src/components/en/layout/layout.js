import React from "react";
import { Normalizer } from "../../styles/Normalizer"
import { Typography } from "../../styles/Typography"
import Header from "../../en/layout/header"
import Footer from "../../en/layout/footer"




function Layout({ children, indexTrue  }) {



  return (
    <>
      <Normalizer />
      <Typography />
      <Header indexTrue={indexTrue} />
      <main >{children}</main>
      <Footer />
    </>
  )
}


export default Layout
