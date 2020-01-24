import React from 'react'
import PropTypes from 'prop-types'
import { SearchInput, Container, Title } from './styles'

export default function Searcher({ content: { title, placeholder } }) {
  return (
    <Container>
      <Title>
        <h2>{title}</h2>
      </Title>
      <SearchInput placeholder={placeholder} />
    </Container>
  )
}

Searcher.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    placeholder: PropTypes.string.isRequired
  })
}
