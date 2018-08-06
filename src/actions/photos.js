import { createAction } from 'redux-actions'

export const GET_PHOTOS_REQUEST = 'photos/GET_PHOTOS_REQUEST'

export const GET_PHOTOS_SUCCESS = 'photos/GET_PHOTOS_SUCCESS'

export const GET_PHOTOS_FAILURE = 'photos/GET_PHOTOS_FAULURE'

export const SET_PAGE = 'photos/SET_PAGE'

export const SET_COUNT = 'photos/SET_COUNT'

export const SELECT_PHOTO = 'photos/SELECT_PHOTO'

export const RESET = 'photos/RESET'

export const getPhotosRequest = createAction(GET_PHOTOS_REQUEST)

export const getPhotosSuccess = createAction(GET_PHOTOS_SUCCESS)

export const getPhotosFailure = createAction(GET_PHOTOS_FAILURE)

export const selectPhoto = createAction(SELECT_PHOTO)

export const setPage = createAction(SET_PAGE)

export const setCount = createAction(SET_COUNT)

export const reset = createAction(RESET)
