import React from 'react'
import * as R from 'ramda'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components'
import { PhotoElement } from '../components'

const Container = styled.FlatList`
  padding: 10px;
`

const Separator = styled.View`
  height: 4px;
  background-color: transparent;
`

const FooterElement = () => <ActivityIndicator padding={10} />

export default class PhotosListScreen extends React.PureComponent {
  componentDidMount() {
    const { getPhotosRequest } = this.props
    getPhotosRequest()
  }

  render() {
    const { photos, isLoading, count } = this.props
    return (
      <Container
        refreshing={isLoading && !count}
        onRefresh={this._onRefresh}
        contentContainerStyle={{ paddingBottom: 20 }}
        keyExtractor={R.prop('id')}
        data={photos}
        renderItem={this._renderItem}
        ItemSeparatorComponent={Separator}
        onEndReached={this._onEndReached}
        ListFooterComponent={isLoading && count ? FooterElement : null}
      />
    )
  }

  _onRefresh = () => {
    const { getPhotosRequest, reset } = this.props
    reset()
    getPhotosRequest()
  }

  _onEndReached = () => {
    const { page, count, getPhotosRequest } = this.props
    if (!(Math.round(count / 20) === page)) {
      getPhotosRequest()
    }
  }

  _renderItem = props => {
    return <PhotoElement onPress={this._onItemPress} {...props} />
  }

  _onItemPress = id => {
    const {
      selectPhoto,
      navigation: { navigate },
    } = this.props

    selectPhoto(id)
    navigate('viewPhoto')
  }
}
