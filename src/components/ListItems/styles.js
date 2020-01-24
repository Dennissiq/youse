import styled from 'styled-components'
import { colors } from '../../assets/styles/colors/colors'

export const NameList = styled.h2`
  font-family: 'Archivo Black', sans-serif;
  color: ${colors.secondary};
`
export const EmailList = styled.p`
  font-family: 'Open Sans', sans-serif;
  margin-left: 0.2rem;
  padding-bottom: 0.8rem;
`

export const Container = styled.div`
  max-width: 50%;
  border: 1px solid ${colors.lightGray};
  padding: 0 1rem;
  transition: 0.3s;
  &:hover {
    background-color: ${colors.warning};
    color: ${colors.light};
    cursor: pointer;
    padding: 1rem;
    h2 {
    }
    p {
      font-size: 1.1rem;
    }

    &:active {
      background-color: ${colors.primary};
      h2 {
        font-size: 1.7rem;
        transition: 0.25s;
      }
      p {
        font-size: 1.2rem;
        transition: 0.25s;
      }
    }
  }
`
