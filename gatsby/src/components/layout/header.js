import { Link } from "gatsby";
import React, { useState } from "react"
import styled from "styled-components";

const Header = ({scroll}) => {

    
    

    const [about, setAbout] = useState(false);


    return(
        <HeaderContainer>
          <div className={about ? 'aboutPage show' : 'aboutPage'}>
            <div className="texto">
              <p>Somos un estudio de Diseño & Arte especializado en crear y dar forma a marcas y compañías que comparten una visión culturalmente relevante.</p>
              <p>Próximamente</p>
            </div>
            <div className="abajo">
              
            </div>
          </div>
            <ul>
                <li className="about">
                    <Link to='/' onMouseEnter={() => setAbout(true)} onMouseLeave={() => setAbout(false)}  >Nosotros</Link>
                </li>
                <li>
                    <a href="mailto:hello@nevadaprojects.com">Contacto</a>
                </li>
                <li>
                    <a rel="noreferrer" target='_blank' href="https://instagram.com/nevada.projects">Redes</a>
                </li>
            </ul>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.nav`
position: relative;
    .show {
      opacity: 1 !important;
      z-index: 1;
    }
    .aboutPage {
      opacity: 0;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: #FF1C00;
      transition: opacity 350ms ease-in-out;
      .texto {
        max-width: 60%;
        text-align: center;
        margin: 150px auto 0;
        @media (max-width: 750px) {
            max-width: 500px;
            padding: 20px;
          }
        p {
          font-size: 2vw;
          margin-bottom: 20px;
          letter-spacing: -1px;
          @media (max-width: 750px) {
            font-size: 1rem;
          }
        }
      }
    }
    ul.white {
      li {
        span, button, a {
          color: white !important;
        }
      }
    }
    ul {
        display: flex;
        font-family: var(--light);
        position: fixed;
        z-index: 1;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 320px;
        justify-content: space-between;
        @media screen and (max-width: 750px) {
          top: 20px;
        }
        li {
            span, button, a {
                font-size: 1.2rem;
                color: black;
                letter-spacing: -1px;
                transition: color 2s ease-in-out;
                &:hover {
                    font-family: var(--bold);
                }
            }
        }
    }


`

export default Header