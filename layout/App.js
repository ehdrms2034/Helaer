

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
  TouchableOpacity, Image,
  AppRegistry
} from 'react-native';

import CircularProgress from './CircularProgress';


export default class main extends Component {

  render() {
    // FIXME:퍼센트로 바꿔야함!현재는 그냥 값...
    let expPercent = 87;

    let dDay = 18;

    return (
      <View style={styles.container}>

        {/* header - info */}
        <View style={styles.info}>
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
              <View style={styles.info_me_Exp_box}>
                <View style={[styles.info_me_Exp_box_bar, { width: expPercent }]} />
                <Text style={styles.info_me_Exp_box_T}>{expPercent}%</Text>
              </View>
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
              {/* 디데이 퍼센트 = (헌혈날짜 - 현재날짜)/ 30(전혈) * 100 */}
              <CircularProgress percent={dDay / 30 * 100} dDay={dDay} />
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

        {/* blood info */}
        <View style={styles.infoBubble}>
          <Image style={styles.infoBubble_top} source={require('./src/main_images/deco_bubble_top.png')} />
          <Text style={styles.infoBubble_T}>
            헌혈을 많이 하면 혈관이 좁아진다구?!{'\n'}
            노우, 스튜핏!! 바늘이 들어오면 순간적으로 수축하긴 해.{'\n'}
            근데 바로 회복되니까 슈퍼그뤠잇!</Text>
          <Image style={styles.infoBubble_bottom} source={require('./src/main_images/deco_bubble_bottom.png')} />
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
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    alignItems: 'flex-end',
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
    height: 8,
    backgroundColor: '#ffe3dd',
    borderRadius: 8 / 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 1.5,
      height: 1.5
    },
    shadowRadius: 1.5,
    elevation: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  info_me_Exp_box_bar: {
    height: '100%',
    position: 'absolute',
    top: 0, left: 0,
    borderRadius: 8 / 2,
    backgroundColor: '#ad6aef'
  },
  info_me_Exp_box_T: {
    fontSize: 7,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 8,
    letterSpacing: 0,
    textAlign: "left",
    color: '#000',
    textShadowColor: 'rgba(0, 0, 0, 0.16)',
    textShadowOffset: {
      width: 0,
      height: 1
    },
    textShadowRadius: 2

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

  },
  info_dDay_T_box: {
    width: 56.7, height: 56.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10.3
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
    borderWidth: 5,
    borderColor: '#eee',
    borderRadius: 199.3 / 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  main_image: {
    width: 137.7,
    height: 203.3,
    resizeMode: 'contain',
    marginBottom: 30.7
  },

  //  말풍선
  infoBubble: {
    position: 'absolute',
    top: 130, left: 37,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoBubble_top: {
    width: 235.9,
    height: 36.3,
    resizeMode: 'contain'
  },
  infoBubble_T: {
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 14.7,
    letterSpacing: 0,
    textAlign: "center",
    color: "#707070"
  },
  infoBubble_bottom: {
    width: 240.6,
    height: 42.3,
    resizeMode: 'contain'
  },


  // 버튼
  bottom: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    alignItems: 'center',
  },
  image: {
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


