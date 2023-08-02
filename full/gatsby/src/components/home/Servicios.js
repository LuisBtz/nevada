import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Servicios = ({data}) => {
    return(
        <>
            <ServiciosContainer>
                <div className='top'>
                    <h2>{data.serviciosTitle.esString}</h2>
                    <div className='de'>
                        <p className="head">{data.serviciosText1.esText}</p>
                        <p>{data.serviciosText2.esText}</p>
                        <Link to='/about'>Sobre Nosotros</Link>
                    </div>
                </div>
                
            </ServiciosContainer>
            <MarqueeSection>
                <ul className="marquee__content">
                    {data.serviciosList.map(({_key, esString}) => {
                        return(
                            <li className="marquee__content--item" key={_key}>{esString}</li>
                        )
                    })}
                    {data.serviciosList.map(({_key, esString}) => {
                        return(
                            <li className="marquee__content--item" key={_key * 2}>{esString}</li>
                        )
                    })}
                    {data.serviciosList.map(({_key, esString}) => {
                        return(
                            <li className="marquee__content--item" key={_key * 3}>{esString}</li>
                        )
                    })}
                </ul>
            </MarqueeSection>
        </>
    )
}

const MarqueeSection = styled.section`
    background-color: var(--black);
    position: relative;
    width: 100vw;
    height: 130px;
    overflow: hidden;
    .marquee__content {
        display: block;
        width: 5000px;
        position: absolute;
        top: 30px;
        animation: marquee-x 25s linear 0s infinite normal none running ;
        .marquee__content--item {
            display: inline;
            padding: 10px;
            border: solid 1px white;
            border-radius: 5px;
            text-align: center;
            margin-right: 20px;
          
        }
    }

@keyframes marquee-x {
  0% { left: -100%; }
  100% { left: 0; }
}

`

const ServiciosContainer = styled.section`
    padding: 0 50px 50px;
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
            p.head {
                font-size: 2.375rem;
                font-family: var(--light);
                margin-bottom: 50px;
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

export default Servicios