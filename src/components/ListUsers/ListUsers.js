import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Searcher from '../Searcher/Searcher'
import ListItems from '../ListItems/ListItems'

import listActions from '../../store/ducks/list/list'

import { Container } from './styles'

class ListUsers extends React.Component {
  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    const { listRequest } = this.props
    listRequest()
  }

  render() {
    console.log(this.props.items)
    return (
      <Container>
        <Searcher
          content={{
            title: 'Digite o nome ou e-mail da pessoa que deseja procurar:'
          }}
        />
        <ListItems item={this.props.items} />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  // items: state.list.data
  items: state.list.data
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
