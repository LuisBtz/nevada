import React from "react";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';


const PortfolioPage = () => {

  const index = false;

  return (
    <Layout idex={index}>
        <h2>INDEX</h2>
    </Layout>
  )
}



export const Head = () => (
  <Seo title='Nevada Projects' description='Full website soon' image='/screenshot.png' />
  )



  export default PortfolioPage
