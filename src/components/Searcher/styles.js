import styled from 'styled-components'
import { colors } from '../../assets/styles/colors/colors'

export const Container = styled.div`
  @media screen and (max-width: 900px) {
    max-width: 100%;
  }
  max-width: 50%;
`
export const SearchInput = styled.input`
  width: 60%;
  padding: 1rem 0.5rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  transition: ease-in-out, width 0.35s ease-in-out;
  color: ${colors.primary};
  border: 1px solid ${colors.gray};
  &:focus {
    border: 2px solid ${colors.warning};
    width: 80%;
    outline: none;
  }
`
export const Title = styled.div`
  h2 {
    font-family: 'Archivo Black', sans-serif;
    color: ${colors.dark};
  }
`
