import { all, takeLatest } from 'redux-saga/effects'

import { loadList } from './list/list'

import { ListTypes } from '../ducks/list/list'

export default function* rootSaga() {
  yield all([takeLatest(ListTypes.LIST_REQUEST, loadList)])
}
