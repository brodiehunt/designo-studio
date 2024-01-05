import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Jost', sans-serif;
        font-size: 1rem;
        color: var(--secondary-dark);
        --primary: #E7816B;
        --primary-dark: #1D1C1E;
        --primary-light: #FFFFFF;
        --secondary: #FFAD9B;
        --secondary-dark: #333136;
        --secondary-light: #F1F3F5;

        
        
    }

    h1, h2, h3, h4 {
        color: var(--text-dark);
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    button {
        font-family: 'Jost', sans-serif;
        -webkit-tap-highlight-color: transparent;
    }
`;

export default GlobalStyles;