import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ListItems from '../ListItems/ListItems'

import listActions from '../../store/ducks/list/list'

import { Container, ContainerInput, SearchInput } from './styles'
import Text from '../Text/Text'
import Loading from '../LoaderList/LoaderList'

class ListUsers extends Component {
  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    const { listRequest } = this.props
    listRequest()
  }

  handleSearch = e => {
    this.setState({
      value: e.target.value
    })
    const { listRequest } = this.props
    listRequest(e.target.value)
  }

  render() {
    return (
      <Container>
        <ContainerInput>
          <Text
            content={{ title: 'Digite o nome da pessoa que deseja procurar:' }}
          />
          <SearchInput
            type="text"
            placeholder="Ex.: Machado de Assis"
            minLength={2}
            debounceTimeout={300}
            onChange={e => this.handleSearch(e)}
          />
        </ContainerInput>
        <Loading loading={this.props.isFetching} />
        <ListItems item={this.props.items} />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  items: state.list.data,
  isFetching: state.list.isFetching
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
