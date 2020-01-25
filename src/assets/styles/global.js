import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`


  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    @import url('https://fonts.googleapis.com/css?family=Archivo+Black|Open+Sans&display=swap');
    font-family: 'Open Sans';
    color: #333;
    font-size: 1rem;
    height: auto;
  }
`

export default GlobalStyle
