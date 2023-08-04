import React from "react";
import styled from "styled-components";
import Parser from 'html-react-parser';


const VideoColumn = ({data}) => {
    const video = `<iframe src="https://player.vimeo.com/video/${data.esString}?loop=1&autoplay=1&autopause=0&muted=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`

    return(
        <VideoColumnContainer>
            <div className="video">
                {Parser(video)}
            </div>
        </VideoColumnContainer>
    )
}

const VideoColumnContainer = styled.section`
margin-top: 20px;
margin-bottom: 20px;
    .video {
        position:relative;
        padding-bottom:56.25%; /* aspect ration for 16:9 */
        /*padding-top: 20px;*/ /* you can add padding-top if needed */
        height:0;
        overflow:hidden;
        iframe {
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            scale: 1.3;
        }
    }
`

export default VideoColumn