/**
 * You probably don't need to change this file :)
 * Check `./components/App/App.js`
 */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import GlobalStyle from './assets/styles/global'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
  </>,
  rootElement
)
