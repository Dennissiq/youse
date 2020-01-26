import { call, put } from 'redux-saga/effects'
import api from '../../../services/api'

import listActions from '../../ducks/list/list'

export function* loadList(request) {
  try {
    console.log(request.filter)
    const response = yield call(api.fetch, {
      filter: request.filter !== undefined ? request.filter : false,
      skip: 0,
      limit: 10
    })
    yield put(listActions.listSuccess(response))
  } catch (err) {
    console.log(err)
  }
}
