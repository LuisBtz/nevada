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
                brushColor="rgba(255, 64, 0, 1)"
                catenaryColor="rgba(0,0,0,0)"
            />
        </ContainerTop>
    )
}

const ContainerTop = styled.section`
    cursor:url('/cursor.svg') 60 50, auto;
    height: 100vh;
    width: 100%;
    position: relative;
    div {
        background-color: transparent !important;
    }
`   

export default Top