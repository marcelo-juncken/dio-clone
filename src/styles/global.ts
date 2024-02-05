import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${({theme}) => theme.colors.background};
        color: ${({theme}) => theme.colors.text};
        font-family: ${({theme}) => theme.fonts.body};
        font-size: ${({theme}) => theme.fontSizes.medium};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${({theme}) => theme.fonts.headings};
    }
`;

export default GlobalStyle;