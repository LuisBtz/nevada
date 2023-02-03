import React from "react";
import styled from "styled-components";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"

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
        autoplaySpeed: 4000,
        pauseOnHover: false,
        speed: 500,
      };




    return(
        <ContainerBottom>
            <div className="next">
                <p>Página Web Próximamente</p>
            </div>
            <SliderContainer  {...settings}>
                
                    <Slide
                        className='slide'
                    >
                        <img src="/images/01.jpg" alt="Nevada" />
                        <div className="titulo">
                            <h2>nevada <span>es una señal.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/02.jpg" alt="Nevada" />
                        <div className="titulo">
                            <h2>nevada <span>encuentra claridad.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/03.jpg" alt="Nevada" />
                        <div className="titulo">
                            <h2>nevada <span>busca lo esencial.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/04.jpg" alt="Nevada" />
                        <div className="titulo">
                            <h2>nevada <span>es simple y directo.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/05.jpg" alt="Nevada" />
                        <div className="titulo">
                            <h2>nevada <span>es colaboración creativa.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                         <img src="/images/06.jpg" alt="Nevada" />
                        <div className="titulo">
                            <h2>nevada <span>desarrolla soluciones.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/07.jpg" alt="Nevada" />
                        <div className="titulo">
                            <h2>nevada <span>encuentra claridad.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/09.jpg" alt="Nevada" />
                        <div className="titulo">
                            <h2>nevada <span>busca lo esencial.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/10.jpg" alt="Nevada" />
                        <div className="titulo">
                            <h2>nevada <span>es simple y directo.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/11.jpg" alt="Nevada" />
                        <div className="titulo">
                            <h2>nevada <span>es colaboración creativa.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/12.jpg" alt="Nevada" />
                        <div className="titulo">
                            <h2>nevada <span>desarrolla soluciones.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/13.jpg" alt="Nevada" />
                        <div className="titulo">
                            <h2>nevada <span>es una señal.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/14.jpg" alt="Nevada" />
                        <div className="titulo">
                        <h2>nevada <span>encuentra claridad.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/15.jpg" alt="Nevada" />
                        <div className="titulo">
                            <h2>nevada <span>busca lo esencial.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/16.jpg" alt="Nevada" />
                        <div className="titulo">
                            <h2>nevada <span>es simple y directo.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/17.jpg" alt="Nevada" />
                        <div className="titulo">
                        <h2>nevada <span>es colaboración creativa.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/18.jpg" alt="Nevada" />
                        <div className="titulo">
                            <h2>nevada <span>desarrolla soluciones.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <img src="/images/19.jpg" alt="Nevada" />
                        <div className="titulo">
                        <h2>nevada <span>es una señal.</span></h2>
                        </div>
                    </Slide>
            </SliderContainer>
        </ContainerBottom>
    )
}

const ContainerBottom = styled.section`
    height: 100vh;
    position: relative;
    z-index: -1;
    scroll-snap-align: start;
    .next {
        position: absolute;
        bottom: 95px;
        right: 50px;
        z-index: 1;
        color: white;
        font-size: 1.5rem;
        text-align: center;
        mix-blend-mode: difference;
        line-height: 0;
        @media (max-width: 750px) {
            bottom: 0;
            right:auto;
            left: 50%;
            transform: translateX(-50%);
            top: 50px;
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