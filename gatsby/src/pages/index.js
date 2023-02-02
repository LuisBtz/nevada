import React from 'react'
import Bottom from '../components/Bottom/Bottom';
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import Top from '../components/Top/Top';

const IndexPage = () => {
  return (
    <Layout >
        <Top />
        <Bottom />
    </Layout>
  )
}


export const Head = () => (
  <Seo title='Nevada Projects' description='Full website soon' image='/screenshot.png' />
  )


  export default IndexPage
