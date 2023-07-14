import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Portfolio = ({data, posts}) => {

    console.log(posts)
    return(
        <PortfolioContainer>
            <div className='top'>
                <h2>{data.portafolioTitulo.esString}</h2>
                <div className='de'>
                    <p>{data.portfolioTexto.esText}</p>
                    <Link to='/portfolio'>Nuestro portafolio</Link>
                </div>
            </div>
            <div className='posts'>
                <div className='nav'></div>
                <div className='articulos'>
                    {posts.edges.map(({node}) => {
                        return(
                            <p>{node.title}</p>
                        )
                    })}
                </div>
            </div>
        </PortfolioContainer>
    )
}

const PortfolioContainer = styled.section`
    padding: 100px 50px;
    .top {
        display: flex;
        width: 100%;
        h2 {
            width: 30%;
            font-size: 0.875rem;
            font-family: var(--bold);
        }
        .de {
            width: 70%;
            p {
                font-size: 2.375rem;
                font-family: var(--light);
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

export default Portfolio