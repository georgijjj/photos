import { call, put, takeLatest, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {
  GET_PHOTOS_REQUEST,
  getPhotosSuccess,
  getPhotoFailure,
  setCount,
  setPage,
} from '../actions'
import { getPhotosCount, getPhotosPage, getCountInPage } from '../selectors'
import { getPhotos } from '../managers'

function* getPhotosWorker() {
  try {
    const photosPage = yield select(getPhotosPage)
    const countInPage = yield select(getCountInPage)
    const { data, count } = yield call(getPhotos, photosPage, countInPage)

    const photosCount = yield select(getPhotosCount)

    if (!photosCount) {
      yield put(setCount(count))
    }
    yield put(getPhotosSuccess(data))
    yield put(setPage(photosPage + 1))
  } catch (ex) {
    yield put(getPhotoFailure(ex))
  }
}

export default function*() {
  yield takeLatest(GET_PHOTOS_REQUEST, getPhotosWorker)
}
