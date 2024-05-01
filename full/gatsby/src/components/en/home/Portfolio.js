import { Link } from 'gatsby'
import React, {useState} from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Portfolio = ({data}) => {



    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredInd, setIsHoveredInd] = useState(false);



    return(
        <PortfolioContainer>
            <div className='top'>
                <h2>{data.sanityHomePage.portafolioTitulo.enString}</h2>
                <div className='de'>
                    <p>{data.sanityHomePage.portfolioTexto.enText}</p>
                    <Link to='/en/portfolio'>Our Portfolio</Link>
                </div>
            </div>
            <div className='filter'>
                <div className='todo'>
                    <div className='dot'></div>
                    <h4><Link to='/en/portfolio'>All</Link></h4>
                </div>
                <div className='categoria' >
                    <button
                        onClick={() => {setIsHovered(!isHovered); setIsHoveredInd(false)}}
                    >By Category</button>
                    <ul  className={isHovered ? 'listaCategoria active' : 'listaCategoria'}
                    >
                        {data.allSanityCategoria.edges.map(({node}) => {
                            return(
                                <li key={node._id}><Link to={`/en/categoria/${node.slug && node.slug.current}`}>{node.title && node.titleEn}</Link></li>
                            )
                        })}
                    </ul>
                </div>
                <div className='industria'>
                    <button
                        onClick={() => {setIsHoveredInd(!isHoveredInd); setIsHovered(false)}}
                    >By Industry</button>
                    <ul  className={isHoveredInd ? 'listaCategoria active' : 'listaCategoria'}
                    >
                        {data.allSanityIndustria.edges.map(({node}) => {
                            return(
                                <li key={node._id}><Link to={`/industria/${node.slug && node.slug.current}`}>{node.title && node.titleEn}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className='posts'>
                <div className='nav'></div>
                <div className='articulos'>
                    {data.allSanityPostPage.edges.map(({node}) => {
                            const bgGetDataImage = getImage(node.thumbnail.asset)
                            const bgGetDataImageAlt = node.thumbnail.textoAlternativo.enString
                        
                        return(
                            <article>
                                <div className='image'>
                                    <Link to={`/en/portfolio/${node.slug && node.slug.current}`}>
                                        <GatsbyImage
                                            style={{ height: "100%", width: "100%" }}
                                            image={bgGetDataImage}
                                            alt={bgGetDataImageAlt}
                                        />
                                    </Link>
                                </div>
                                <div className='info'>
                                    <h3>{node.title && node.title}</h3>
                                    <p>{node.shortDescription && node.shortDescription.enText}</p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </PortfolioContainer>
    )
}

const PortfolioContainer = styled.section`
    padding: 100px 50px;
    max-width: 1400px;
    margin: 0 auto;
    @media (max-width: 680px) {
        padding: 50px 20px;
    }
    .top {
        display: flex;
        width: 100%;
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
                a {
                    font-family: var(--bold);
                }
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
                li {
                    text-align: left;
                    padding: 5px;
                    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
                    display: block;
                    width: 200px;
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
                &:hover {
                    color: rgba(255, 255, 255, 1);
                }
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
        padding-bottom: 100px;
        border-bottom: solid 1px rgba(255, 255, 255, 0.3);
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
                    grid-row: span 1;
                    .image {
                        height: 250px;
                    }
                }
                &:nth-child(11n - 9) {
                    grid-column: 5 / 9;
                    grid-row: span 2;
                    display: flex;
                    flex-flow: column;
                    height: 100%;
                    .image {
                        flex: 1 auto;
                    }
                    .info {
                        flex: 0 auto;
                    }
                    .image {
                        height: 250px;
                    }
                }
                &:nth-child(11n - 8) {
                    grid-column: 9 / 13;
                    grid-row: span 1;
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
                    grid-column: 1 / 5;
                    grid-row: span 1;
                    .image {
                        height: 250px;
                    }
                }
                &:nth-child(11n - 6) {
                    grid-column: 9 / 13;
                    grid-row: span 1;
                    .image {
                        height: 250px;
                    }
                }
                &:nth-child(11n - 5) {
                    grid-column: 1 / 5;
                    grid-row: span 1;
                    .image {
                        height: 250px;
                    }
                }
                &:nth-child(11n - 4) {
                    grid-column: 5 / 9;
                    grid-row: span 1;
                    .image {
                        height: 250px;
                    }
                }
                &:nth-child(11n - 3) {
                    grid-column: 9 / 13;
                    grid-row: span 1;
                    .image {
                        height: 250px;
                    }
                }
                &:nth-child(11n - 2) {
                    grid-column: 1 / 9;
                    grid-row: span 2;
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
                    grid-row: span 1;
                    .image {
                    }
                }
                &:nth-child(11n) {
                    grid-column: 9 / 13;
                    grid-row: span 1;
                    .image {
                    }
                }
                
            }
        }
    }
`

export default Portfolio