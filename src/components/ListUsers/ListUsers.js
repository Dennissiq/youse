import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ListItems from '../ListItems/ListItems'

import listActions from '../../store/ducks/list/list'

import {
  Container,
  ContainerInput,
  SearchInput,
  PaginationContainer,
  NumberBox,
  TextBox
} from './styles'
import Text from '../Text/Text'
import Loading from '../LoaderList/LoaderList'

class ListUsers extends Component {
  state = {
    inactiveBackButton: true,
    inactiveNextButton: false,
    initialValue: 1,
    maxValue: 200
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    const { listRequest } = this.props
    listRequest()
  }

  handleSearch = e => {
    const { listRequest } = this.props
    listRequest(e.target.value)
  }

  handleBack = e => {
    const { initialValue } = this.state
    const { listRequest } = this.props

    if (initialValue > 1) {
      this.setState({
        initialValue: initialValue - 1,
        inactiveBackButton: false,
        inactiveNextButton: false
      })
      listRequest(false, initialValue)
    }
    if (initialValue === 2) {
      this.setState({
        inactiveBackButton: true
      })
      const { listRequest } = this.props
      listRequest(false, 0)
    }
  }

  handleNext = e => {
    const { initialValue, maxValue } = this.state

    if (initialValue < maxValue) {
      this.setState({
        initialValue: initialValue + 1,
        inactiveNextButton: false,
        inactiveBackButton: false
      })
      const { listRequest } = this.props
      listRequest(false, initialValue)
    }
    if (initialValue === maxValue - 1) {
      this.setState({
        inactiveNextButton: true
      })
    }
  }

  render() {
    const { isFetching, items } = this.props
    const {
      inactiveBackButton,
      inactiveNextButton,
      initialValue,
      maxValue
    } = this.state
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
        <Loading loading={isFetching} />
        <ListItems item={items} />
        <PaginationContainer>
          <TextBox
            paddingRight
            inactive={inactiveBackButton}
            onClick={this.handleBack}
          >
            Voltar
          </TextBox>
          <NumberBox>
            {initialValue}/{maxValue}
          </NumberBox>
          <TextBox inactive={inactiveNextButton} onClick={this.handleNext}>
            Próximo
          </TextBox>
        </PaginationContainer>
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
