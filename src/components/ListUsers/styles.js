import styled from 'styled-components'
import { colors } from '../../assets/styles/colors/colors'

import { DebounceInput } from 'react-debounce-input'

export const Container = styled.div`
  margin: 1rem;
`

export const PaginationContainer = styled.div`
  @media screen and (max-width: 900px) {
    max-width: 100%;
  }

  max-width: 52.4%;
  display: ${props => (!props.showPagination ? 'none' : 'flex')};
  justify-content: flex-end;
  padding-top: 1rem;
  padding-right: 1rem;
`

export const NumberBox = styled.p`
  letter-spacing: 2px;
  font-weight: bold;
  font-family: 'Archivo Black', sans-serif;
`
export const TextBox = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-left: 2rem;
  padding-right: ${props => (props.paddingRight ? '2rem' : '0rem')};
  font-family: 'Archivo Black', sans-serif;
  /* transition: 0.3s; */
  color: ${props => (props.inactive ? colors.gray : colors.secondary)};

  &:hover {
    text-decoration: ${props => (props.inactive ? 'none' : 'underline')};
    font-weight: ${props => (props.inactive ? 'normal' : 'bold')};
    cursor: ${props => (props.inactive ? 'not-allowed' : 'pointer')};
  }
`

export const ContainerInput = styled.div`
  @media screen and (max-width: 900px) {
    max-width: 97%;
  }
  max-width: 50.8%;
`

export const SearchInput = styled(DebounceInput)`
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
