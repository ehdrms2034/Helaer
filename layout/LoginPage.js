
import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
  TouchableOpacity, Image,
  ListView, TextInput,
  Dimensions
} from 'react-native';

import Hr from 'react-native-hr-plus';


type Props = {};
export default class LoginPage extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Image source={require('./src/logo.png')}
              style={styles.logo_image} />
          </View>
        </View>

        <View style={styles.contents}>
          <Text style={styles.contents_title_T}>아이디</Text>
          <TextInput style={styles.contents_input}
            underlineColorAndroid='#ffffffff' />

          <Text style={styles.contents_title_T}>비밀번호</Text>
          <TextInput style={styles.contents_input}
            underlineColorAndroid='#ffffffff'
            secureTextEntry={true} />

          <View style={styles.contents_btn_box}>
            <TouchableOpacity style={styles.contents_btn}>
              <Text style={styles.contents_btn_T}>비밀번호 찾기</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button_Login}>
            <Text style={styles.button_Login_T}>LOGIN</Text>
          </TouchableOpacity>
          <View style={styles.section}>
            <Hr color='#707070' width={0.5}>
              <Text style={styles.section_T}>OR</Text>
            </Hr>
          </View>
          <TouchableOpacity style={styles.button_Kakao}>
            <Image style={styles.button_Kakao_image} />
            <Text style={styles.button_Kakao_T}>카카오톡으로 로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_Join}>
            <Text style={styles.button_Join_T}>가입하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

let deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 헤더 - 로고
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120, height: 120,
    marginTop: 46.6, marginBottom: 52.7,
    borderRadius: 60,
    backgroundColor: "#ffffff",
    margin: 12,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1.5,
      height: 1.5
    },
    shadowRadius: 10,
    elevation: 2

  },
  logo_image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },

  // 아이디, 비밀번호 입력창
  contents: {
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  contents_title_T: {
    color: '#707070',
    fontSize: 11.3,
    marginBottom: 5,
    marginTop: 16
  },
  contents_input: {
    width: '100%', height: 40,
    marginBottom: 3,
    borderBottomColor: '#707070',
    borderBottomWidth: 0.3,
    color: '#707070',
    fontSize: 16.7,
  },
  contents_btn_box: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  contents_btn: {},
  contents_btn_T: {
    color: '#707070',
    fontSize: 12,
  },

  // 버튼들
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button_Login: {
    width: 202, height: 39.6,
    borderRadius: 8.3,
    backgroundColor: '#7740ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40.7
  },
  button_Login_T: {
    color: '#fff',
    fontSize: 19.7
  },

  section: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  section_T: {
    color: '#707070',
    fontSize: 12,
    marginLeft: 15.1, marginRight: 15.1
  },

  button_Kakao: {
    width: 163.6, height: 34.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8.3,
    borderColor: '#ffcd1a',
    borderWidth: 1.3,
  },
  button_Kakao_image: {},
  button_Kakao_T: {
    color: '#707070',
    fontSize: 13.3
  },
  button_Join: {
    width: 163.6, height: 34.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8.3,
    backgroundColor: '#ad6aef',
    marginBottom: 73.1
  },
  button_Join_T: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  }

});