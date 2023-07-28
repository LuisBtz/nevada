import React from "react";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import { graphql } from 'gatsby'
import HeroText from "../components/about/HeroText";
import Office from "../components/about/Office";
import Equipo from "../components/about/Equipo";



export const data = graphql`
  query {
    sanityAboutPage {
      title
      subtitle {
        esString
      }
      _rawTextoEs
      imagen {
        textoAlternativo {
          esString
        }
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
      oficinasTitulo {
        esString
      }
      oficinasImagen {
        textoAlternativo {
          esString
        }
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
      equipoTitulo {
        esString
      }
      equipo {
        _key
        name
        puesto
        photo {
          asset {
            altText
            gatsbyImageData(
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
      imagenFinal {
        textoAlternativo {
          esString
        }
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
    }

  sanitySettingsPage {
    direccion
    tel
    mail
    linkMapa
  }


  }
`;




const AboutPage = ({data}) => {

  const index = false;

  return (
    <Layout idex={index}>
        <HeroText data={data} />
        <Office data={data} />
        <Equipo data={data} />
    </Layout>
  )

}



export const Head = () => (
  <Seo title='Nevada Projects' description='Full website soon' image='/screenshot.png' />
  )



  export default AboutPage
