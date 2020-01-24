import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import List from './List'

export const dataItems = [{}]

export const searchContent = {}

storiesOf('List', module).add(
  'List',
  withInfo()(() => <List items={dataItems} searchContent={searchContent} />)
)
