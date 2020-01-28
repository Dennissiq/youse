# Listagem cool 🎉🤙🏻

Obrigado por tirar um tempo para analisar este repositório :)

## Sobre

Este repositório é uma mini aplicação com todas as funcionalidades necessárias para uma grande aplicação grande e escalável. Nele está contido diversos componentes que fazem parte de uma listagem que julguei necessário na hora do desenvolvimento.

## Tecnologias legais

Foram utilizadas algumas tecnologias em que uso normalmente no meu dia a dia e outras que estou aprendendo. Acredito que a cada dia podemos melhorar nosso código cada vez mais. (A ideia é sempre estar aberto a novas opções que fazem sentido para nosso negócio 😉)

## Vamos por partes

Antes de mais nada, baixe as dependências do projeto utilizando o comando `yarn install` ou somente `yarn`

### **React + Redux**:

Dentro destas tecnologias foram utilizados padrões juntamente ao **Redux Saga**, foi utilizado o _Duck Pattern_ para melhorar a arquitetura do projeto e reduzir o número de pastas no projeto. ( Com este pattern, é possível remover as _ACTIONS_, _REDUCERS_ e _DISPATCHERS_ e colocar em um único arquivo.)

###

```js
// Exemplo de um Duck Pattern, pode ser encontrado em ./src/store/ducks/list/list.js

import { createReducer, createActions } from 'reduxsauce'

/* Types & Action Creators */
const { Types, Creators } = createActions({
  listRequest: ['filter', 'pagination'],
  listSuccess: ['data']
})

export const ListTypes = Types
export default Creators

/* Initial State */
export const INITIAL_STATE = {
  data: [],
  isFetching: true
}

/* Reducers */
export const list = (state, { data }) => {
  return { ...state, data, isFetching: false }
}
/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LIST_SUCCESS]: list
})
```

###

### Storybook

Confesso que estou utilizando em meus projetos mais recentes então ainda não sei se é melhor for de manter meus _stories_ nos projetos. (Dêem uma olhada rs). Porém o Storybook tem facilitado minha vida de uma forma incrível e ele me possibilta a deixar meus componentes mais consistentes e testáveis. Estou achando incrível!!!

Para iniciar o Storybook utilize o comando `yarn storybook`

### Husky (Commitizen + Commitlint & outras padronizações)

Estas tecnologias são voltadas para nós devs (assim como o storybook),com a intenção de melhorar nossas vidas no futuro. Com elas é possível padronizar nossos commits. Com a configuração destas ferramentas no projeto, foi mudado um pouco a forma convencional de commit.

Normalment utilizamos o comando `git commit -m "digite sua msg aqui"` porém, com o Husky isto foi alterado para o comando `yarn commit` que ao digitado, temos como personalizar nossos commits de uma forma muito melhor e padronizada.

Também foi utilizados alguns arquivos de padronização de código como por exemplo o **eslint**, **prettier**, etc...

#### Exemplos:

No terminal:
![husky](src/assets/images/husky.png?raw=true)

##

No github:
![github](src/assets/images/github.png?raw=true)

### Outras tecnologias

Para mais informações de tecnologias utilizadas verifique o `package.json` além disso, lá você verá os scripts criados para a automatização do Husky e outras coisas muito interessantes.

### Pontos legais

##

### Animações & Paginação:

![animated list](src/assets/images/example-animation.gif?raw=true)

##

### Loader na lista:

![loader](src/assets/images/loader.gif?raw=true)

##

### Casos de exceção:

![error](src/assets/images/error.gif?raw=true)

#

### Pontos a serem melhorados

Acredito que muitas coisas podem ser refatoradas e implementadas futuramente. Sendo bem sincero, gostaria de ter feito testes unitários em meus componentes mas ainda não parei muito para implementar testes da forma mais adequada no meu dia a dia. Sempre estou disposto a compreender e fazer sempre o melhor código possível. Inclusive, futuramente você pode criar um PR e implementamos juntos, o que acha? _#opensource_ 🎉
Eu adorei muito ter feito este teste.
