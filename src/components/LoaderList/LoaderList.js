import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { Container, ContentFlex, SkeletonContainer } from './styles'

const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Loading({ loading }) {
  return loading ? (
    <>
      {items.map(item => (
        <Container key={item.id}>
          <ContentFlex>
            <SkeletonContainer>
              <Skeleton circle={true} height={50} width={50} />
            </SkeletonContainer>
            <SkeletonContainer paddingTop>
              <Skeleton count={2} width={400} />
            </SkeletonContainer>
          </ContentFlex>
        </Container>
      ))}
    </>
  ) : null
}
