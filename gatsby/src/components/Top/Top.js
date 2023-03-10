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
                brushRadius= {40}
                brushColor="#FF1C00"
                catenaryColor="rgba(0,0,0,0)"
            />
        </ContainerTop>
    )
}

const ContainerTop = styled.section`
   
    div {
        background-color: transparent !important;
    }
`   

export default Top