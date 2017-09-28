import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class Splash extends Component{
  constructor(props) {
    super(props);
    this.state = {name: "Brandon"}
  }

  onPress() {
    console.log('Pressed');
  }

  onPress2() {
    console.log('Pressed 2');
  }

  onPress3() {
    console.log('Pressed 3');
  }

  render() {
    return(
      <View style={styles.mainView}>

        <View style={styles.myView}>
          <TouchableHighlight
              onPress={this.onPress}
              underlayColor="blue">
            <Text style={styles.myText}>{this.state.name}</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.myView}>
          <TouchableHighlight
              onPress={this.onPress}
              underlayColor="blue">
            <Text style={styles.myText}>Box 2</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.myView}>
          <TouchableHighlight
              onPress={this.onPress}
              underlayColor="blue">
            <Text style={styles.myText}>Box 3</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }

}


const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row'
  },

  myText: {
    color:'black',
    padding: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1
  },

  myView: {
    justifyContent: 'center',
    borderColor: 'black',
    borderStyle: 'solid'
  }
})
