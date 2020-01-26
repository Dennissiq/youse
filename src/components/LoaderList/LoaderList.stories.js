import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import LoaderList from './LoaderList'

storiesOf('List', module).add(
  'Loader List',
  withInfo()(() => <LoaderList loading />)
)
