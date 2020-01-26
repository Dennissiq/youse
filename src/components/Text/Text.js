import React from 'react'
import PropTypes from 'prop-types'
import { Title } from './styles'

export default function Text({ content: { title } }) {
  return (
    <Title>
      <h2>{title}</h2>
    </Title>
  )
}

Text.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string
  })
}
