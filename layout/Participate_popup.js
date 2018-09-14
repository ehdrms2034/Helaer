
import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
  TouchableOpacity, Image,
  ListView, TextInput, ScrollView,
  Dimensions
} from 'react-native';

import Hr from 'react-native-hr-plus';


type Props = {};
export default class app extends Component<Props> {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.header_T}>참여하기</Text>
            <TouchableOpacity style={styles.header_btn}>
              <Image style={styles.header_btn_image}
                source={require('./src/camera_images/btn_close.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.contents}>
            <Image style={styles.headDeco_L}
              source={require('./src/camera_images/deco_header_L.png')} />
            <Image style={styles.headDeco_L_arrow}
              source={require('./src/camera_images/deco_heartArrow_line.png')} />
            <Image style={styles.headDeco_R_arrow}
              source={require('./src/camera_images/deco_heartArrow.png')} />
            <Image style={styles.headDeco_R}
              source={require('./src/camera_images/deco_header_R.png')} />

            <Text style={styles.contents_title_T}>추천인 ID 입력</Text>
            <Text style={styles.contents_talk_T}>함께 달리면 더 많이 쌓이는 경험치 !{'\n'}
              바톤을 넘겨 준 친구가 있으신가요?</Text>

            <View style={styles.contents_input_box}>
              <TextInput style={styles.contents_input}
                placeholder="친구의 ID를 입력해주세요."
                placeholderStyle={{
                  flex: 1,
                  fontSize: 14.7,
                  fontWeight: "normal",
                  fontStyle: "normal",
                  lineHeight: 18.7,
                  letterSpacing: -0.35,
                  textAlign: "center",
                  color: "#707070"
                }}
              />
            </View>

            <View style={styles.section}>
              <Hr color='#fff' width={1}>
                <Text style={styles.section_T}>OR</Text>
              </Hr>
            </View>

            <Text style={styles.contents_title_T}>헌혈증 바로 인증하기</Text>
            <Text style={styles.contents_talk_T}>헌혈증의 바코드가 나오도록{'\n'}
              프레임에 맞게 찍어주세요.</Text>

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
      </ScrollView>
    );
  }
}

let deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#7740ff',
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingTop: 15
  },
  headDeco_L: {
    width: 44.3,
    height: 84,
    position: 'absolute',
    left: 0, top: 36,
    resizeMode: 'contain'
  },
  headDeco_L_arrow: {
    position: 'absolute',
    left: 51, top: 58.6,
    width: 41.1,
    height: 25.9,
    resizeMode: 'contain'
  },
  headDeco_R_arrow: {
    position: 'absolute',
    right: 51, top: 58.6,
    width: 44.2,
    height: 25.9,
    resizeMode: 'contain'
  },
  headDeco_R: {
    width: 44.3,
    height: 84,
    position: 'absolute',
    right: 0, top: 36,
    resizeMode: 'contain'
  },
  contents_title_T: {
    fontSize: 26.7,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 33.3,
    letterSpacing: -0.64,
    textAlign: "center",
    color: "#ffffff",
    marginBottom: 30,
    marginTop: 43.3,
  },
  contents_talk_T: {
    fontSize: 14.7,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 18.7,
    letterSpacing: -0.35,
    textAlign: "center",
    color: "#ffffff",
    marginBottom: 28,
  },
  contents_input_box: {
    marginBottom: 35.4,
    width: 247.3,
    height: 40.7,
    borderRadius: 7.7,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  contents_input: {
    flex: 1,
    fontSize: 14.7,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18.7,
    letterSpacing: -0.35,
    textAlign: "center",
    color: "#333"

  },


  section: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section_T: {
    color: '#fff',
    fontSize: 14.7,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 17,
    letterSpacing: -0.35,
    textAlign: "left",
    color: "#ffffff",
    marginLeft: 15.1, marginRight: 15.1,
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
  }

});