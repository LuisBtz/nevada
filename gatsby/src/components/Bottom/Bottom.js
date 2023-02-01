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
                <p>Full Website Coming Soon</p>
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
                            src="02.jpg" 
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
    }
}
`



export default Bottom