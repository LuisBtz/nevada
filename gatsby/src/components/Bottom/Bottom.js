import React from "react";
import styled from "styled-components";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import Typed from "react-typed"

const Bottom = () => {


    const settings = {
        centerPadding: "0",
        dots: false,
        fade: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        speed: 500,
      };




    return(
        <ContainerBottom>
            <div className="next">
                <p>Página Web Próximamente</p>
            </div>
            <div className="overlay"></div>
            <Typed
                className="text"
                strings={[
                        "es una señal.",
                        "encuentra claridad.",
                        "busca lo esencial.",
                        "es simple y directo.",
                        "es colaboración creativa.",
                        "desarrolla soluciones.",
                    ]}
                    typeSpeed={50}
                    backSpeed={50}
                    backDelay={5000}
                    loop
            />
            <SliderContainer  {...settings}>
                
                    <Slide
                        className='slide'
                    >
                        <img src="/images/01.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/02.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/03.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/04.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/05.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                         <img src="/images/06.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/07.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/09.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/10.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/11.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/12.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/13.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/14.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/15.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/16.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/17.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/18.jpg" alt="Nevada" />
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/19.jpg" alt="Nevada" />
                    </Slide>
            </SliderContainer>
        </ContainerBottom>
    )
}

const ContainerBottom = styled.section`
    height: 100vh;
    position: relative;
    z-index: -2;
    scroll-snap-align: start;
    overflow-y: hidden;
    .overlay {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.35);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
    }
    .text {
        position: absolute;
        bottom: 62px;
        left: 175px;
        color: white;
        z-index: 1;
        @media (max-width: 990px) {
            left: 140px;
            bottom: 64px;
        }
        @media (max-width: 550px) {
            left: 110px;
        }
        @media (max-width: 400px) {
                bottom: 66px;
            }
        span {
            font-size: 47px;
            font-family: var(--light);
            letter-spacing: -1px;
            @media (max-width: 990px) {
                font-size: 37px;
            }
            @media (max-width: 550px) {
                font-size: 28px;
            }
            @media (max-width: 400px) {
                font-size: 6vw;
            }

        }
    }
    .next {
        position: absolute;
        bottom: 65px;
        padding-bottom: 13px;
        right: 50px;
        z-index: 2;
        color: white;
        font-size: 20px;
        text-align: center;
        line-height: 0;
        letter-spacing: -1px;
        @media (max-width: 750px) {
            bottom: auto;
            right:auto;
            left: 50%;
            transform: translateX(-50%);
            top: 80px;
            line-height: normal;
        }
    }
`


const SliderContainer = styled(Slider)`
position: relative;
top: 0;
height: 100%;
margin-bottom: -50px;
`

const Slide = styled.div`
position: relative;
height: 100vh;
img {
    height: 100%;
    object-fit: cover;
}
.titulo {
    position: absolute;
    bottom: 100px;
    left: 50px;
    h2 {
        font-family: var(--bold);
        color: white;
        font-size: 5vw;
        letter-spacing: -2px;
        mix-blend-mode: difference;
        line-height: 0;
        span {
            font-family: var(--light);
        }
        @media (max-width: 750px) {
            font-size: 1.5rem;
        }
    }
}
`



export default Bottom