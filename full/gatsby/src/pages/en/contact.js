import React from "react";
import Layout from '../../components/en/layout/layout'
import { Seo } from '../../components/en/layout/seo';
import { graphql } from 'gatsby'
import FormularioThankYou from "../../components/en/contact/FormularioThankYou";


export const data = graphql`
  query {
    sanityContactPage {
      textoPortfolio {
        enString
      }
      texto2Portfolio {
        enString
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
        <FormularioThankYou data={data} />
    </Layout>
  )

}



export const Head = () => (
  <Seo title='Nevada Projects | Contact' description='Estudio de Diseño & Arte' image='/screenshot.png' />
  )



  export default ContactPage