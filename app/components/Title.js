import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  toolBar:{
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 15,
    backgroundColor: '#90CAF9',
    elevation: 2,
    position: 'relative'
  },
  textStyle:{
    fontSize: 25.0,
    color: 'white'
  }
})

export default class Title extends Component {

  render() {
    return (
      <View style={styles.toolBar}>
        <Text style={styles.textStyle}>ToDo List</Text>
      </View>
    )
  }
}
