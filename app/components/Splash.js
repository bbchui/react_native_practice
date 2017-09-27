import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class Splash extends Component{
  constructor(props) {
    super(props);
    this.state = {name: "Brandon Chui"}
  }

  onPress() {
    console.log('Area Pressed');
  }

  render() {
    return(
      <View style={styles.myView}>
        <TouchableHighlight onPress={this.onPress}>
          <Text style={styles.myText}>{this.state.name}</Text>
        </TouchableHighlight>

        <Text style={styles.myText}>Box 2</Text>
        <Text style={styles.myText}>Box 3</Text>
      </View>
    );
  }



}


const styles = StyleSheet.create({
  myText: {
    color:'red',
    backgroundColor:'black',
    padding: 10
  },

  myView: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
