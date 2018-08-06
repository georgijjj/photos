import { handleActions, handleAction } from 'redux-actions'
import * as R from 'ramda'
import { combineReducers } from 'redux'
import {
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAULURE,
  GET_PHOTOS_REQUEST,
  SELECT_PHOTO,
  SET_COUNT,
  SET_PAGE,
  RESET,
} from '../actions'

const byId = handleAction(
  GET_PHOTOS_SUCCESS,
  R.useWith(
    (state, newPhotos) =>
      R.pipe(
        R.indexBy(R.prop('id')),
        R.merge(state)
      )(newPhotos),
    [R.identity, R.prop('payload')]
  ),
  {}
)

const allIds = handleAction(
  GET_PHOTOS_SUCCESS,
  (state, { payload }) => {
    const ids = R.map(R.prop('id'))(payload)
    return R.uniq([...state, ...ids])
  },
  []
)

const isLoading = handleActions(
  {
    [GET_PHOTOS_REQUEST]: R.T,
    [GET_PHOTOS_SUCCESS]: R.F,
    [GET_PHOTOS_FAULURE]: R.F,
  },
  false
)

const selectedPhoto = handleAction(
  SELECT_PHOTO,
  R.pipe(
    R.nthArg(1),
    R.prop('payload')
  ),
  null
)

const page = handleActions(
  {
    [SET_PAGE]: R.pipe(
      R.nthArg(1),
      R.prop('payload')
    ),
    [RESET]: R.always(1),
  },
  1
)

const count = handleActions(
  {
    [SET_COUNT]: R.pipe(
      R.nthArg(1),
      R.prop('payload')
    ),
    [RESET]: R.always(0),
  },
  0
)

export default combineReducers({
  byId,
  allIds,
  isLoading,
  selectedPhoto,
  page,
  count,
})
