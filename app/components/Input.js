import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input:{
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    fontSize:20,
    height:40,
    paddingLeft: 15,
  }
})

export default class Input extends Component {

  state ={
    text: ''
  }

  onChangeText= (text) => this.setState({text})

  onSubmitEditing = () =>{
    const {onSubmitEditing} = this.props;
    const {text} = this.state;
    if(!text) return
    onSubmitEditing(text)
    this.setState({text:''})
  }

  render() {
    const {text} = this.state;
    return (
      <View>
        <TextInput 
          style={styles.input}
          value={text}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing} 
          placeholder='Enter an Item!'
        />
      </View>
    )
  }
}
