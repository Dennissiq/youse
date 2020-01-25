import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import history from './history'
import store from '../store/index'

import Home from '../views/Home'
import App from '../components/App/App'

const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/app" exact component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default Routes
