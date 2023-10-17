import React from "react";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import { graphql } from 'gatsby'
import FormularioThankyou from "../components/contact/FormularioThankyou";


export const data = graphql`
  query {
    sanityContactPage {
      textoPortfolio {
        esString
      }
      texto2Portfolio {
        esString
      }
      imagenFinal {
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
    sanitySettingsPage {
      mail
      direccion
      tel
      redesSociales {
        _key
        redSocial
        socialLink
      }
    }



  }
`;





const ContactPage = ({data}) => {

  const index = false;

  return (
    <Layout idex={index}>
        <FormularioThankyou data={data} />
    </Layout>
  )

}



export const Head = () => (
  <Seo title='Nevada Projects | Thank You' description='Estudio de Diseño & Arte' image='/screenshot.png' />
  )



  export default ContactPage
