import {createGlobalStyle} from 'styled-components'

const GlobalStyle =  createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    color:#f00;
    }

    #root{
        margin: 0 auto;
    }
`;

export default GlobalStyle