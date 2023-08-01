import React, { useState } from "react"
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import { graphql } from 'gatsby'
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import ModuleComp from "../components/modulesPortfolio/ModulesComp";


export const query = graphql`
  query($slug: String!) {
    project: sanityPostPage(slug: { current: {eq: $slug} }) {
        title
        cliente
        enfoque {
            esString
        }
        industrias {
            _key
            title
        }
        shortDescription {
            esText
        }
        _rawTextoEs
        modulos {
            ... on SanityImageType {
                _key
                _type
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
            ... on SanityStringType {
                _key
                _type
                esString
            }
            ... on SanityTwoImages {
                _key
                _type
                imagen1 {
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
            }
        }
    }
  }
`;




// markup
export default function SinglePortfolioPage({ data: { project } }) {

    const [show, setShow] = useState(true);


  return (
    <Layout>
        <ProjectContainer id='project'>
            <div className='top'>
                <div className='iz'>

                    <div className="texto">
                        <div className="section">
                            <h3>Overview de proyecto</h3>
                        </div>
                        
                        

                    </div>
                </div>
                <div className='de'>
                    <h1>{project.title}</h1>
                    <h2>{project.shortDescription && project.shortDescription.esText}</h2>
                    
                </div>
            </div>
            <div className={show ? 'masInfo cero' : 'masInfo toggle'}>
                <div className="iz">
                    <div className="section">
                        <h3>Cliente</h3>
                        <p>{project.cliente && project.cliente}</p>
                    </div>
                    <div className="section">
                        <h3>Industria</h3>
                        {project.industrias && project.industrias.map(({ title, _key }) => {
                            return (
                                <p key={_key}>{title}</p>
                            )
                        })}
                    </div>
                    <div className="section">
                        <h3>Enfoque</h3>
                        <p>{project.enfoque && project.enfoque.esString}</p>
                        
                    </div>
                </div>
                <div className="de">
                    <BlockContent
                        blocks={project._rawTextoEs}
                    />
                </div>
            </div>
            <div className="masInfo">
                <div className="iz"> </div>
                <div className="de">
                    <button onClick={() => setShow(!show)}>Leer  {show ? <span>más <i>+</i></span> : <span>menos <i>-</i></span>}</button>
                </div>
            </div>
            <ModuleComp modulos={project.modulos} />
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
        border-top: solid 1px white;
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


export const Head = () => (
    <Seo title='Nevada Projects' description='Full website soon' image='/screenshot.png' />
    )
  