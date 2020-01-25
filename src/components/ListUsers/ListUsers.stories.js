import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import ListUsers from './ListUsers'

export const dataItems = [{}]

export const searchContent = {}

storiesOf('List', module).add(
  'List Users',
  withInfo()(() => (
    <ListUsers items={dataItems} searchContent={searchContent} />
  ))
)
