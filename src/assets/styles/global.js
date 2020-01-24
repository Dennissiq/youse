import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  } */

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-family: 'Felbridge Pro'; 
    /* font-weight: 300;  */
    font-style: normal;
    color: #333;
    font-size: 1rem;
    height: auto;
  }
  button {
    cursor: pointer;
  }
`

export default GlobalStyle
