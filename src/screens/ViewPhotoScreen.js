import React from 'react'
import styled from 'styled-components'
import { Preloader } from '../components'

const ImagePhoto = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 10px;
`

const Container = styled.View`
  padding: 10px;
`

export default class ViewPhotoScreen extends React.Component {
  state = {
    isLoading: false,
  }

  render() {
    const {
      photo: {
        urls: { full },
      },
    } = this.props
    const { isLoading } = this.state
    return (
      <Container>
        <ImagePhoto
          source={{ uri: full }}
          onLoadStart={this._onLoadStart}
          onLoadEnd={this._onLoadEnd}
        />
        {isLoading && <Preloader />}
      </Container>
    )
  }

  _onLoadStart = () => {
    this.setState({ isLoading: true })
  }
  _onLoadEnd = () => {
    this.setState({ isLoading: false })
  }
}
