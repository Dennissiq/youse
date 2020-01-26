import styled from 'styled-components'
import { colors } from '../../assets/styles/colors/colors'

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
`

export const ContentFlex = styled.div`
  display: flex;
`
export const SkeletonContainer = styled.div`
  padding: ${props => (props.paddingTop ? '1.35rem' : '1rem')} 2rem;
`
