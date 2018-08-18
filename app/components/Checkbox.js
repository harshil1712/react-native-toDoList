import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CheckBox from 'react-native-check-box'

const styles = StyleSheet.create({
})

export default class Checkbox extends Component {
  render() {
    return (
      <CheckBox
          style={{flex: 1, padding: 10}}
          onClick={()=>{}}
          // isChecked={data.checked}
          leftText="Hello"
          leftTextStyle={{flex:1, fontSize: 15}}
      />)
  }
}
