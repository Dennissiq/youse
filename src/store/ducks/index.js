import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { reducer as list } from './list/list'

export default history =>
  combineReducers({
    list,
    router: connectRouter(history)
  })
