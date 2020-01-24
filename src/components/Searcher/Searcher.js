import React from 'react'
import PropTypes from 'prop-types'
import { SearchInput, Container, Title } from './styles'

export default function Searcher({ content: { title, placeholder } }) {
  return (
    <Container>
      <Title>
        <h2>{title}</h2>
      </Title>
      <SearchInput
        type="text"
        placeholder={
          placeholder === undefined ? 'Ex.: Machado de Assis' : placeholder
        }
      />
    </Container>
  )
}

Searcher.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    placeholder: PropTypes.string
  })
}
