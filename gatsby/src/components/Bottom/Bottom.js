import React from "react";
import styled from "styled-components";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { StaticImage } from "gatsby-plugin-image"

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
                        <StaticImage 
                            src="01.jpg" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                            <h2>nevada <span>es una señal.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="02.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                            <h2>nevada <span>encuentra claridad.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="03.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                            <h2>nevada <span>busca lo esencial.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="04.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                            <h2>nevada <span>es simple y directo.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="05.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                            <h2>nevada <span>es colaboración creativa.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="06.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                            <h2>nevada <span>desarrolla soluciones.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="07.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                        <h2>nevada <span>es una señal.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="08.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                            <h2>nevada <span>encuentra claridad.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="09.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                            <h2>nevada <span>busca lo esencial.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="10.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                            <h2>nevada <span>es simple y directo.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="11.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                            <h2>nevada <span>es colaboración creativa.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="12.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                            <h2>nevada <span>desarrolla soluciones.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="13.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                            <h2>nevada <span>es una señal.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="14.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                        <h2>nevada <span>encuentra claridad.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="15.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                            <h2>nevada <span>busca lo esencial.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="16.jpg" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                            <h2>nevada <span>es simple y directo.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="17.jpg" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                        <h2>nevada <span>es colaboración creativa.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="18.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                        <div className="titulo">
                            <h2>nevada <span>desarrolla soluciones.</span></h2>
                        </div>
                    </Slide>
                    <Slide
                        className='slide'
                    >
                        <StaticImage 
                            src="19.png" 
                            alt="Nevada" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
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
    .next {
        position: absolute;
        bottom: 50px;
        right: 50px;
        z-index: 1;
        color: white;
        font-size: 1.5rem;
        text-align: center;
        @media (max-width: 750px) {
            bottom: 0;
            right:auto;
            left: 50%;
            transform: translateX(-50%);
            top: 50px;
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
.titulo {
    position: absolute;
    bottom: 50px;
    left: 50px;
    h2 {
        font-family: var(--bold);
        color: white;
        font-size: 5vw;
        letter-spacing: -2px;
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