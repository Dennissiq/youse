import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Provider from '../../utils/provider'

import store from '../../store'

import ListUsers from './ListUsers'

export const dataItems = [{}]

export const searchContent = {}

const withProvider = story => <Provider store={store}>{story()}</Provider>

storiesOf('List', module)
  .addDecorator(withProvider)
  .add(
    'List Users',
    withInfo()(() => (
      <ListUsers items={dataItems} searchContent={searchContent} />
    ))
  )
