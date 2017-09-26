import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Splash from './app/components/Splash.js';

export default class myapp extends Component{
  render() {
    return(
      <View>
        <Splash name="Brandon"/>
      </View>
    );
  }
}

AppRegistry.registerComponent('myapp', () => myapp);
