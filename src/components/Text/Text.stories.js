import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Text from './Text'

export const content = {
  title: 'Digite o nome da pessoa que deseja procurar:'
}

storiesOf('Text', module).add(
  'Title',
  withInfo()(() => <Text content={content} />)
)
