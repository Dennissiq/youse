import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Searcher from '../Searcher/Searcher'
import ListItems from '../ListItems/ListItems'

import listActions from '../../store/ducks/list/list'

import { Container } from './styles'

class ListUsers extends React.Component {
  // componentDidMount() {
  //   this.getCategories()
  // }

  // getCategories = () => {
  //   const { categoryListRequest } = this.props
  //   categoryListRequest()
  // }

  // getSelectedCategory = category => {
  //   localStorage.setItem('@category', category)
  //   const { categoryRequest } = this.props
  //   categoryRequest(category)
  // }
  render() {
    return (
      <Container>
        <Searcher
          content={{
            title: 'Digite o nome da pessoa que deseja procurar:'
          }}
        />
        <ListItems
          item={[
            {
              id: 1,
              name: 'Dennis Siqueira',
              email: 'dennis.siqueira@youse.com.br'
            }
          ]}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  // items: state.list.data
  items: state
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...listActions
    },
    dispatch
  )

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(ListUsers)
