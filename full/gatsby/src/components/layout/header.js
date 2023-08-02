import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import Typed from "react-typed"


const Header = ({indexTrue}) => {

  const [show, setShow] = useState(true);

  const [showMenuMov, setShowMenuMov] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };



  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);






  var pathLink = typeof window !== 'undefined' ? window.location.pathname : ''
  const languages = ['es', 'en']


  const data = useStaticQuery(graphql`
    query {
      sanitySettingsPage {
        tageline {
          esString
        }
        frasesNevada {
          _key
          esString
        }
      }
    }
    `);

  const [navOpen,setNavOpen]=useState(false)

  useEffect(()=>{
        setTimeout(() => {
          setNavOpen(!navOpen)
        }, 1500);      
      },[])



      console.log(indexTrue)
    return(
        <HeaderContainer>
          <div style={indexTrue === true ? {display: 'block'} : {display: 'none'} } className={navOpen ? " intro hide" : " intro"}>
            <Link  to='/'>
              <img className="logo" src="/logo.svg" alt="Nevada Logo" />
            </Link>
          </div>
          <div className="mov">
            <Link  to='/'>
              <img className="logo" src="/logo.svg" alt="Nevada Logo" />
            </Link>
            <button className={ showMenuMov ? 'ham click' : 'ham'} onClick={() => setShowMenuMov(!showMenuMov)}>
              <div className="line"></div>
              <div className="line"></div>
            </button>
          </div>
          <div className={showMenuMov ? 'menuMobShow' : ''}>
          <nav className={indexTrue === true ? `red ${show && 'show'}` : `black ${show && 'show'}`}>
            <div className="top">
              {indexTrue === true ? 
                <h2>{data.sanitySettingsPage.tageline.esString}</h2>
                :
                <Link to='/'>
                  <img className="logoNav" src="/logo.svg" alt="Nevada Logo" />
                </Link>
              }
              
              <div className="de">
                <ul className="links">
                  <li>
                    <Link to='/portfolio'>Portafolio</Link>
                  </li>
                  <li>
                    <Link to='/about'>Nosotros</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contacto</Link>
                  </li>
                </ul>
                <ul className="lang">
                  {languages.map((lng,) => (
                    <li key={lng}>
                      <Link to={lng === 'es' ? pathLink : '/en' + pathLink}  language={lng}>
                        {lng === 'es' ? 
                        <div>
                          <span>
                            Es</span><span className='dot'>
                          </span>
                        </div>
                          : 
                          <div>
                            <span>En</span><span className='dot'></span>
                          </div>
                        }
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
            {
              indexTrue === true ? 
              <div className="bottom">
                <img src="/logo.svg" alt='logo nevada' />
                <Typed
                  className="text"
                  strings={
                    data.sanitySettingsPage.frasesNevada.map(({ esString, _key }) => {
                      return (
                        `${esString}`
                      )
                    })  
                  }
                      typeSpeed={50}
                      backSpeed={50}
                      backDelay={5000}
                      loop
                />
              </div>
              :
              ''
            }
            
          </nav>
          </div>
          
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
.hide {
  transform: translateY(-100%);
}
.intro {
  display: block;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--red);
  transition: all 550ms ease-in-out;
  z-index: 10;
  .logo {
    position: absolute;
    bottom: 0;
    padding: 50px;
    @media (max-width: 680px) {
      bottom: 80px;
    }
  }
}
.mov {
  display: none;
  padding: 20px;
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  z-index: 6;
  background-color: var(--red);
  .ham.click {
    .line {
      position: absolute;
      &:nth-child(1) {
        transform: rotate(45deg);
        right: 0px;
      }
      &:nth-child(2) {
        transform: rotate(-45deg);
        right: 0px;
      }
    }
  }
  .ham {
    position: absolute;
    height: 22px;
    width: 30px;
    top: 35px;
    right: 30px;
    z-index: 1;
    .line {
      width: 30px;
      height: 1px;
      background-color: white;
      margin-bottom: 10px;
      transition: all 250ms ease-in-out;
    }
  }
  @media (max-width: 680px) {
    display: block;
  }
  img {
    filter: brightness(0) invert(1);
    width: 113px;
  }
}
nav.show {
  top: 0;
}
nav.false {
  top: -350px;
  @media (max-width: 680px) {
    top: 0;
  }
}
.black {
  background-color: black;
}
.red {
  background-color: var(--red);
  color: black;
  height: 320px;
  .lang {
    a[aria-current="page"] {
        .dot {
          background-color: var(--black) !important;
        }
      }
  }
}
.menuMobShow {
  nav {
    @media (max-width: 680px) {
      left: 0;
    }
  }
}
nav {
  background-color: var(--black);
  padding: 50px;
  position: fixed;
  left: 0;
  width: 100%;
  transition: top 350ms ease-in-out;
  z-index: 5;
  @media (max-width: 680px) {
    height: 100vh !important;
    background-color: rgba(255, 28, 0) !important;
    left: 100%;
    transition: left 350ms ease-in-out;
  }
  .top {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    h2 {
      font-size: 0.875rem;
    }
    .logoNav {
      width: 113px;
      filter: brightness(0) invert(1);
    }
    .de {
      display: flex;
    }
    ul.links {
      display: flex;
      @media (max-width: 680px) {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translateX(-50%);
        flex-direction: column;
        text-align: center;
      }
      li {
        margin-left: 50px;
        @media (max-width: 680px) {
          font-size: 1.5rem;
          margin-bottom: 30px;
        }
      }
    }
    .lang {
      margin-left: 50px;
      display: flex;
      @media (max-width: 680px) {
        position: absolute;
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
        margin-left: 0;
        span {
          font-size: 1rem;
        }
      }
      a[aria-current="page"] {
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
      li {
        margin-left: 10px;
        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
      }
      span {
        text-transform: uppercase;
      }
    }
  }
  .bottom {
    max-width: 1400px;
    margin: 150px auto 0;
    @media (max-width: 680px) {
      text-align: center;
      span {
        font-size: 1.2rem !important;
      }
      img {
        width: 80px !important;
      }
    }
    img {
      width: 113px;
      margin-right: 10px;
    }
    span {
      font-size: 2.2rem;
      font-family: var(--light);
    }
  }
}

`

export default Header