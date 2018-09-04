

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
  TouchableOpacity, Image,
  AppRegistry
} from 'react-native';

import { Provider } from "mobx-react";
import stores from "./mobx/listStore";

import { createStackNavigator } from 'react-navigation';
import Relay from './Relay';
import main from './main';
import Login from './Component/LoginPage/Loginpage'
import Barcode from './Component/BarcodeScanner/BarcodeCamera';



export default class App extends Component {


    render(){
        
        return(    
            <Provider {...stores}>
            <AppNavigator/>
            </Provider>
        )

    }

}


const AppNavigator = createStackNavigator({ 
    LoginScreen: {screen:Login},
    HomeScreen: { screen: main },
    RelayScreen: { screen: Relay },
    BarcodeScreen: {screen : Barcode},
    
  },{
    headerMode: "none"
  });
  