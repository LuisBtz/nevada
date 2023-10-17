import React from "react";
import Layout from '../../components/en/layout/layout'
import { Seo } from '../../components/en/layout/seo';
import { graphql } from 'gatsby'
import HeroText from "../../components/en/about/HeroText";
import Office from "../../components/en/about/Office";
import Equipo from "../../components/en/about/Equipo";



export const data = graphql`
  query {
    sanityAboutPage {
      title
      subtitle {
        enString
      }
      _rawTextoEn
      imagen {
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
      oficinasTitulo {
        enString
      }
      oficinasImagen {
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
      equipoTitulo {
        enString
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
              placeholder: NONE
            )
          }
        }
      }
      imagenFinal {
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

  sanitySettingsPage {
    direccion
    tel
    mail
    linkMapa
  }


  }
`;




const AboutPageEn = ({data}) => {

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
  <Seo title='Nevada Projects | About' description='Estudio de Diseño & Arte' image='/screenshot.png' />
  )



  export default AboutPageEn
