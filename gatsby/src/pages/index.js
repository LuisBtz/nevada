import React, {useEffect, useState, useRef} from "react";
import styled from 'styled-components'
import CanvasDraw from "@win11react/react-canvas-draw";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import Typed from "react-typed"
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import useScrollSnap from 'react-use-scroll-snap';


const IndexPage = () => {

    const [scroll, setScroll] = useState(false);



    useEffect(() => {

        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 20);
          console.log('scroll')
        });
      }, [scroll]); 
  


      const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 10, delay: 0 });



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



  return (
    <Layout>
        <Contenedor id='main' ref={scrollRef}>
            
            <section className="top" id='top'>
                <div className="logo">
                    <svg className={scroll ? 'shrink' : ''} id='img' width="1800" height="450" viewBox="0 0 1800 450" xmlns="http://www.w3.org/2000/svg">
                        <path d="M310.704 287.337C310.704 189.244 371.456 122.777 461.331 122.777C558.791 122.777 611.958 203.16 604.372 307.585H380.328V308.228C380.328 360.135 413.243 391.761 463.227 391.761C483.478 391.761 521.472 384.787 536.001 343.036H599.293C589.81 405.068 539.151 450 463.227 450C370.813 450 310.704 389.254 310.704 287.369V287.337ZM533.494 248.736C531.598 208.849 501.832 181.016 459.434 181.016C417.036 181.016 384.764 208.849 382.224 248.736H533.494ZM590.582 126.602H662.745L747.573 349.368L831.115 126.602H904.532L774.156 443.026H720.347L590.582 126.602ZM891.546 353.803C891.546 326.58 899.775 301.896 919.383 286.083C940.276 269.627 970.653 260.756 1006.72 257.607C1047.22 253.814 1092.16 251.275 1092.16 218.363C1092.16 198.114 1072.55 180.405 1040.24 180.405C995.95 180.405 976.953 208.239 973.771 231.669L902.893 232.312C908.583 169.027 959.852 119.017 1037.06 119.017C1117.45 119.017 1162.39 166.488 1162.39 229.13V443.026H1092.12V405.678C1069.33 434.798 1031.98 449.357 998.457 449.357C942.141 449.357 891.482 414.549 891.482 353.803H891.546ZM1092.19 322.145L1092.83 293.668C1078.91 301.254 1050.43 305.689 1019.42 308.228C984.603 311.378 964.352 324.684 964.352 349.368C964.352 371.513 980.81 389.222 1009.93 391.151C1044.74 393.047 1090.94 372.156 1092.22 322.177L1092.19 322.145ZM1435.23 0V165.46C1423.66 144.954 1384.76 123.42 1332.69 123.42C1262.42 123.42 1189.65 179.119 1189.65 286.694C1189.65 396.165 1268.15 449.968 1334.59 449.968C1390.23 449.968 1424.33 424.352 1435.23 406.771V442.993H1499.16V0H1435.23ZM1347.25 387.326C1296.62 387.326 1261.17 343.647 1261.17 282.258C1261.17 225.305 1296.62 184.808 1347.25 184.808C1398.52 184.808 1434.59 227.844 1434.59 288.59C1434.59 346.186 1398.52 387.326 1347.25 387.326ZM1529.15 353.771C1529.15 326.548 1537.38 301.864 1556.99 286.051C1577.88 269.595 1608.26 260.724 1644.33 257.574C1684.83 253.782 1729.77 251.243 1729.77 218.331C1729.77 198.082 1710.16 180.373 1677.85 180.373C1633.56 180.373 1614.56 208.207 1611.38 231.637L1540.5 232.28C1546.19 168.995 1597.46 118.984 1674.67 118.984C1755.06 118.984 1800 166.456 1800 229.098V442.993H1729.73V405.646C1706.94 434.765 1669.59 449.325 1636.07 449.325C1579.75 449.325 1529.09 414.517 1529.09 353.771H1529.15ZM1729.8 322.113L1730.44 293.636C1716.52 301.221 1688.04 305.657 1657.02 308.196C1622.21 311.346 1601.96 324.652 1601.96 349.336C1601.96 371.481 1618.42 389.19 1647.54 391.118C1682.35 393.015 1728.54 372.123 1729.83 322.145L1729.8 322.113ZM157.441 118.342C112.247 118.342 81.7422 139.94 67.1167 162.181V126.57H0V442.993H67.0845V271.298C67.0845 209.781 99.0357 178.444 140.823 178.444C176.278 178.444 208.872 200.589 208.872 256.289V442.993H281.646V248.704C281.646 152.411 210.383 118.342 157.409 118.342H157.441Z"/>
                    </svg>
                </div>
                <CanvasDraw 
                    canvasHeight="100vh"
                    canvasWidth='100vw'
                    hideGrid={true}
                    lazyRadius= {0}
                    brushRadius= {35}
                    immediateLoading= {true}
                    brushColor="#FF1C00"
                    catenaryColor="rgba(0,0,0,0)"
                />
                <a className="link" href='#bottom'>⌄</a>
            </section>

            <section className="bottom" id='bottom'>
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
                        typeSpeed={20}
                        backSpeed={20}
                        backDelay={4000}
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
            </section>
        </Contenedor>
        
    </Layout>
  )
}

const Contenedor = styled.div`
    height:100vh;
    position: relative;
    section.top {
        height:100vh;
        cursor: url('/cursor.png') 63 63, auto;
        position: relative;
        @media (max-width: 750px) {
            height: 75vh;
            overflow: hidden;
        }
        .logo {
            align-self: auto;
            justify-self: center;
            line-height: 0;
            width: auto;
            
            #img {
                height: auto;
                width: 100%;
                position: fixed;
                bottom: 50px;
                padding: 20px;
                transition: all 1s ease-in-out;
                
                path {
                fill: black;
                transition: all 1s ease-in-out;
                }
                @media (max-width: 750px) {
                    bottom: 30vh;
                }
            }
        }
        .logo #img.shrink {
            height: auto;
            width: 180px;
            bottom: 50px;
            left: 0;
            transition: all 1s ease-in-out;
            path {
            fill: white !important;
            }
            @media (max-width: 990px) {
                width: 150px;
            }
            @media (max-width: 550px) {
                width: 120px;
            }
            
        }
        a.link {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 30px;
        }
    }
    section.bottom {
        height:100vh;
        position: relative;
        z-index: -2;
    .overlay {
        position: absolute;
        background: linear-gradient(rgba(255, 255, 255,.2 ), rgba(0,0,0,1));
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


export const Head = () => (
  <Seo title='Nevada Projects' description='Full website soon' image='/screenshot.png' />
  )



  export default IndexPage
