import React from "react";
import styled from "styled-components";

const Contacto = ({data}) => {
    return(
        <ContactoContainer>
            <h3>{data.sanityHomePage.contactoTitulo.enString}</h3>
            <p>{data.sanityHomePage.contactoTexto.enString}</p>
            <a href={`mailto:${data.sanitySettingsPage.mail}`}>Send us an e-mail</a>
        </ContactoContainer>
    )
}

const ContactoContainer = styled.section`
    text-align: center;
    width: 70%;
    margin: 100px auto;
    border: solid 1px white;
    border-radius: 50%;
    padding: 50px 100px;
    @media (max-width: 680px) {
            padding: 40px 10px;
            width: 95%;
        }
    h3 {
        font-size: 0.875rem;
    }
    p {
        font-size: 2.4vw;
        margin-bottom: 50px;
        margin-top: 50px;
        @media (max-width: 680px) {
            font-size: 1rem;
        }
    }
    a {
        font-size: 1.25rem;
        font-family: var(--bold);
        text-decoration: underline;
    }
`

export default Contacto