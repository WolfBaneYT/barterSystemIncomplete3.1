import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserSignUpOrLogin from './screens/UserSignUpOrLoginScreen';

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
  }
}

