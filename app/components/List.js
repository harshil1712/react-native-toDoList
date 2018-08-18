import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  itemStyle:{
    padding:15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  remove:{
    fontSize:15,
    color:'#ef5350',
    fontWeight: 'bold'
  }
})

export default class List extends Component {

  render() {
    const { itemStyle, remove } = styles;
    return (
        <ScrollView>
          <View style={itemStyle}>
            <Checkbox />
            <TouchableOpacity><Text style={remove}>X</Text></TouchableOpacity>
          </View>
          <View style={itemStyle}>
            <Checkbox />
            <TouchableOpacity><Text style={remove}>X</Text></TouchableOpacity>
          </View>
          <View style={itemStyle}>
            <Checkbox />
            <TouchableOpacity><Text style={remove}>X</Text></TouchableOpacity>
          </View>
        </ScrollView>
    )
  }
}
