import styled from 'styled-components'
import { colors } from '../../assets/styles/colors/colors'
import icon from '../../assets/images/youser.webp'

export const NameList = styled.h2`
  font-family: 'Archivo Black', sans-serif;
  color: ${colors.secondary};
`
export const EmailList = styled.p`
  font-family: 'Open Sans', sans-serif;
  /* margin-left: 0.2rem; */
  padding-bottom: 0.8rem;
`

export const Container = styled.div`
  @media screen and (max-width: 900px) {
    max-width: 100%;
    p {
      max-width: 310px;
      word-wrap: break-word;
    }
  }

  max-width: 50%;
  border: 1px solid ${colors.lightGray};
  padding: 0.5rem 1rem;
  transition: 0.3s;
  &:hover {
    background-color: ${colors.warning};
    color: ${colors.light};
    cursor: pointer;
    padding: 1rem;
    &:active {
      background-color: ${colors.primary};
      transition: 0.2s;
    }
  }
`

export const YouserIcon = styled.img.attrs({
  src: icon
})`
  width: 48px;
  height: 63.2px;
  padding: 20px;
  @media (max-width: 414px) {
    display: none;
  }
`

export const ContentFlex = styled.div`
  display: flex;
`
export const ContentText = styled.div``
