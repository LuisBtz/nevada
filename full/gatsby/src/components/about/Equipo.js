import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Equipo = ({data}) => {

    const imageIlustration = getImage(data.sanityAboutPage.imagenFinal.asset);
    const imageIlustrationAlt = data.sanityAboutPage.imagenFinal.textoAlternativo.esString;



    return(
        <EquipoContainer>
            <div className="info">
                <h2>El Equipo</h2>
                <h3>{data.sanityAboutPage.equipoTitulo && data.sanityAboutPage.equipoTitulo.esString}</h3>
            </div>
            <ul className="equipo">
                {data.sanityAboutPage.equipo.map(({ name, photo, puesto, _key }) => {
                        const imageOneGatsby = getImage(photo.asset);
                        const bgGetDataImageAlt = photo.asset.altText;
                    
                            return (
                                <li key={_key}>
                                    <div className="image">
                                        <GatsbyImage
                                            style={{ height: "100%", width: "100%" }}
                                            image={imageOneGatsby}
                                            alt={bgGetDataImageAlt}
                                        />
                                    </div>
                                    <div className="datos">
                                        <h3>{name}</h3>
                                        <h4>{puesto}</h4>
                                    </div>
                                </li>
                            )
                        })}
            </ul>
            <div className="ilustration">
                <div className="image">
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={imageIlustration}
                        alt={imageIlustrationAlt}
                    />
                </div>
            </div>
        </EquipoContainer>
    )
}

const EquipoContainer = styled.section`
padding: 0 50px;
    max-width: 1400px;
    margin: 0 auto;
    @media (max-width: 750px) {
        padding: 50px 20px;
        margin: 0 auto;
    }
    .info {
        padding-top: 100px;
        padding-bottom: 100px;
        border-top: solid 1px white;
        text-align: center;
        h2 {
            font-size: 0.875rem;
            font-family: var(--bold);
        }
        h3 {
            font-size: 2.375rem;
            font-family: var(--light);
            font-weight: normal;
            margin: 20px auto;
            max-width: 1000px;
        }
    }

    .equipo {
        display: grid;
        grid-gap: 30px;
        padding-bottom: 50px;
        grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%/1, max(550px, 100%/3)), 1fr));
        li {
            .datos {
                margin-top: 10px;
                display: flex;
                h3, h4 {
                    font-size: 1rem;
                    font-weight: normal;
                }
                h3 {
                    font-family: var(--bold);
                }
                h4 {
                    font-family: var(--light);
                    margin-left: 10px;
                }
            }
        }
    }
    .ilustration {
        max-width: 300px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

`

export default Equipo