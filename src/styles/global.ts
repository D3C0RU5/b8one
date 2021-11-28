import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,body {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
        font-family: 'Inter';
        color:#1C1C1C;
    }

    #root{
        margin: 0 auto;
    }
    .container{
        max-width: 984px;
    }
`;

export default GlobalStyle;
