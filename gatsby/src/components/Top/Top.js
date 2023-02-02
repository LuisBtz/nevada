import React from "react";
import styled from 'styled-components'
import CanvasDraw from "@win11react/react-canvas-draw";

const Top = () => {



    return(
        <ContainerTop>
            <CanvasDraw 
                canvasHeight="100vh"
                canvasWidth='100vw'
                hideGrid={true}
                lazyRadius= {5}
                brushRadius= {60}
                brushColor="#FF1C00"
                catenaryColor="rgba(0,0,0,0)"
            />
        </ContainerTop>
    )
}

const ContainerTop = styled.section`
    height: 100vh;
    width: 100%;
    position: relative;
    @media (max-width: 750px) {
        height: 70vh;
        overflow: hidden;
    }
    div {
        background-color: transparent !important;
    }
`   

export default Top