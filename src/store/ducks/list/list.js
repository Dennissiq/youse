import { createReducer, createActions } from 'reduxsauce'

/* Types & Action Creators */
const { Types, Creators } = createActions({
  listRequest: ['filter'],
  listSuccess: ['data']
})

export const ListTypes = Types
export default Creators

/* Initial State */
export const INITIAL_STATE = {
  data: [],
  isFetching: true
}

/* Reducers */
export const list = (state, { data }) => {
  return { ...state, data, isFetching: false }
}

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LIST_SUCCESS]: list
})
