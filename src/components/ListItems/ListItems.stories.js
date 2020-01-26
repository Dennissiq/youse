import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import ListItems from './ListItems'

export const items = [
  {
    id: 1,
    title: 'Dennis Siqueira',
    description: 'dennis.siqueira@youse.com.br'
  },
  {
    id: 2,
    title: 'Dennis Siqueira',
    description: 'dennis.siqueira@youse.com.br'
  }
]

storiesOf('List', module).add(
  'ListItems',
  withInfo()(() => <ListItems item={items} />)
)
