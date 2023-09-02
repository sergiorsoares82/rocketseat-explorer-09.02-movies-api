import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    
    :root {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        width: 100%;
        height: 100vh;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    body, input, textarea, button{
        font-family: 'Roboto Slab', sans-serif
    }

    button {
        width: 100%;
        cursor: pointer;
    }

    a {
        display: block;
        text-decoration: none;
    }
`;
