import React from "react";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import Video from "../components/home/Video";
import { graphql } from "gatsby";
import Portfolio from "../components/home/Portfolio";

export const data = graphql`
  query {
    sanityHomePage {
      videoID
      portafolioTitulo {
        esString
      }
      portfolioTexto {
        esText
      }
    }
    allSanityPostPage {
      edges {
        node {
          title
          slug {
            current
          }
          shortDescription {
            esText
          }
          thumbnail {
            asset {
              gatsbyImageData(
                layout: FULL_WIDTH
                outputPixelDensities: 1.5
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
      }
    }
  }
`;


const IndexPage = ({data}) => {


  const indexTrue = true;


  return (
    <Layout indexTrue={indexTrue} >
        <Video data={data} />
        <Portfolio data={data.sanityHomePage} posts={data.allSanityPostPage}/>
    </Layout>
  )
}



export const Head = () => (
  <Seo title='Nevada Projects' description='Full website soon' image='/screenshot.png' />
  )



  export default IndexPage
