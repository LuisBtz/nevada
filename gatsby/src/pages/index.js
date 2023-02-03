import React, {useRef} from 'react'
import styled from 'styled-components';
import Bottom from '../components/Bottom/Bottom';
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import Top from '../components/Top/Top';
import useScrollSnap from 'react-use-scroll-snap';




const IndexPage = () => {


  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 2, delay: 0 });



  return (
    <Layout >
      <ContainerSite id='container' className='container' ref={scrollRef}>
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
