import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeroText = ({data}) => {

    const imageOneGatsby = getImage(data.sanityAboutPage.imagen.asset);
    const bgGetDataImageAlt = getImage(data.sanityAboutPage.imagen.textoAlternativo.enString);


    return(
        <HeroTextContainer>
            <div className='top'>
                <div className='iz'>
                    <h1>{data.sanityAboutPage.subtitle.enString}</h1>
                    <div className='image'>
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={imageOneGatsby}
                            alt={bgGetDataImageAlt}
                        />

                    </div>
                </div>
                <div className='de'>
                    <BlockContent
                        blocks={data.sanityAboutPage._rawTextoEn}
                    />
                </div>
            </div>
        </HeroTextContainer>
    )
}

const HeroTextContainer = styled.section`
    padding: 140px 50px 0px;
    max-width: 1400px;
    margin: 0 auto;
    @media (max-width: 680px) {
        padding: 50px 20px;
    }
    .top {
        display: flex;
        width: 100%;
        border-top: solid 1px rgba(255, 255, 255, 0.3);
        padding-top: 50px;
        @media (max-width: 750px) {
            flex-direction: column;
            margin-bottom: 0px;
        }
        .iz {
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h1 {
                font-size: 0.875rem;
                font-family: var(--bold);
            }
            .image {
                width: 200px;
            }
            @media (max-width: 750px) {
                flex-direction: row;
            }
            @media (max-width: 750px) {
                width: 100%;
            }
        }
        .de {
            width: 70%;
            @media (max-width: 750px) {
                width: 100%;
            }
            h2 {
                font-size: 2.375rem;
                font-family: var(--light);
                margin-bottom: 20px;
                line-height: 0.9;
                strong, i, em, b {
                    font-family: var(--light);
                    font-weight: normal;
                    color: var(--red);
                }
            }
            p {
                font-size: 1.25rem;
                font-family: var(--light);
                margin-bottom: 20px;
                @media (max-width: 680px) {
                    font-size: 1.5rem;
                    margin-top: 20px;
                }
            }
            a {
                padding-top: 20px;
                display: inline-block;
                text-decoration: underline;
                font-family: var(--bold);
                font-size: 1.25rem;
            }
        }
        
    }
`

export default HeroText