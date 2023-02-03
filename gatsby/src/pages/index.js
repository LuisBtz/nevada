import React from 'react'
import styled from 'styled-components';
import Bottom from '../components/Bottom/Bottom';
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import Top from '../components/Top/Top';

const IndexPage = () => {
  return (
    <Layout >
      <ContainerSite className='container'>
        <Top />
        <Bottom />
      </ContainerSite>
        
    </Layout>
  )
}

const ContainerSite = styled.div`
  scroll-snap-type: y mandatory;
`


export const Head = () => (
  <Seo title='Nevada Projects' description='Full website soon' image='/screenshot.png' />
  )



  export default IndexPage
