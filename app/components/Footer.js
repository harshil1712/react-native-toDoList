import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container:{
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding:15,
    height:50
  },
  textStyle:{
    color: '#e57373'
  }
})

export default class Footer extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Remove Completed Items</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
