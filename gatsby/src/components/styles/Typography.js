import { createGlobalStyle } from 'styled-components';

import meteot from '../../assets/fonts/MetroSans-Light.eot';
import metsvg from '../../assets/fonts/MetroSans-Light.svg';
import metttf from '../../assets/fonts/MetroSans-Light.ttf';
import metwoff from '../../assets/fonts/MetroSans-Light.woff';
import metwoff2 from '../../assets/fonts/MetroSans-Light.woff2';

import metregeot from '../../assets/fonts/MetroSans-Regular.eot';
import metregsvg from '../../assets/fonts/MetroSans-Regular.svg';
import metregttf from '../../assets/fonts/MetroSans-Regular.ttf';
import metregwoff from '../../assets/fonts/MetroSans-Regular.woff';
import metregwoff2 from '../../assets/fonts/MetroSans-Regular.woff2';

import metsemieot from '../../assets/fonts/MetroSans-Semi-Bold.eot';
import metsemisvg from '../../assets/fonts/MetroSans-Semi-Bold.svg';
import metsemittf from '../../assets/fonts/MetroSans-Semi-Bold.ttf';
import metsemiwoff from '../../assets/fonts/MetroSans-Semi-Bold.woff';
import metsemiwoff2 from '../../assets/fonts/MetroSans-Semi-Bold.woff2';



export const Typography = createGlobalStyle`
@font-face {
    font-family: 'Metro Light';
    src: url('${meteot}');
    src: url('${metwoff2}') format('woff2'),
        url('${metwoff}') format('woff'),
        url('${metttf}') format('truetype'),
        url('${metsvg}#PPPangramSans-Semibold') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Metro Regular';
    src: url('${metregeot}');
    src: url('${metregwoff2}') format('woff2'),
        url('${metregwoff}') format('woff'),
        url('${metregttf}') format('truetype'),
        url('${metregsvg}#PPPangramSans-Semibold') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Metro Semi Bold';
    src: url('${metsemieot}');
    src: url('${metsemiwoff2}') format('woff2'),
        url('${metsemiwoff}') format('woff'),
        url('${metsemittf}') format('truetype'),
        url('${metsemisvg}#PPPangramSans-Semibold') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

:root {
    --light: 'Metro Light', sans-serif;
    --regular: 'Metro Regular', sans-serif;
    --bold: 'Metro Semi Bold', sans-serif;
    --black: #000000;
    --white: #ffffff;
    --red: #FF4000;
    overflow-wrap: break-word;
}
html {
      scroll-behavior: smooth;
      font-size: 18px !important;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
    }
    body {
        background-color: var(--white);
        color: var(--black);
        font-size: 16px;
        font-family: var(--regular);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
        
    }
    ::-webkit-scrollbar {
        display: none;
    }
    p {
        font-family: var(--slim);
        font-weight: lighter;
    }
    
`
