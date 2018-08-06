import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;

  width: 100%;

  border-radius: 10px;
  background-color: #fff;
  padding: 10px;
`

const TextWrapper = styled.View`
  width: 50%;
`

const Image = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 6px;
`

const DescriptionText = styled.Text`
  margin: 5px 0 0 5px;

  color: #cbb5b5;

  width: 100%;
`

const UserNameText = styled.Text`
  margin-left: 5px;
`

export default ({
  item: {
    id,
    description,
    urls: { small },
    user: { first_name: firstName, last_name: lastName },
  },
  onPress,
}) => {
  return (
    <ItemContainer onPress={() => onPress(id)}>
      <Image source={{ uri: small }} />
      <TextWrapper>
        <UserNameText>
          {firstName} {lastName}
        </UserNameText>
        <DescriptionText>
          Description: {description || 'No description'}
        </DescriptionText>
      </TextWrapper>
    </ItemContainer>
  )
}
