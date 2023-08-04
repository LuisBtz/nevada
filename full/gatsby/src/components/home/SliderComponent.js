import React, { useState } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "slick-carousel/slick/slick.css"
import Slider from "react-slick"



function n(num, len = 2) {
    return `${num}`.padStart(len, '0');
  }

const SliderComponent = ({data}) => {

    const settings = {
        centerPadding: "0",
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        draggable: true,
        swipeToSlide: true,
        touchMove: true,
        speed: 0,
        arrows: false,
        beforeChange: function (currentSlide, nextSlide) {
            console.log('before change', currentSlide, nextSlide);
            setActiveSlideIndex(nextSlide);
          },
      };


      const [activeSlideIndex, setActiveSlideIndex] = useState(0);

      

    return(
        <SliderContainer>
            <div className="slider">
                <div className='top'>
                    <h2>{data.sanityHomePage.oficinasTitulo.esString}</h2>
                    <div className='de'>
                        <p>{data.sanityHomePage.oficinasTexto.esString}</p>
                    </div>
                </div>
                <Slider {...settings}>
                    { data.sanityHomePage.oficinasSlider.map(({ _key, textoAlternativo, asset }) => {
                        const bgGetDataImage = getImage(asset && asset)
                        const bgGetDataImageAlt = textoAlternativo && textoAlternativo.esString
                    return (
                        <Slide key={_key}>
                            <div className="image">
                                <GatsbyImage
                                    style={{ height: "100%", width: "100%" }}
                                    image={bgGetDataImage}
                                    alt={bgGetDataImageAlt}
                                />
                            </div>
                            <div className="info">
                                <p className="sliderCount">{n(activeSlideIndex + 1)} de {n(data.sanityHomePage.oficinasSlider.length)}</p>
                                <p className="tecto">{bgGetDataImageAlt}</p>
                                <a target="_blank" rel="noreferrer" href={data.sanitySettingsPage.linkMapa} >Ubícanos<span><img src="/arrow.svg" alt='flecha a nuestra dirección' /></span></a>
                            </div>
                        </Slide>
                    );
                    })}
                </Slider>
            </div>
        </SliderContainer>
    )
}

const Slide = styled.div`
    .info {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        @media (max-width: 680px) {
            flex-direction: column;
            p {
                padding-bottom: 5px;
            }
        }
        a {
            display: flex;
            align-items: center;
            img {
                width: 13px;
                margin-left: 5px;
            }
        }
    }
`


const SliderContainer = styled.section`
    padding: 0 50px 50px;
    max-width: 1400px;
    margin: 0 auto;
    @media (max-width: 680px) {
        padding: 0 20px;
    }
    .slider {
        border-top: solid 1px rgba(255, 255, 255, 0.3);
        .top {
            display: flex;
            width: 100%;
            margin-top: 50px;
            margin-bottom: 50px;
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
    }
`

export default SliderComponent