import styled from 'styled-components'
import { colors } from '../../assets/styles/colors/colors'

export const Container = styled.div`
  @media screen and (max-width: 900px) {
    max-width: 100%;
  }
  max-width: 51%;
`
export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 0.5rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  transition: 0.3s;
  border: 1px solid ${colors.lightGray};
  font-weight: 600;
  &::placeholder {
    color: ${colors.gray};
  }
  &:focus {
    border: 5px solid ${colors.primary};
    width: 50%;
    outline: none;
    background-color: ${colors.warning};
    color: ${colors.light};

    &::placeholder {
      color: ${colors.light};
    }
  }
  margin-bottom: 3rem;
`
export const Title = styled.div`
  h2 {
    font-family: 'Archivo Black', sans-serif;
    color: ${colors.dark};
  }
`
