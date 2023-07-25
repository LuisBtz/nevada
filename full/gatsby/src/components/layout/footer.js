import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Footer = () => {

const data = useStaticQuery(graphql`
query {
    sanitySettingsPage {
        nevadaLogo {
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
        descripcion {
            esText
        }
        linkMapa
        direccion
        tel
        mail
        redesSociales {
            _key
            redSocial
            socialLink
        }
        copyRight {
            esString
        }
        sticker1 {
            textoAlternativo {
                esString
            }
            asset {
                url
            }
        }
        sticker2 {
            textoAlternativo {
                esString
            }
            asset {
                url
            }
        }
    }
}
    `);


const bgGetDataImage = getImage(data.sanitySettingsPage.nevadaLogo && data.sanitySettingsPage.nevadaLogo.asset)
const bgGetDataImageAlt = data.sanitySettingsPage.nevadaLogo && data.sanitySettingsPage.nevadaLogo.textoAlternativo && data.sanitySettingsPage.nevadaLogo.textoAlternativo.esString


    return(
        <FooterContainer>
            <Link to='/' className="logo">
                <div className="image">
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={bgGetDataImage}
                        alt={bgGetDataImageAlt}
                    />
                </div>
            </Link>
            <div className="top">
                    
                <div className="column1">
                    <p>{data.sanitySettingsPage.descripcion && data.sanitySettingsPage.descripcion.esText}</p>
                </div>
                <div className="column2">
                    <ul>
                        <li><h4>Nevada</h4></li>
                        <li>
                            <Link to='/about'>Nosotros</Link>
                        </li>
                        <li>
                            <Link to='/portfolio'>Portafolio</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contacto</Link>
                        </li>
                    </ul>
                </div>
                <div className="column3">
                    <h4>Contáctanos</h4>
                    <a target="_blank" rel="noreferrer" href={data.sanitySettingsPage.linkMapa && data.sanitySettingsPage.linkMapa}>{data.sanitySettingsPage.direccion && data.sanitySettingsPage.direccion}</a>
                    <p>{data.sanitySettingsPage.tel && data.sanitySettingsPage.tel}</p>
                    <a href={`mailto:${data.sanitySettingsPage.mail}`}>{data.sanitySettingsPage.mail}</a>
                </div>
                <div className="column4">
                    <ul>
                        <li><h4>Síguenos</h4></li>
                        {data.sanitySettingsPage.redesSociales.map(({ redSocial, socialLink, _key }) => {
                            return (
                                <li><a href={socialLink && socialLink}>{redSocial && redSocial}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="bot">
                <p>{data.sanitySettingsPage.copyRight && data.sanitySettingsPage.copyRight.esString}</p>
                <div className="images">
                    <div className="area"></div>
                    <div className="img">
                        <img src={data.sanitySettingsPage.sticker1 && data.sanitySettingsPage.sticker1.asset.url} alt={data.sanitySettingsPage.sticker1.textoAlternativo.esString} />
                        <img src={data.sanitySettingsPage.sticker2 && data.sanitySettingsPage.sticker2.asset.url} alt={data.sanitySettingsPage.sticker2.textoAlternativo.esString} />
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    background-color: var(--red);
    color: var(--black);
    padding: 50px 50px 0px;
    p {
        font-family: var(--light);
    }
    a {
        font-family: var(--light);
    }
    .logo {
        max-width: 1400px;
        .image {
                width: 195px;
                margin-bottom: 20px;
            }
    }
    .top {
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        @media (max-width: 875px) {
            flex-direction: column;
        }
        h4 {
                font-family: var(--bold);
            }
        .column1 {
            width: 335px;
            @media (max-width: 875px) {
                margin-bottom: 50px;
            }
        }
        .column2 {
            @media (max-width: 875px) {
                margin-bottom: 50px;
            }
        }
        .column3 {
            width: 195px;
            p {
                margin-top: 20px;
            }
            @media (max-width: 875px) {
                margin-bottom: 50px;
            }
        }
        .column4 {
            width: 250px;
            @media (max-width: 1000px) {
                width: auto;
            }
        }
    }
    .bot {
        width: 100%;
        p {
            font-family: var(--light);
            font-size: 0.875rem;
            opacity: 0.5;
        }
        
        .images {
            justify-self: center;
            text-align: center;
            width: 150px;
            height: 150px;
            margin: 0 auto;
            position: relative;
            @media (max-width: 875px) {
                margin: 50px 0 0;
            }
            .area {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                &:hover + .img {
                    img:nth-child(1) {
                        display: block;
                    }
                    img:nth-child(2) {
                        display: none;
                    }
                }
            }
            img {
                position: absolute;
                top: 0;
                left: 0;
                &:nth-child(1) {
                    display: none;
                }
                
            }
        }
    }
`

export default Footer