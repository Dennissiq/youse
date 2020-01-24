import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import ListItems from './ListItems'

export const content = {
  items: [
    {
      id: 1,
      name: 'Dennis Siqueira',
      email: 'dennis.siqueira@youse.com.br'
    },
    {
      id: 2,
      name: 'Dennis Siqueira',
      email: 'dennis.siqueira@youse.com.br'
    }
  ]
}

storiesOf('List', module).add(
  'ListItems',
  withInfo()(() => <ListItems item={content} />)
)
