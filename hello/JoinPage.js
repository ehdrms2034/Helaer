
import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View,
    TouchableOpacity, Image, ScrollView,
    ListView, TextInput,
    Dimensions
} from 'react-native';

import Hr from 'react-native-hr-plus';


export default class LoginPage extends Component {

    state={
        
        name: '',
        nickname: '',
        birth: '',
        sex: '',
        bloodType:'',
        id: '',
        passwd: '',
        passwd2 : '',
        last_login:'',
        id_check: false,
        passwd_check: false,
        check : false,


    }


    id_check_method = ()=>{
        //id 중복체크
          let id = this.state.id;
          let xhr_http="http://220.230.118.245:3000/user/findOne?user_id="+id;
          let hi = new Promise ((resolve,reject)=>{
              let id=this.state.id;
              resolve(id);
          });
          hi.then((id)=>{
          fetch(xhr_http)
          .then( (response)=>
                  {
                  if(response.status !==200){
                      alert("서버와 연결 되지 않음.");
                      return ;
                  }
  
              response.json().then(
                          (data)=>{
                          if(!data) {
                            this.setState({id_check : true});// 중복된 아이디가 없는경우
                            console.log("아이디 중복확인 통과");
                             return;}
                          if(id==data.user_id){ // 중복된 아이디가 있는경우
                            alert("중복되는 아이디가 존재합니다.")}
                            this.setState({id:''});
                      }
                  );
              }
          )}
      )
      }


