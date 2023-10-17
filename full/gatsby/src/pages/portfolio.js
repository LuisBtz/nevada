import React from "react";
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import PortfolioComponent from "../components/portfolio/PortfolioComponent";




export const data = graphql`
  query {
    sanityPortfolioPage {
      title
      textoPortfolio {
        esString
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
            textoAlternativo {
              esString
            }
            asset {
              gatsbyImageData(
                layout: FULL_WIDTH
                outputPixelDensities: 1.5
                placeholder: NONE
              )
            }
          }
        }
      }
    }
    allSanityCategoria {
      edges {
        node {
          _id
          title
          slug {
            current
          }
          
          
        }
      }
    }
    allSanityIndustria {
      edges {
        node {
          _id
          title
          slug {
            current
          }
        }
      }
    }
  }
`;


const PortfolioPage = ({data}) => {


  const index = true;


  return (
    <Layout idex={index}>
      <PortfolioComponent  data={data} />
    </Layout>
  )
}



export const Head = () => (
  <Seo title='Nevada Projects | Portfolio' description='Estudio de Diseño & Arte' image='/screenshot.png' />
  )



  export default PortfolioPage
