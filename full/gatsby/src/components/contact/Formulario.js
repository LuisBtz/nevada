import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Formulario = ({data}) => {

    const imageIlustration = getImage(data.sanityContactPage.imagenFinal.asset);
    const imageIlustrationAlt = data.sanityContactPage.imagenFinal.textoAlternativo.esString;



    return(
        <FormularioContainer>
            <div className='top'>
                <div className='iz'>

                    <div className="texto">
                        <div className="section">
                            <h3>Escríbenos</h3>
                            <p>{data.sanitySettingsPage.mail}</p>
                        </div>
                        <div className="section">
                            <h3>Salúdanos</h3>
                            <p>{data.sanitySettingsPage.direccion}</p>
                        </div>
                        <div className="section">
                            <a href={`mailto:${data.sanitySettingsPage.mail}`}>{data.sanitySettingsPage.mail}</a>
                        </div>
                        <ul className="section">
                            <li><h3>Síguenos</h3></li>
                            {data.sanitySettingsPage.redesSociales.map(({ redSocial, socialLink, _key }) => {
                                return (
                                    <li><a href={socialLink && socialLink}>{redSocial && redSocial}</a></li>
                                )
                            })}
                        </ul>

                    </div>
                    <div className="image">
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={imageIlustration}
                            alt={imageIlustrationAlt}
                        />
                    </div>
                </div>
                <div className='de'>
                    <h1>{data.sanityContactPage.textoPortfolio.esString}</h1>
                    <h2>{data.sanityContactPage.texto2Portfolio.esString}</h2>
                    <div className="form">
                        <form 
                            name="Form Es" 
                            action="/thank-you"
                            method="POST" 
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                            <input type="hidden" name="form-name" value="Form Es" />
                            <p class="hidden">
                                <label>
                                Don't fill this out if you're human: <input name="bot-field" />
                                </label>
                            </p>
                            <input type='text' name='nombre' placeholder='Nombre' />
                            <input type='email' name='email' placeholder='Correo electrónico' required />
                            <input type='text' name='company' placeholder='Compañía' required />
                            <textarea type='text' name='message' placeholder='Cuéntanos sobre tu proyecto' ></textarea>
                            <button type='submit'>Enviar<img src="/enviar.svg" alt="Botón Enviar" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </FormularioContainer>
    )
}

const FormularioContainer = styled.section`
    padding: 140px 50px 0px;
    max-width: 1400px;
    margin: 0 auto;
    @media (max-width: 680px) {
        padding: 100px 20px 50px;
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
            padding-bottom: 50px;
            h1 {
                font-size: 0.875rem;
                font-family: var(--bold);
            }
            .texto {
                .section {
                    margin-bottom: 50px;
                    font-size: 1rem;
                     &:nth-child(2) {
                        width: 200px;
                     }
                     h3 {
                        font-family: var(--bold);
                        margin-bottom: 10px;
                     }
                }
            }
            .image {
                width: 150px;
                @media (max-width: 750px) {
                    max-width: 220px;
                    height: 125px;
                }
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
            padding-bottom: 50px;
            padding-left: 20px;
            @media (max-width: 750px) {
                width: 100%;
                padding-left: 0;
            }
            h1 {
                font-size: 2.375rem;
                font-family: var(--light);
                margin-bottom: 20px;
                line-height: 0.9;
                
            }
            h2 {
                font-size: 1.25rem;
                font-family: var(--light);
                margin-bottom: 20px;
                @media (max-width: 680px) {
                    font-size: 1.5rem;
                    margin-top: 20px;
                }
            }
            form {
                width: 100%;
                margin: 50px auto;
                display: flex;
                flex-direction: column;
                padding-right: 30px;
                @media (max-width: 680px) {
                    height: auto;
                }
                .hidden {
                    visibility: hidden;
                    position: absolute;
                }
                input, textarea, select {
                    background: none;
                    border-top: none;
                    border-left: none;
                    border-right: none;
                    border-bottom: solid 1px white;
                    width: 100%;
                    margin-bottom: 10px;
                    color: var(--white);
                    padding: 15px 0;
                    outline: none;
                    font-size: 1.25rem;
                    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                        color: rgba(255, 255, 255, 1);
                        font-size: 1.25rem;
                    }

                    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                        color: rgba(255, 255, 255, 1);
                        font-size: 1.25rem;
                    }

                    &::-ms-input-placeholder { /* Microsoft Edge */
                        color: rgba(255, 255, 255, 1);
                        font-size: 1.25rem;
                    }
                }
                textarea {
                    padding-bottom: 24px;
                }
                button {
                    margin-top: 20px;
                    color: white;
                    display: flex;
                    align-items: center;
                    font-family: var(--bold);
                    font-size: 1.25rem;
                    img {
                        width: 20px;
                        margin-left: 10px;
                    }
                }

            }
            
        }
        
    }
`

export default Formulario