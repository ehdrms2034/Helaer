/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  CameraRoll,
  Modal
} from 'react-native';
import BarcodeCamera from './Component/BarcodeScanner/BarcodeCamera'
import Custommodal from './Component/Custommodal/Custommodal';
import Joinpage from './Component/JoinPage/Joinpage'
import RoomView from './Component/RoomView/RoomView'
import JoinRoom from './Component/JoinRoom/JoinRoom';
import LoginPage from './Component/LoginPage/Loginpage';

export default class App extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        <Custommodal/>
        <Joinpage/>
        <BarcodeCamera/>
        <RoomView/>
        <JoinRoom/>
        <LoginPage/>
      </View>
   );
  }

  

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  hello : {
    flex : 1,
    flexDirection : 'row'
  },
  row:{
    flex:1
  }
  
});