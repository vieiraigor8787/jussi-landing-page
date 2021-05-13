import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Barlow', sans-serif;
    }

    ul, li , a{
        list-style: none;
        text-decoration: none;
    }

    :root {
        --color-green-jussi: #03FFA5;
        --color-pink-jussi: #EE0E7D;
        --color-black-jussi: #000000;
        --color-grey-jussi: #F2F2F2;
        --color-dark-grey-jussi: #5B5B5B;
        --color-white-jussi: #FFFFFF;
        }

`;