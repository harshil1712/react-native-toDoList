import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import CheckBox from 'react-native-check-box'

const styles = StyleSheet.create({
})

export default class Checkbox extends Component {

  render() {
    const {checked, label, onChange } = this.props
    return (
      <CheckBox
          style={{flex: 1, padding: 10}}
          onClick={()=>onChange()}
          isChecked={checked}
          leftText={label}
          leftTextStyle={{flex:1, fontSize: 15}}
      />)
  }
}
