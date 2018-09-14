
import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
  TouchableOpacity, Image,
  ListView, TextInput,
  Dimensions
} from 'react-native';


type Props = {};
export default class app extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_T}>헌혈인증</Text>
          <TouchableOpacity style={styles.header_btn}>
            <Image style={styles.header_btn_image}
              source={require('./src/camera_images/btn_close.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.contents}>
          <Text style={styles.contents_T}>
            헌혈증의 바코드가 나오도록{'\n'}
            프레임에 맞게 찍어주세요.
              </Text>
          <View style={styles.camera}>
            <View style={styles.camera_frame_LT} />
            <View style={styles.camera_frame_RT} />
            <View style={styles.camera_frame_LB} />
            <View style={styles.camera_frame_RB} />
          </View>
        </View>
        <View style={styles.backgroundWhite} />
        <TouchableOpacity style={styles.camera_btn}>
          <Image style={styles.camera_btn_image}
            source={require('./src/camera_images/btn_icon_camera.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

let deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#7740ff',
    alignItems: 'center',
  },
  header: {
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10.8, paddingBottom: 10.8,
  },
  header_T: {
    fontSize: 16.7,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 19.3,
    letterSpacing: -0.4,
    textAlign: "center",
    color: "#ffffff",
  },
  header_btn: {
    width: 19.2,
    height: 17.1,
    position: 'absolute',
    right: 15.8, top: 11.1
  },
  header_btn_image: {
    width: '100%',
    height: '100%',
  },

  contents: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contents_T: {
    fontSize: 26.7,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 33.3,
    letterSpacing: -0.64,
    textAlign: "center",
    color: "#ffffff",
    marginTop: 50, marginBottom: 29.6
  },

  camera: {
    width: deviceWidth,
    height: 255.3,
    marginTop: 8,
    backgroundColor: '#fff',
    marginBottom: 71.1
  },
  camera_frame_LT: {
    width: 26.8,
    height: 27.4,
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: '#ff6544',
    borderTopColor: '#ff6544',
    borderWidth: 8,
    position: 'absolute',
    top: 20.7, left: 19.2,

  },
  camera_frame_RT: {
    width: 26.8,
    height: 27.4,
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: '#ff6544',
    borderTopColor: '#ff6544',
    borderWidth: 8,
    position: 'absolute',
    top: 20.7, right: 19.2

  },
  camera_frame_LB: {
    width: 26.8,
    height: 27.4,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: '#ff6544',
    borderBottomColor: '#ff6544',
    borderWidth: 8,
    position: 'absolute',
    bottom: 20.7, left: 19.2,
  },
  camera_frame_RB: {
    width: 26.8,
    height: 27.4,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: '#ff6544',
    borderRightColor: '#ff6544',
    borderWidth: 8,
    position: 'absolute',
    bottom: 20.7, right: 19.2,
  },
  camera_btn: {
    width: 82.7,
    height: 82.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 82.7 / 2,
    borderColor: '#fff',
    borderWidth: 2.3,
    backgroundColor: '#7740ff',
    position: 'absolute',
    bottom: 79.7
  },
  camera_btn_image: {
    width: 40.8,
    height: 33.5,
    resizeMode: 'contain',
  },
  backgroundWhite: {
    backgroundColor: '#fff',
    width: deviceWidth, height: 121,
    position: 'absolute',
    bottom: 0
  }

});