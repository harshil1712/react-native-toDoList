import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  itemStyle:{
    paddingRight:10,
    paddingLeft:10,
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

  renderItem = (text,i) =>{
    const { onPressItem } = this.props
    const { itemStyle, remove } = styles;

    return(
      <View style={itemStyle} key={i}>
        <Checkbox leftText={text} />
        <TouchableOpacity onPress={()=>onPressItem(i)}><Text style={remove}>X</Text></TouchableOpacity>
      </View>
    )
  }

  render() {
    const { list } = this.props
    return (
        <ScrollView>
          {list.map(this.renderItem)}
        </ScrollView>
    )
  }
}
