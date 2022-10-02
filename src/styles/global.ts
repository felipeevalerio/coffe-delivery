import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: ${(props) => props.theme.background};
    }

    body, input, select, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Baloo 2', monospace;
        line-height: 130%;
    }

    li {
        list-style: none;
    }
`;
