import React from "react";
import styled from "styled-components";
import Parser from 'html-react-parser';

const Video = ({data}) => {
    const video = `<iframe src="https://player.vimeo.com/video/${data.sanityHomePage.videoID}?loop=1&autoplay=1&autopause=0&muted=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`

    return(
        <VideoContainer>
            <div className="video">
                {Parser(video)}
            </div>
        </VideoContainer>
    )
}

const VideoContainer = styled.section`
    padding-top: 300px;
    @media (max-width: 680px) {
        padding-top: 80px;
    }
.video {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    @media (max-width: 680px) {
        margin-top: 0;
    }
        iframe {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100vw;
            height: 100vh;
            transform: translate(-50%, -50%);
        }
    } 

@media (min-aspect-ratio: 16/9) {
  .video iframe {
    /* height = 100 * (9 / 16) = 56.25 */
    height: 56.25vw;
  }
}
@media (max-aspect-ratio: 16/9) {
  .video iframe {
    /* width = 100 / (9 / 16) = 177.777777 */
    width: 177.78vh;
  }
}
`

export default Video