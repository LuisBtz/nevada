import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TwoColumn = ({data}) => {

    const bgGetDataImage1 = getImage(data.imagen1.asset)
    const bgGetDataImageAlt1 = data.imagen1.textoAlternativo.enString

    const bgGetDataImage2 = getImage(data.imagen2.asset)
    const bgGetDataImageAlt2 = data.imagen2.textoAlternativo.enString


    return(
        <TwoColumnContainer>
            <div className="container">
                <div className="iz">
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={bgGetDataImage1}
                        alt={bgGetDataImageAlt1}
                    />
                </div>
                <div className="de">
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={bgGetDataImage2}
                        alt={bgGetDataImageAlt2}
                    />
                </div>
            </div>
        </TwoColumnContainer>
    )
}

const TwoColumnContainer = styled.section`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        @media (max-width: 750px) {
            grid-template-columns: 1fr;
        }
        .iz .de{
            width: 50%;
            height: 100%;
            @media (max-width: 750px) {
                width: 100%;
            }
        }
    }
`

export default TwoColumn