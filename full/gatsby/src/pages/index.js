import React from "react";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import Video from "../components/home/Video";
import { graphql } from "gatsby";
import Portfolio from "../components/home/Portfolio";
import Servicios from "../components/home/Servicios";
import SliderComponent from "../components/home/SliderComponent";
import Contacto from "../components/home/Contacto";

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
      serviciosTitle {
        esString
      }
      serviciosText1 {
        esText
      }
      serviciosText2 {
        esText
      }
      serviciosList {
        _key
        esString
      }
      oficinasTitulo {
        esString
      }
      oficinasTexto {
        esString
      }
      oficinasSlider {
        _key
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
      
      contactoTitulo {
        esString
      }
      contactoTexto {
        esString
      }
    }

    sanitySettingsPage {
      mail
      linkMapa
    }


    allSanityPostPage(limit: 11, sort: {_updatedAt: DESC}) {
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


const IndexPage = ({data}) => {


  const indexTrue = true;


  return (
    <Layout indexTrue={indexTrue} >
        <Video data={data} />
        <Portfolio data={data} />
        <Servicios data={data.sanityHomePage} />
        <SliderComponent data={data} />
        <Contacto data={data} />
    </Layout>
  )
}



export const Head = () => (
  <Seo title='Nevada Projects' description='Estudio de Diseño & Arte' image='/screenshot.png' />
  )



  export default IndexPage
