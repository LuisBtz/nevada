import React from "react";
import { graphql } from 'gatsby'
import Layout from '../../components/en/layout/layout'
import { Seo } from '../../components/en/layout/seo';
import PortfolioComponent from "../../components/en/portfolio/PortfolioComponent";




export const data = graphql`
  query {
    sanityPortfolioPage {
      title
      textoPortfolio {
        enString
      }
    }
    allSanityPostPage(sort: {_updatedAt: DESC}) {
      edges {
        node {
          title
          slug {
            current
          }
          shortDescription {
            enText
          }
          thumbnail {
            textoAlternativo {
              enString
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
          titleEn
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
          titleEn
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
  <Seo title='Nevada Projects | Porfolio' description='Estudio de Diseño & Arte' image='/screenshot.png' />
  )



  export default PortfolioPage