    check_complete =() =>{
        if(this.state.id=='') {alert("아이디가 공백입니다."); return;} //아이디 중복체크 부분 만들자

        if(this.state.id_check==false) {alert("id중복 체크를 확인해주세요."); return; } //아이디 중복체크 부분 만들자

        if(this.state.passwd==''){alert("비밀번호가 공백입니다."); return; }

        if(this.state.birth==''){alert("생년월일이 공백입니다."); return;}

        if(this.state.sex==''){alert("성별을 선택해주세요"); return;}

        if(this.state.bloodType==''){alert("혈액형을 선택해주세요"); return;}

        if(this.state.nickname==''){alert("닉네임이 공백입니다."); return;}

        if(this.state.passwd!=this.state.passwd2){
            alert("비밀번호가 동일하지 않습니다. "); return;
        }

        //이제 fetch 해서 post로 보내자.
        fetch('http://220.230.118.245:3000/user/insertOne', {
         method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            user_id : this.state.id,
            user_name : this.state.name,
            user_nickname : this.state.nickname,
            user_passwd : this.state.passwd,
            user_sex : this.state.sex,
            user_birth :this.state.birth,
            user_blood_type : this.bloodType,


        }),
    }).then(()=>{
        alert("회원가입 완료");
        this.props.navigation.navigate("LoginScreen");
    });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <TouchableOpacity style={styles.top_closebtn}
                                          onPress={()=>{this.props.navigation.navigate("LoginScreen")}}>
                            <Image style={styles.top_closebtn_image}
                                source={require('./src/join_images/btn_close.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contents_View}>
                        <View style={styles.contents_header}>
                            <Text style={styles.contents_header_T}>회원가입</Text>
                        </View>
                        <View style={styles.contents}>
                            <Text style={styles.contents_title_T}>이름</Text>
                            <TextInput style={styles.contents_input}
                                placeholder="실명을 입력해주세요"
                                placeholderTextColor='#fff'
                                underlineColorAndroid='#7740ff'
                                onChangeText={(text)=>{this.setState({name : text});}}
                                />
                            <Text style={styles.contents_title_T}>닉네임</Text>
                            <TextInput style={styles.contents_input} 
                                        onChangeText={(text)=>{this.setState({nickname : text});}} />
                            <Text style={styles.contents_title_T}>생년월일</Text>
                            <TextInput style={styles.contents_input}
                                        onChangeText={(text)=>{this.setState({birth : text});}} />
                            <Text style={styles.contents_title_T}
                                  onChangeText={(text)=>{this.setState({sex : text});}} >성별</Text>
                            <View style={styles.btnGroup1}>
                                <TouchableOpacity style={styles.btnGroup_sex}
                                                 onPress={()=>{this.setState({sex : ('Man')});}}>
                                    <Image style={styles.btnGroup_sex_image}
                                        source={require('./src/join_images/btn_man.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnGroup_sex}
                                                  onPress={()=>{this.setState({sex : ('Woman')});}}>
                                    <Image style={styles.btnGroup_sex_image}
                                        source={require('./src/join_images/btn_woman.png')} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.contents_title_T}>혈액형</Text>
                            <View style={styles.btnGroup2}>
                                <View style={styles.btnGroup_column}>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}
                                                onPress={()=>{this.setState({bloodType : ('A+')});}}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_a+.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}
                                                    onPress={()=>{this.setState({bloodType : ('B+')});}}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_b+.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}
                                        onPress={()=>{this.setState({bloodType : ('O+')});}}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_o+.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}
                                    onPress={()=>{this.setState({bloodType : ('AB+')});}}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_ab+.png')} />
                                    </TouchableOpacity>

                                </View>
                                <View style={styles.btnGroup_column}>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}
                                                    onPress={()=>{this.setState({bloodType : ('A-')});}}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_a-.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}
                                    onPress={()=>{this.setState({bloodType : ('B-')});}}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_b-.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}
                                    onPress={()=>{this.setState({bloodType : ('O-')});}}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_o-.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}
                                    onPress={()=>{this.setState({bloodType : ('AB-')});}}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_ab-.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Text style={styles.contents_title_T}>아이디</Text>
                            <TextInput style={styles.contents_input}
                                       onChangeText={(text)=>{this.setState({id : text , id_check:false});}}
                                       onEndEditing={this.id_check_method}
                                       value={this.state.id} />
                            <Text style={styles.contents_title_T}
                                secureTextEntry={true}>비밀번호</Text>
                            <TextInput style={styles.contents_input}
                                placeholder="영문, 숫자 포함 7자리 이상 입력해주세요"
                                placeholderTextColor='#fff'
                                secureTextEntry={true}
                                onChangeText={(text)=>{this.setState({passwd : text});}} />
                            <Text style={styles.contents_title_T}>비밀번호 확인</Text>
                            <TextInput style={styles.contents_input}
                            onChangeText={(text)=>{this.setState({passwd2 : text});}}
                                secureTextEntry={true} />

                        </View>

                        <TouchableOpacity style={styles.btn_Join}
                                onPress={this.check_complete}>
                            <Text style={styles.btn_Join_T}>가입하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
    top: {
        width: '100%', height: 105.8,
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    top_closebtn: {
        width: 19.2, height: 17.1,
        position: 'absolute',
        right: 15.8, top: 11.1
    },
    top_closebtn_image: {
        width: '100%', height: '100%',
        resizeMode: 'contain'
    },

    contents_View: {
        width: '100%',
        backgroundColor: '#7740ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // TODO:백그라운드 half circle ~!!!
    contents_header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contents_header_T: {
        color: '#fff',
        fontSize: 20,
        marginTop: 24, marginBottom: 24
    },

    contents: {
        width: '80%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    contents_title_T: {
        color: '#fff',
        fontSize: 11.3,
        marginBottom: 12.8,
    },
    contents_input: {
        width: '100%', height: 30,
        marginBottom: 27,
        borderBottomColor: '#fff',
        borderBottomWidth: 0.3,

        color: '#fff',
        fontSize: 16.7,
    },
    btnGroup1: {
        width: '100%',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 27,
    },
    btnGroup2: {
        padding: 16,
        marginBottom: 27,
    },
    btnGroup_sex: {
        width: 99, height: 34,
        borderRadius: 17,
        borderColor: '#fff',
        borderWidth: 0.3,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    btnGroup_sex_image: {
        width: '100%', height: '100%',
        resizeMode: 'contain'
    },
    btnGroup_column: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 13.4
    },
    btnGroup_bloodtype_btn: {
        width: 50, height: 50,
    },
    btnGroup_bloodtype_image: {
        width: '100%', height: '100%',
        resizeMode: 'contain'
    },

    btn_Join: {
        width: 202, height: 39.6,
        borderRadius: 8.3,
        borderColor: '#fff',
        borderWidth: 1.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 38.4, marginTop: 50
    },
    btn_Join_T: {
        color: '#fff',
        fontSize: 19.7
    },

});