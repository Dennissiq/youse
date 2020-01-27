import { call, put } from 'redux-saga/effects'
import { store } from 'react-notifications-component'

import api from '../../../services/api'

import listActions from '../../ducks/list/list'

export function* loadList(request) {
  try {
    const response = yield call(api.fetch, {
      filter: request.filter !== undefined ? request.filter : false,
      skip: request.pagination !== undefined ? request.filter : 0,
      limit: 10
    })
    yield put(listActions.listSuccess(response))
  } catch (err) {
    console.log(err)
    store.addNotification({
      title: 'Temos um problema :/',
      message: 'Ocorreu um problema no servidor e tente reiniciar a página :)',
      type: 'danger',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 0,
        onScreen: true
      }
    })
  }
}
