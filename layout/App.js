

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
  TouchableOpacity, Image,
  AppRegistry
} from 'react-native';

export default class main extends Component {

  render() {
    return (
      <View style={styles.container}>

        {/* header - info */}
        <View style={styles.info}>
          {/* FIXME: 세로 정렬 맞추기  */}
          <View style={styles.info_me}>
            <View style={styles.info_me_Lv}>
              <Image source={require('./src/main_images/icon_lv.png')}
                style={styles.info_me_Lv_image} />
              <View style={styles.info_me_Lv_T}>
                <Text style={styles.info_me_Lv_T_Lv}>Lv.</Text>
                <Text style={styles.info_me_Lv_T_LvR}>2</Text>
                <Text style={styles.info_me_Lv_T_Id}>호야니</Text>
              </View>
            </View>
            <View style={styles.info_me_Exp}>
              <Text style={styles.info_me_Exp_T_Exp}>EXP</Text>
              <View style={styles.info_me_Exp_box}></View>
            </View>
            <View style={styles.info_me_Spot}>
              <Image source={require('./src/main_images/icon_spot.png')}
                style={styles.info_me_Spot_image} />
              <Text style={styles.info_me_Spot_T} >부산대학로 센터</Text>
            </View>
          </View>
          {/* TODO: progressive circle */}
          <View style={styles.info_dDay}>
            <Text style={styles.info_dDay_T_title}>다음 헌혈까지</Text>
            <View style={styles.info_dDay_T_box}>
              <Text style={styles.info_dDay_T_count}>D-15</Text>
            </View>
          </View>
        </View>

        {/* main - character */}
        <View style={styles.main}>
          <Image style={styles.main_back_imageL}
            source={require('./src/main_images/back_L.png')} />
          <Image style={styles.main_back_imageR}
            source={require('./src/main_images/back_R.png')} />
          <View style={styles.main_frame}>
            <Image style={styles.main_image}
              source={require('./src/main_images/robot.png')} />
          </View>
        </View>

        {/* bottom - buttons */}
        <View style={styles.bottom}>
          <TouchableOpacity
            style={[styles.button, styles.btn1]}
            onPress={() => { alert("this is clicked!") }}>
            <Image source={require('./src/main_images/btn1_record.png')}
              style={[styles.image, styles.btn1_image]} />
            <Text style={styles.buttonText}>헌혈기록</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.btn2]}>
            <Image source={require('./src/main_images/btn2_relay.png')}
              style={[styles.image, styles.btn2_image]} />
            <Text style={styles.buttonText}>릴레이</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.btn3]}
            onPress={() => { alert("this is clicked!") }}>
            <Image source={require('./src/main_images/btn3_camera.png')}
              style={[styles.image, styles.btn3_image]} />
            <Text style={styles.buttonText}>헌혈인증</Text>
          </TouchableOpacity >
        </View >

      </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#fff'
  },

  // 사용자 정보 섹션
  info: {
    width: '100%', height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // 사용자 정보 섹션 - 1 
  info_me: {
    position: 'absolute',
    left: 30, top: 30, width: 150,
  },
  info_me_Lv: {
    height: 28,
    flexDirection: 'row',
    marginBottom: 5.3
  },
  info_me_Lv_image: {
    width: 20.2,
    height: 20.2,
    resizeMode: 'contain',
    marginRight: 6.5,
  },
  info_me_Lv_T: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  info_me_Lv_T_Lv: {
    color: '#666',
    fontSize: 23.7,
    fontWeight: "800",
    fontStyle: "italic",
    letterSpacing: 0,
    textAlign: "left",
  },
  info_me_Lv_T_LvR: {
    color: '#ff6443',
    fontSize: 23.7,
    marginRight: 6.5,
    fontWeight: "800",
    fontStyle: "italic",
    letterSpacing: 0,
    textAlign: "left",
  },
  info_me_Lv_T_Id: {
    color: '#333',
    fontSize: 18,
    textAlignVertical: 'bottom',
  },

  // 사용자 정보 섹션 - 2
  info_me_Exp: {
    height: 10.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 9.5
  },
  info_me_Exp_T_Exp: {
    color: '#333',
    fontSize: 10.3,
    fontFamily: 'Helvetica',
    marginRight: 3.5,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 12.3,
    letterSpacing: 0,
    textAlign: "left",

  },
  info_me_Exp_box: {
    width: 116.8,
    height: 7.1,
    backgroundColor: '#ffe3dd'
  },

  // 사용자 정보 섹션 - 3
  info_me_Spot: {
    height: 17.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  info_me_Spot_image: {
    width: 9.8,
    marginLeft: 8.1,
    marginRight: 8.1,
    resizeMode: 'contain'
  },
  info_dDay_T_box: {
    width: 56.7,
    height: 56.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info_me_Spot_T: {
    color: '#333',
    fontSize: 16
  },


  // 헌혈 디데이
  info_dDay: {
    position: 'absolute',
    right: 30, top: 30, width: 90, height: '100%',
    alignItems: 'center'
  },
  info_dDay_T_title: {
    textAlign: 'center',
    color: '#000',
    fontSize: 12.3,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 13.7,
    letterSpacing: 0,
    textAlign: "center",

  },
  info_dDay_T_count: {
    color: '#000',
    fontSize: 21,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 24.7,
    letterSpacing: 0,
    textAlign: "left",
    textShadowColor: "rgba(0, 0, 0, 0.16)",
    textShadowOffset: {
      width: 0,
      height: 1
    },
    textShadowRadius: 2
  },

  // 캐릭터
  main: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  main_back_imageL: {
    position: 'absolute',
    width: 82.2,
    height: 349.6,
    resizeMode: 'contain',
    left: 10
  },
  main_back_imageR: {
    position: 'absolute',
    width: 76.2,
    height: 372.2,
    resizeMode: 'contain',
    right: 10
  },
  main_frame: {
    width: 199.3,
    height: 349.3,
    borderWidth: 10,
    borderColor: '#ccc',
    borderRadius: 199.3 / 2
  },
  main_image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 199.3 / 2
  },
  // 버튼
  bottom: {
    height: 147.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  buttonText: {
    color: '#000',
    fontSize: 13.7,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 15.3,
    letterSpacing: 0,
    textAlign: "left",

  },


  btn1_image: {
    width: 58.8,
    height: 66,

  },
  btn2_image: {
    width: 93.8,
    height: 75.5,
  },
  btn3_image: {
    width: 69.2,
    height: 62,
  },
  btn1: {
    marginBottom: 38.3,
  },
  btn2: {
    marginBottom: 32.3,
  },
  btn3: {
    marginBottom: 38.3,
  },

});


