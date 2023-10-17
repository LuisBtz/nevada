import React, { useState } from "react"
import Layout from '../../components/en/layout/layout'
import { Seo } from '../../components/en/layout/seo';
import { graphql } from 'gatsby'
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import ModuleComp from "../../components/en/modulesPortfolio/ModulesComp";
import RelatedContent from "../../components/en/portfolio/RelatedContent";


export const query = graphql`
  query($slug: String!) {
    project: sanityPostPage(slug: { current: {eq: $slug} }) {
        title
        cliente
        enfoque {
            enString
        }
        industrias {
            _key
            title
            titleEn
        }
        shortDescription {
            enText
        }

        _rawTextoEn
        modulos {
            ... on SanityImageType {
                _key
                _type
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
            ... on SanityStringType {
                _key
                _type
                enString
            }
            ... on SanityTwoImages {
                _key
                _type
                imagen1 {
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
                imagen2 {
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
        }
        contenidoRelacionado {
            _id
            title
            shortDescription {
                enText
            }
            slug {
                current
            }
            thumbnail {
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
    }
    portfolio: sanityPortfolioPage {
        textoOtrosProyectos {
            enString
        }
    }
  }
`;




// markup
export default function SinglePortfolioPage({ data: { project, portfolio } }) {

    const [show, setShow] = useState(true);



  return (
    <Layout>
        <ProjectContainer id='project'>
            <div className='top'>
                <div className='iz'>

                    <div className="texto">
                        <div className="section">
                            <h3>Project Overview</h3>
                        </div>
                        
                        

                    </div>
                </div>
                <div className='de'>
                    <h1>{project.title}</h1>
                    <h2>{project.shortDescription && project.shortDescription.enText}</h2>
                    
                </div>
            </div>
            <div className={show ? 'masInfo cero' : 'masInfo toggle'}>
                <div className="iz">
                    <div className="section">
                        <h3>Client</h3>
                        <p>{project.cliente && project.cliente}</p>
                    </div>
                    <div className="section">
                        <h3>Industry</h3>
                        {project.industrias && project.industrias.map(({ titleEn, _key }) => {
                            return (
                                <p key={_key}>{titleEn}</p>
                            )
                        })}
                    </div>
                    <div className="section">
                        <h3>Focus</h3>
                        <p>{project.enfoque && project.enfoque.enString}</p>
                        
                    </div>
                </div>
                <div className="de">
                    <BlockContent
                        blocks={project._rawTextoEn}
                    />
                </div>
            </div>
            <div className="masInfo">
                <div className="iz"> </div>
                <div className="de">
                    <button onClick={() => setShow(!show)}>Read  {show ? <span>more <i>+</i></span> : <span>less <i>-</i></span>}</button>
                </div>
            </div>
            <ModuleComp modulos={project.modulos} />
            <RelatedContent contRel={project.contenidoRelacionado} portfolio={portfolio} />
        </ProjectContainer>
    </Layout>
  );
}


const ProjectContainer = styled.section`
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
            padding-bottom: 20px;
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
            padding-bottom: 20px;
            padding-left: 20px;
            @media (max-width: 750px) {
                width: 100%;
                padding-left: 0;
            }
            h1 {
                font-size: 2.375rem;
                font-family: var(--bold);
                margin-bottom: 20px;
                line-height: 0.9;
                
            }
            h2 {
                font-size: 2.375rem;
                font-family: var(--light);
                @media (max-width: 680px) {
                    font-size: 1.5rem;
                }
            }
            
        }
        
    }
    .masInfo.toggle {
        .iz, .de {
            max-height: 1500px;
            overflow: hidden;
            transition: all 350ms ease-in-out;
        }
    }
    .masInfo.cero {
        .iz, .de {
            max-height: 0;
            overflow: hidden;
            padding-bottom: 0;
            transition: all 350ms ease-in-out;
        }
    }
    .masInfo {
        overflow: hidden;
        display: flex;
        width: 100%;
        padding-top: 0px;
        @media (max-width: 750px) {
            flex-direction: column;
            margin-bottom: 0px;
        }
        
        .iz {
            width: 30%;
            display: flex;
            flex-direction: column;
            padding-bottom: 20px;
            .section {
                margin-bottom: 30px;
                h3 {
                    font-family: var(--bold);
                    font-size: 1rem;
                }
                p {
                    font-family: var(--light);
                    font-size: 1rem;
                }
            }
        }
        .de {
            width: 70%;
            padding-bottom: 20px;
            padding-left: 20px;
            color: white;
            p {
                margin-bottom: 15px;
                font-size: 1.25rem;
            }
            button {
                color: white;
                font-family: var(--bold);
                font-size: 1.25rem;
                i {
                    font-style: normal;
                    color: var(--red);
                    font-weight: var(--bold);
                }
            }
            @media (max-width: 750px) {
                width: 100%;
                padding-left: 0;
            }
            
        }

    }
 `


export const Head = ({ data: { project } }) => (
    <Seo title={`Nevada Projects | ${project.title}`} description={`Estudio de Diseño & Arte`} image='/screenshot.png' />
    )
  