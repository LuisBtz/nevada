import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "slick-carousel/slick/slick.css"
import Slider from "react-slick"


const RelatedContent = ({contRel, portfolio}) => {



    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
          <button className={className} onClick={onClick} onKeyDown={onClick}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="-1" x2="10" y2="-1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 8 0.928711)" stroke="white" stroke-width="2"/>
                <line y1="-1" x2="9" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 14.364 8.70703)" stroke="white" stroke-width="2"/>
            </svg>
            <div className="fondo"></div>
          </button>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
          <button className={className} onClick={onClick} onKeyDown={onClick}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8.70711" y1="1.63582" x2="1.63604" y2="8.70688" stroke="white" stroke-width="2"/>
                <line x1="2.34309" y1="7.99992" x2="8.70705" y2="14.3639" stroke="white" stroke-width="2"/>
            </svg>
            <div className="fondo"></div>
          </button>
        );
      }


    const settings = {
        // centerPadding: "20",
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        draggable: true,
        swipeToSlide: true,
        touchMove: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
        ]

      };



    return(
        <RelatedContentContainer>
            <div className='top'>
                <div className='iz'>
                    <h2>Similar Project</h2>
                </div>
                <div className='de'>
                    <h2>{portfolio.textoOtrosProyectos.esString}</h2>
                    <h4><Link to='/en/portfolio'>Our Portfolio</Link></h4>
                </div>
            </div>
            <Slider {...settings}  className="projectList">
                {contRel && contRel.map(({ _id, title, shortDescription, slug, thumbnail }) => {
                    const bgGetDataImage = getImage(thumbnail.asset)
                    const bgGetDataImageAlt = thumbnail.textoAlternativo.enString
                    
                    return (
                        <Link key={_id}  to={`/en/portfolio/${slug.current}`}>
                            <div className="image">
                                <GatsbyImage
                                    style={{ height: "100%", width: "100%" }}
                                    image={bgGetDataImage}
                                    alt={bgGetDataImageAlt}
                                />
                            </div>
                            <div className="info">
                                <h3>{title}</h3>
                                <p>{shortDescription.enText}</p>
                            </div>
                        </Link>
                    )
                })}
            </Slider>
        </RelatedContentContainer>
    )
}

const RelatedContentContainer = styled.section`
    margin: 0 auto;
    padding: 140px 0px 100px;
    max-width: 1400px;
    margin-bottom: 0px;
    @media (max-width: 680px) {
        padding: 50px 20px;
    }
    .top {
        display: flex;
        width: 100%;
        border-top: solid 1px white;
        padding-top: 50px;
        margin-bottom: 50px;
        @media (max-width: 750px) {
            flex-direction: column;
            margin-bottom: 50px !important;
        }
        .iz {
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h2 {
                font-size: 0.875rem;
                font-family: var(--bold);
            }
            .image {
                width: 200px;
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
            @media (max-width: 750px) {
                width: 100%;
                margin-bottom: 50px;
            }
            h2 {
                font-size: 2.375rem;
                font-family: var(--light);
                margin-bottom: 20px;
                line-height: 0.9;
                strong, i, em, b {
                    font-family: var(--light);
                    font-weight: normal;
                    color: var(--red);
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
    .projectList {
        position: relative;
        .slick-arrow {
            position: absolute;
            top: -40px;
            width: 24px;
            height: 24px;
            .fondo {
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                filter: blur(3px);
                background-color: var(--red);
            }
            svg {
                position: relative;
                z-index: 1;
                top: 1px;
            }
        }
        .slick-prev {
            left: 10px;
            &:hover {
                .fondo {
                    display: block !important;
                }
                svg {
                    filter: brightness(0%);
                    left: 2px;
                }
            }
        }
        .slick-next {
            left: 50px;
            &:hover {
                .fondo {
                    display: block !important;
                }
                svg {
                    filter: brightness(0%);
                    right: 2px;
                }
            }
        }
    }
a {
    display: block;
    padding-right: 10px;
    padding-left: 10px;
    h3 {
        font-family: var(--bold);
        margin-top: 10px;
        margin-bottom: 10px;
    }
    p {
        font-family: var(--light);
    }
    .image {
        height: 250px;
    }
}

`

export default RelatedContent