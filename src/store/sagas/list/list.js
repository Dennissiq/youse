import { call, put } from 'redux-saga/effects'
// import { api } from '../../../services/api'

import listActions from '../../ducks/list/list'

export function* loadList() {
  try {
    yield call(console.log('hello'))
    // const response = yield call(api.get, `/list`)
    // yield put(listActions.listSuccess(response.data))
  } catch (err) {
    console.log(err)
  }
}
