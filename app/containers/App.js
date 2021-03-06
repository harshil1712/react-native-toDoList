import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'

import Title from '../components/Title'
import Footer from '../components/Footer'
import List from '../components/List'
import Input from '../components/Input'

import { actionCreators } from '../redux/todoRedux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  onAddItem = (text) => {
    const { dispatch } = this.props
    dispatch(actionCreators.addItem({text:text, checked:false}))
  }

  onRemoveItem = (index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.removeItem(index))
  }

  onChange = (item,index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.toogleItem(index))
  }

  onRemoveCompleted =() => {
    const { dispatch } = this.props
    dispatch(actionCreators.remComItems())
  }

  render() {
    const {items} = this.props
    return (
      <View style={styles.container}>
        <Title />
        <Input onSubmitEditing={this.onAddItem} />
        <List 
          list={items}
          onPressItem={this.onRemoveItem}
          onChange={this.onChange}  
        />
        <Footer remove={this.onRemoveCompleted}/>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
