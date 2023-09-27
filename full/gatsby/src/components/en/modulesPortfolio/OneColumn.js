import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const OneColumn = ({data}) => {

    const bgGetDataImage = getImage(data.asset)
    const bgGetDataImageAlt = data.textoAlternativo.enString

    return(
        <OneColumnContainer>
            <div className="container">
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={bgGetDataImage}
                    alt={bgGetDataImageAlt}
                />
            </div>
        </OneColumnContainer>
    )
}

const OneColumnContainer = styled.section`
    margin-top: 20px;
    margin-bottom: 20px;
`

export default OneColumn