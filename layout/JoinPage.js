
import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View,
    TouchableOpacity, Image, ScrollView,
    ListView, TextInput,
    Dimensions
} from 'react-native';

import Hr from 'react-native-hr-plus';


type Props = {};
export default class LoginPage extends Component<Props> {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <TouchableOpacity style={styles.top_closebtn}>
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
                                placeholderTextColor='#fff' />
                            <Text style={styles.contents_title_T}>닉네임</Text>
                            <TextInput style={styles.contents_input} />
                            <Text style={styles.contents_title_T}>생년월일</Text>
                            <TextInput style={styles.contents_input} />
                            <Text style={styles.contents_title_T}>성별</Text>
                            <View style={styles.btnGroup1}>
                                <TouchableOpacity style={styles.btnGroup_sex}>
                                    <Image style={styles.btnGroup_sex_image}
                                        source={require('./src/join_images/btn_man.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnGroup_sex}>
                                    <Image style={styles.btnGroup_sex_image}
                                        source={require('./src/join_images/btn_woman.png')} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.contents_title_T}>혈액형</Text>
                            <View style={styles.btnGroup2}>
                                <View style={styles.btnGroup_column}>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_a+.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_b+.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_o+.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_ab+.png')} />
                                    </TouchableOpacity>

                                </View>
                                <View style={styles.btnGroup_column}>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_a-.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_b-.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_o-.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnGroup_bloodtype_btn}>
                                        <Image style={styles.btnGroup_bloodtype_image}
                                            source={require('./src/join_images/btn_ab-.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Text style={styles.contents_title_T}>아이디</Text>
                            <TextInput style={styles.contents_input} />
                            <Text style={styles.contents_title_T}
                                secureTextEntry={true}>비밀번호</Text>
                            <TextInput style={styles.contents_input}
                                placeholder="영문, 숫자 포함 7자리 이상 입력해주세요"
                                placeholderTextColor='#fff'
                                secureTextEntry={true} />
                            <Text style={styles.contents_title_T}>비밀번호 확인</Text>
                            <TextInput style={styles.contents_input}
                                secureTextEntry={true} />

                        </View>

                        <TouchableOpacity style={styles.btn_Join}>
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