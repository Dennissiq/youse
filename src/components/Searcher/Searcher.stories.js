import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Searcher from './Searcher'

export const content = {
  title: 'Digite o nome da pessoa que deseja procurar:',
  placeholder: 'Ex.: Machado de Assis'
}

storiesOf('List', module).add(
  'Input',
  withInfo()(() => <Searcher content={content} />)
)
