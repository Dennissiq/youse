import React from 'react'
import PropTypes from 'prop-types'
import { NameList, EmailList, Container } from './styles'

export default function ListItem({ item: { items } }) {
  return (
    <>
      {items.map(item => (
        <Container key={item.id}>
          <NameList>{item.name}</NameList>
          <EmailList>{item.email}</EmailList>
        </Container>
      ))}
    </>
  )
}
