import { createStackNavigator } from 'react-navigation'
import {
  PhotosListScreenContainer,
  ViewPhotoScreenContainer,
} from '../containers'

const AppNavigator = createStackNavigator(
  {
    photos: {
      screen: PhotosListScreenContainer,
    },
    viewPhoto: {
      screen: ViewPhotoScreenContainer,
    },
  },
  {
    initialRouteName: 'photos',
  }
)

export default AppNavigator
