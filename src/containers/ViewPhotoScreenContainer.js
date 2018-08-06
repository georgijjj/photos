import { ViewPhotoScreen } from '../screens'
import * as R from 'ramda'
import { connect } from 'react-redux'
import { getSelectedPhoto } from '../selectors'

const mapStateToProps = R.applySpec({
  photo: getSelectedPhoto,
})

export default connect(mapStateToProps)(ViewPhotoScreen)
