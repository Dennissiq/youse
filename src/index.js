import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import GlobalStyle from './assets/styles/global'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <>
    <Routes />
    <GlobalStyle />
  </>,
  rootElement
)
