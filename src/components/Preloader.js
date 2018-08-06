import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components'

const PreloaderContainer = styled.View`
  position: absolute;

  width: 100%;
  height: 100%;

  justify-content: center;
`

export default () => (
  <PreloaderContainer>
    <ActivityIndicator alignSelf="center" />
  </PreloaderContainer>
)
