/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Splash from './app/components/Splash.js';


export default class myapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Splash name="Brandon"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    marginTop: 250
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myapp', () => myapp);

// <Text style={styles.welcome}>
//   Welcome to React Native!
// </Text>
// <Text style={styles.instructions}>
//   To get started, edit index.ios.js
// </Text>
// <Text style={styles.instructions}>
//   Press Cmd+R to reload,{'\n'}
//   Cmd+D or shake for dev menu
// </Text>

// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
