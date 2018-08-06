import { call, all } from 'redux-saga/effects'
import photosSaga from './photos'

export default function*() {
  yield all([call(photosSaga)])
}
