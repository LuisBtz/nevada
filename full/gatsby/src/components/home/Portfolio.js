import { Link } from 'gatsby'
import React, {useState} from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Portfolio = ({data, posts}) => {



    const [isHovered, setIsHovered] = useState(true);
    const [isHoveredInd, setIsHoveredInd] = useState(true);



    return(
        <PortfolioContainer>
            <div className='top'>
                <h2>{data.portafolioTitulo.esString}</h2>
                <div className='de'>
                    <p>{data.portfolioTexto.esText}</p>
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
                        onMouseEnter={() => setIsHovered(!isHovered)}
                    >Por Categoría</button>
                    <ul  className={isHovered ? 'listaCategoria' : 'listaCategoria active'}
                        onMouseLeave={() => setIsHovered(!isHovered)}
                    >
                        {posts.allSanityCategoria.edges.map(({node}) => {
                            return(
                                <li key={node._id}><Link to={`/categoria/${node.slug && node.slug.current}`}>{node.title && node.title}</Link></li>
                            )
                        })}
                    </ul>
                </div>
                <div className='industria'>
                    <button
                        onMouseEnter={() => setIsHoveredInd(!isHoveredInd)}
                    >Por Industría</button>
                    <ul  className={isHoveredInd ? 'listaCategoria' : 'listaCategoria active'}
                        onMouseLeave={() => setIsHoveredInd(!isHoveredInd)}
                    >
                        {posts.allSanityIndustria.edges.map(({node}) => {
                            return(
                                <li key={node._id}><Link to={`/industria/${node.slug && node.slug.current}`}>{node.title && node.title}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className='posts'>
                <div className='nav'></div>
                <div className='articulos'>
                    {posts.allSanityPostPage.edges.map(({node}) => {
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
                top: 0px;
                left: 0;
                background-color: white;
                color: black;
                padding: 5px;
                display: none;
                li {
                    padding: 5px;
                    border-bottom: solid 1px black;
                    display: block;
                    width: 200px;

                }
            }
            button {
                font-size: 0.875rem;
                color: rgba(255, 255, 255, 0.7);
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
        border-bottom: solid 1px white;
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
                        height: 30vw !important;
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
                        height: 20vw;
                    }
                }
                &:nth-child(11n - 9) {
                    grid-column: 1 / 5;
                    grid-row: 2/3;
                    .image {
                        height: 20vw;
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
                        height: 20vw;
                    }
                }
                &:nth-child(11n - 6) {
                    grid-column: 9 / 13;
                    grid-row: 2/3;
                    .image {
                        height: 20vw;
                    }
                }
                &:nth-child(11n - 5) {
                    grid-column: 1 / 5;
                    grid-row: 3/4;
                    .image {
                        height: 20vw;
                    }
                }
                &:nth-child(11n - 4) {
                    grid-column: 5 / 9;
                    grid-row: 3/4;
                    .image {
                        height: 20vw;
                    }
                }
                &:nth-child(11n - 3) {
                    grid-column: 9 / 13;
                    grid-row: 3/4;
                    .image {
                        height: 20vw;
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

export default Portfolio