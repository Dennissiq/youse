import styled from 'styled-components'

export const ColorContainer = styled.div`
  display: flex;
  background-color: ${props => props.color};
  h2 {
    font-family: 'Archivo Black', sans-serif;
    text-transform: uppercase;
  }
  padding: 1rem;
  color: ${props => props.text};
`
