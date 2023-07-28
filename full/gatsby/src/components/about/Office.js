import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Office = ({data}) => {


    const [date, setDate] = useState(new Date());

    useEffect(() => {
      setInterval(() => setDate(new Date()), 1000);
    }, []);
  
    const hours = date.getHours();
    const minute = date.getMinutes();
  


    const imageOneGatsby = getImage(data.sanityAboutPage.oficinasImagen.asset);
    const bgGetDataImageAlt = data.sanityAboutPage.oficinasImagen.textoAlternativo.esString


    return(
        <OfficeContainer>
            <div className='top'>
                <div className='iz'>
                    <h2>{data.sanityAboutPage.oficinasTitulo.esString}</h2>
                </div>
                <div className='de'>
                    <p>CDMX <span>{hours > 12 ? hours - 12 : hours}<i>:</i>{minute < 10 ? '0' + minute : minute} {hours > 11 ? 'PM' : 'AM'}</span></p>
                </div>
            </div>
            <div className="office">
                <div className="image">
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={imageOneGatsby}
                        alt={bgGetDataImageAlt}
                    />
                </div>
                <div className="info">
                    <p className="dir">{data.sanitySettingsPage.direccion}</p>
                    <div className="datos">
                        <p>{data.sanitySettingsPage.tel}</p>
                        <p>{data.sanitySettingsPage.mail}</p>
                    </div>
                    <a href={data.sanitySettingsPage.linkMapa}>Google Maps<img src="/arrow.svg" alt='flecha a nuestra dirección' /></a>
                </div>
            </div>
        </OfficeContainer>
    )
}

const OfficeContainer = styled.section`
padding: 100px 50px;
    max-width: 1400px;
    margin: 40px auto;
    @media (max-width: 750px) {
        padding: 50px 20px;
        margin: 0 auto;
    }
    .top {
        display: flex;
        width: 100%;
        border-top: solid 1px white;
        padding-top: 50px;
        margin-bottom: 30px;
        @media (max-width: 750px) {
            flex-direction: column;
            margin-bottom: 0px;
        }
        .iz {
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h2 {
                font-size: 0.875rem;
                font-family: var(--bold);
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
            strong, i, em, b, span {
                    font-weight: normal;
                    color: var(--red);
                }
            p {
                font-size: 2.375rem;
                font-family: var(--bold);
                margin-bottom: 20px;
                @media (max-width: 680px) {
                    font-size: 1.5rem;
                    margin-top: 20px;
                }
                i {
                    font-style: normal;
                    animation: blink 1000ms infinite forwards;
                    display: inline-block;
                    margin-left: 1px;
                    margin-right: 0px;
                    position: relative;
                    bottom: 3px;
                }
                @keyframes blink {
                    0% {
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
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
    .office {
        .info {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
            @media (max-width: 750px) {
                flex-direction: column;
                margin-top: 20px;
            }
            p.dir {
                width: 195px;
                @media (max-width: 750px) {
                    margin-bottom: 20px;
                }
            }
            .datos {
                @media (max-width: 750px) {
                    margin-bottom: 20px;
                }
            }
            a {
                display: flex;
                align-items: center;
                width: 200px;
                
                img {
                    width: 13px;
                    margin-left: 5px;
                }
            }
        }
    }
`

export default Office