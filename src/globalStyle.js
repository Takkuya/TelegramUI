import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;

        --color-light: #fff;
        --color-primary: #5682a3;
        --color-dark: #000;
    }

    body,.root {
        height: 100%;
        max-width: 100vw;
       font-size: 2rem;
    }
    html {
        font-size: 62%;
    }
    
    *:focus{
        outline: none;
        box-shadow: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`