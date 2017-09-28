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

        <TouchableHighlight
          onPress={this.onPress}
          underlayColor="blue">
          <View style={styles.myView}>
            <Text style={styles.myText}>{this.state.name}</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.onPress2}
          underlayColor="blue">
          <View style={styles.myView}>
              <Text style={styles.myText}>Box 2</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.onPress3}
          underlayColor="blue">
          <View style={styles.myView}>
              <Text style={styles.myText}>Box 3</Text>
          </View>
        </TouchableHighlight>

      </View>
    );
  }

}


const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
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
    borderStyle: 'solid',
    height: 50,
    flex: 1
  }
})
