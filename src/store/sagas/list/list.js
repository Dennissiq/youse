import { call, put } from 'redux-saga/effects'
import api from '../../../services/api'

import listActions from '../../ducks/list/list'

export function* loadList() {
  try {
    const response = yield call(api.fetch, {
      filter: false,
      skip: 0,
      limit: 10
    })
    yield put(listActions.listSuccess(response))
  } catch (err) {
    console.log(err)
  }
}
