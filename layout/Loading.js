

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
  Image,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/logo.png')}
          style={styles.logo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 141.3,
    height: 141.3,
    resizeMode: 'contain'
  }
});