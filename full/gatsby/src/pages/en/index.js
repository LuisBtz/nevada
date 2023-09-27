import React from "react";
import Layout from '../../components/en/layout/layout'
import { Seo } from '../../components/en/layout/seo';
import Video from "../../components/en/home/Video";
import { graphql } from "gatsby";
import Portfolio from "../../components/en/home/Portfolio";
import Servicios from "../../components/en/home/Servicios";
import SliderComponent from "../../components/en/home/SliderComponent";
import Contacto from "../../components/en/home/Contacto";

export const data = graphql`
  query {
    sanityHomePage {
      videoID
      portafolioTitulo {
        enString
      }
      portfolioTexto {
        enText
      }
      serviciosTitle {
        enString
      }
      serviciosText1 {
        enText
      }
      serviciosText2 {
        enText
      }
      serviciosList {
        _key
        enString
      }
      oficinasTitulo {
        enString
      }
      oficinasTexto {
        enString
      }
      oficinasSlider {
        _key
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
      
      contactoTitulo {
        enString
      }
      contactoTexto {
        enString
      }
    }

    sanitySettingsPage {
      mail
      linkMapa
    }


    allSanityPostPage(limit: 11) {
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


const IndexPageEn = ({data}) => {


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
  <Seo title='Nevada Projects' description='Full website soon' image='/screenshot.png' />
  )



  export default IndexPageEn
