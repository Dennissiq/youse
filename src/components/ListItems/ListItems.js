import React from 'react'
import PropTypes from 'prop-types'
import {
  NameList,
  EmailList,
  Container,
  YouserIcon,
  ContentFlex,
  ContentText
} from './styles'

export default function ListItems({ item: items }) {
  return (
    <>
      {items.map(item => (
        <Container key={item.id}>
          <ContentFlex>
            <YouserIcon />
            <ContentText>
              <NameList>{item.name}</NameList>
              <EmailList>{item.email}</EmailList>
            </ContentText>
          </ContentFlex>
        </Container>
      ))}
    </>
  )
}

ListItems.propTypes = {
  item: PropTypes.shape({
    items: PropTypes.array.isRequired
  })
}
