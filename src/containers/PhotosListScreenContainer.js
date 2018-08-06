import { PhotosListScreen } from '../screens'
import * as R from 'ramda'
import { connect } from 'react-redux'
import { getPhotosRequest, selectPhoto, reset } from '../actions'
import {
  getPhotos,
  getPhotosIsLoading,
  getPhotosCount,
  getPhotosPage,
  getCountInPage,
} from '../selectors'

const mapStateToProps = R.applySpec({
  photos: getPhotos,
  isLoading: getPhotosIsLoading,
  count: getPhotosCount,
  page: getPhotosPage,
  countInPage: getCountInPage,
})

const mapDispatchToProps = {
  getPhotosRequest,
  selectPhoto,
  reset,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosListScreen)
