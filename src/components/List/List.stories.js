import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import List from './List'

export const content = {
  text: '1. Dados Pessoais'
}

storiesOf('List', module).add(
  'List',
  withInfo()(() => <List content={content} />)
)
