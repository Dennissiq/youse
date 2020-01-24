import React from 'react'
import { Container } from './styles'
import Searcher from '../Searcher/Searcher'
import ListItems from '../ListItems/ListItems'

export default function List() {
  return (
    <Container>
      <Searcher
        content={{
          title: 'Digite o nome da pessoa que deseja procurar:'
        }}
      />
      <ListItems
        item={[
          {
            id: 1,
            name: 'Dennis Siqueira',
            email: 'dennis.siqueira@youse.com.br'
          }
        ]}
      />
    </Container>
  )
}
