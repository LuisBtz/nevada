import { Link, graphql } from 'gatsby'
import React, {useState} from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';


export default function SingleIndustriaPage({data: { industria, portfolio, portfolioPage, categorias, industrias } }) {

    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredInd, setIsHoveredInd] = useState(false);


    
    return (
        <Layout>
            <PortfolioContainer>
                <div className='top'>
                    <h2>{industria.title}</h2>
                    <div className='de'>
                        <p>{portfolioPage.textoPortfolio.esString}</p>
                        <Link to='/portfolio'>Nuestro portafolio</Link>
                    </div>
                </div>
                <div className='filter'>
                    <div className='todo'>
                        <div className='dot'></div>
                        <h4><Link to='/portfolio'>Todo</Link></h4>
                    </div>
                    <div className='categoria' >
                        <button
                            onClick={() => {setIsHovered(!isHovered); setIsHoveredInd(false)}}
                        >Por Categoría</button>
                        <button  className={isHovered ? 'listaCategoria active' : 'listaCategoria'}
                        >
                            {categorias.edges.map(({node}) => {
                                return(
                                    <div key={node._id}><Link to={`/categoria/${node.slug && node.slug.current}`}>{node.title && node.title}</Link></div>
                                )
                            })}
                        </button>
                    </div>
                    <div className='industria'>
                        <button
                            onClick={() => {setIsHoveredInd(!isHoveredInd); setIsHovered(false)}}
                        >Por Industria</button>
                        <button  className={isHoveredInd ? 'listaCategoria active' : 'listaCategoria'}
                        >
                            {industrias.edges.map(({node}) => {
                                return(
                                    <div key={node._id}><Link to={`/industria/${node.slug && node.slug.current}`}>{node.title && node.title}</Link></div>
                                )
                            })}
                        </button>
                    </div>
                </div>
                <div className='posts'>
                    <div className='nav'></div>
                    <div className='articulos'>
                        {portfolio.edges.map(({node}) => {
                                const bgGetDataImage = getImage(node.thumbnail.asset)
                                const bgGetDataImageAlt = node.thumbnail.textoAlternativo.esString
                            
                            return(
                                <article>
                                    <div className='image'>
                                        <Link to={`/portfolio/${node.slug && node.slug.current}`}>
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={bgGetDataImage}
                                                alt={bgGetDataImageAlt}
                                            />
                                        </Link>
                                    </div>
                                    <div className='info'>
                                        <h3>{node.title && node.title}</h3>
                                        <p>{node.shortDescription && node.shortDescription.esText}</p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </PortfolioContainer>
        </Layout>
    )
}


const PortfolioContainer = styled.section`
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
        @media (max-width: 680px) {
            flex-direction: column;
            margin-bottom: 100px;
        }
        h2 {
            width: 30%;
            font-size: 0.875rem;
            font-family: var(--bold);
            @media (max-width: 680px) {
                width: 100%;
            }
        }
        .de {
            width: 70%;
            @media (max-width: 680px) {
                width: 100%;
            }
            p {
                font-size: 2.375rem;
                font-family: var(--light);
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
    .filter {
        display: flex;
        margin-top: 50px;
        .todo {
            display: flex;
            align-items: center;
            margin-right: 35px;
            h4 {
                margin-left: 5px;
                font-size: 0.875rem;
                font-family: var(--bold);
            }
        }
        .categoria {
            margin-right: 35px;
        }
        .categoria, .industria {
            position: relative;
            z-index: 1;
            .listaCategoria.active {
                display: block !important;
            }
            .listaCategoria {
                position: absolute;
                top: 30px;
                left: 0;
                background-color: white;
                color: black;
                padding: 5px;
                display: none;
                border-radius: 3px;
                div {
                    padding: 5px;
                    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
                    display: block;
                    width: 200px;
                    text-align: left;
                    &:last-child {
                        border-bottom: none !important;
                    }
                    &:hover {
                        border-bottom: solid 1px rgba(0, 0, 0, 1);
                    }
                    a {
                        font-family: var(--bold);
                    }

                }
            }
            button {
                font-size: 0.875rem;
                color: rgba(255, 255, 255, 0.7);
                font-family: var(--bold);
            }
        }
        .dot {
            display: block;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background-color: var(--red);
            margin-left: 3px;
            filter: blur(2px);
        }
    }
    .posts {
        margin-top: 50px;
        padding-bottom: 150px;
        .articulos {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-gap: 50px 20px;
            @media (max-width: 680px) {
                grid-template-columns: repeat(2, 1fr);
            }
            article {
                @media (max-width: 680px) {
                    grid-column: auto / auto !important;
                    grid-row: auto !important;
                    display: block !important;
                    .image {
                        height: 200px !important;
                    }
                    .info {
                        height: auto !important;
                    }
                }
                h3 {
                    font-family: var(--bold);
                    font-size: 1rem;
                    margin-top: 20px;
                }
                p {
                    font-size: 1rem;
                    font-family: var(--light);
                    margin-bottom: 10px;

                }
                &:nth-child(11n - 10) {
                    grid-column: 1 / 5;
                    .image {
                        height: 250px;
                    }
                }
                &:nth-child(11n - 9) {
                    grid-column: 1 / 5;
                    grid-row: 2/3;
                    .image {
                        height: 250px;
                    }
                }
                &:nth-child(11n - 8) {
                    grid-column: 5 / 9;
                    grid-row: 1/3;
                    display: flex;
                    flex-flow: column;
                    height: 100%;
                    .image {
                        flex: 1 auto;
                    }
                    .info {
                        flex: 0 auto;
                    }
                }
                &:nth-child(11n - 7) {
                    grid-column: 9 / 13;
                    grid-row: 1/2;
                    .image {
                        height: 250px;
                    }
                }
                &:nth-child(11n - 6) {
                    grid-column: 9 / 13;
                    grid-row: 2/3;
                    .image {
                        height: 250px;
                    }
                }
                &:nth-child(11n - 5) {
                    grid-column: 1 / 5;
                    grid-row: 3/4;
                    .image {
                        height: 250px;
                    }
                }
                &:nth-child(11n - 4) {
                    grid-column: 5 / 9;
                    grid-row: 3/4;
                    .image {
                        height: 250px;
                    }
                }
                &:nth-child(11n - 3) {
                    grid-column: 9 / 13;
                    grid-row: 3/4;
                    .image {
                        height: 250px;
                    }
                }
                &:nth-child(11n - 2) {
                    grid-column: 1 / 9;
                    grid-row: 4/6;
                    display: flex;
                    flex-flow: column;
                    height: 100%;
                    .image {
                        flex: 1 auto;
                    }
                    .info {
                        flex: 0 auto;
                    }
                }
                &:nth-child(11n - 1) {
                    grid-column: 9 / 13;
                    grid-row: 4/5;
                    .image {
                    }
                }
                &:nth-child(11n) {
                    grid-column: 9 / 13;
                    grid-row: 5/6;
                    .image {
                    }
                }
                
            }
        }
    }
`




export const query = graphql`
    query($slug: String!){
        industria: sanityIndustria(slug: { current: {eq: $slug} }){
            title
        }
        portfolioPage: sanityPortfolioPage {
            textoPortfolio {
                esString
            }
        }
        portfolio: allSanityPostPage(filter: {industrias: {elemMatch: {slug: {current: {eq: $slug} }}}}) {
            edges {
                node {
                    title
                    slug {
                        current
                    }
                    shortDescription {
                        esText
                    }
                    thumbnail {
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
            }
        }

        categorias: allSanityCategoria {
            edges {
                node {
                    _id
                    title
                    slug {
                        current
                    }
                    
                    
                }
            }
        }
        industrias: allSanityIndustria {
            edges {
                node {
                    _id
                    title
                    slug {
                        current
                    }
                }
            }
        }
    }
`

export const Head = () => (
    <Seo title='Nevada Projects' description='Full website soon' image='/screenshot.png' />
    )
  