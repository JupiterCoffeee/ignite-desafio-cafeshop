import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, input, textarea, button {
    font: ${props => props.theme.font['text-m']};
    color: ${props => props.theme.color['gray-800']};
    -webkit-font-smoothing: antialiased;
}

`;