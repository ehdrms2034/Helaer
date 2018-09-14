
import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View,
    TouchableOpacity, Image, ScrollView,
    ListView, TextInput,
    Dimensions
} from 'react-native';


type Props = {};
export default class DogamPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity style={styles.top_closebtn}>
                        <Image style={styles.top_closebtn_image}
                            source={require('./src/join_images/btn_close.png')} />
                    </TouchableOpacity>
                    <Image style={styles.top_title}
                        source={require('./src/dogam_images/title_dogam.png')} />
                </View>
                <View style={styles.contents}>
                    <View style={styles.contents_background}>
                        <Image />
                    </View>

                    <View style={styles.main_pre}>
                        <TouchableOpacity style={styles.main_pre_item}>
                            {/* FIXME: 여기 이전 캐릭터~! */}
                        </TouchableOpacity>
                    </View>

                    <View style={styles.main_next}>
                        <TouchableOpacity style={styles.main_next_item}>
                            {/* FIXME: 여기 다음 캐릭터~! */}
                        </TouchableOpacity>
                    </View>


                    <View style={styles.contents_arrowL}>
                        <TouchableOpacity style={styles.contents_arrow_btn}>
                            <Image style={styles.contents_arrow_image}
                                source={require('./src/dogam_images/icon_L_arrow.png')} />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.main_frame}>
                        <Image style={styles.main_image}
                            source={require('./src/main_images/robot.png')} />
                    </View>

                    <View style={styles.contents_arrowR}>
                        <TouchableOpacity style={styles.contents_arrow_btn}>
                            <Image style={styles.contents_arrow_image}
                                source={require('./src/dogam_images/icon_R_arrow.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottom_box}>
                        <Text style={styles.bottom_T_title}>발견 행성: 지구</Text>
                        <Text style={styles.bottom_T}>
                            어딘가 모자라지만 착한 인공지능이 탑재된 스마트폰.
                            유일한 기능은 표정으로 감정표현을 하며
                            사용자와 대화를 하는 것.
                            피를 모아서 사람이 되고자 한다.
                        </Text>
                        <Image style={styles.bottom_doco_LT}
                            source={require('./src/dogam_images/deco_I.png')} />
                        <Image style={styles.bottom_doco_RT}
                            source={require('./src/dogam_images/deco_D.png')} />
                        <Image style={styles.bottom_doco_LB}
                            source={require('./src/dogam_images/deco_D.png')} />
                        <Image style={styles.bottom_doco_RB}
                            source={require('./src/dogam_images/deco_I.png')} />
                    </View>
                    <View style={styles.bottom_title_box}>
                        <View style={styles.bottom_title}>
                            <View style={styles.bottom_L}>
                                <Text style={styles.bottom_L_T_B}>Lv.</Text>
                                <Text style={styles.bottom_L_T_Y}>1</Text>
                            </View>
                            <View style={styles.bottom_R}>
                                <Text style={styles.bottom_R_T}>스튜핏폰</Text>
                            </View>
                        </View>
                    </View>
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
    top: {
        width: '100%', height: 105.8,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    top_title: {
        width: 170.7, height: 49.4,
        marginTop: 18.2,
    },

    // 캐릭터
    contents: {
        width: deviceWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contents_background: {
        position: 'absolute',
        top: 230,
        width: 1000, height: 1000,
        borderTopLeftRadius: 1000 / 2,
        borderTopRightRadius: 1000 / 2,
        backgroundColor: '#7740ff',
    },
    main_pre: {
        position: 'absolute',
        width: 225, height: 211.7,
        left: -200,
        borderRadius: 10,
        backgroundColor: "rgba(112, 112, 112, 0.55)"
    },
    main_pre_item: {
        width: '100%', height: '100%'
    },
    main_next: {
        position: 'absolute',
        width: 225, height: 211.7,
        right: -200,
        borderRadius: 10,
        backgroundColor: "rgba(112, 112, 112, 0.55)"
    },
    main_next_item: {
        width: '100%', height: '100%'
    },
    contents_arrowL: {
        width: (deviceWidth - 184.5) / 2, height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 12.4,
    },
    contents_arrowR: {
        width: (deviceWidth - 184.5) / 2, height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 12.4
    },
    contents_arrow_btn: {
        width: 22.8, height: 40.6,
    },
    contents_arrow_image: {
        width: '100%', height: '100%',
        resizeMode: 'contain',
    },

    main_frame: {
        width: 199.3,
        height: 349.3,
        borderWidth: 5,
        borderColor: '#eee',
        borderRadius: 199.3 / 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    main_image: {
        width: 137.7,
        height: 203.3,
        resizeMode: 'contain',
        marginBottom: 30.7
    },

    // 하단 설명
    bottom: {
        flex: 1,
        width: deviceWidth,
        backgroundColor: '#7740ff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    //FIXME:borderradius 값 변경
    bottom_box: {
        width: 328.3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 4,
        marginTop: 18.6 / 2 + 6.8 * 2,
        padding: 20,
        paddingBottom: 30,
    },
    bottom_T_title: {
        color: '#fff',
        fontSize: 14.3,
        marginTop: 12.6 + 6.8
    },
    bottom_T: {
        color: '#fff',
        fontSize: 13.7,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 17.3,
        letterSpacing: -0.33,
        textAlign: "center",
        color: "#ffffff",
        marginTop: 12.6
    },
    // FIXME: 이미지 업데이트! 사이즈가 다름~!
    bottom_doco_LT: {
        position: 'absolute',
        width: 11.4, height: 11.4,
        resizeMode: 'contain',
        top: 8, left: 8
    },
    bottom_doco_RT: {
        position: 'absolute',
        width: 11.4, height: 11.4,
        resizeMode: 'contain',
        top: 8, right: 8
    },
    bottom_doco_LB: {
        position: 'absolute',
        width: 11.4, height: 11.4,
        resizeMode: 'contain',
        bottom: 8, left: 8
    },
    bottom_doco_RB: {
        position: 'absolute',
        width: 11.4, height: 11.4,
        resizeMode: 'contain',
        bottom: 8, right: 8
    },
    //타이틀
    bottom_title_box: {
        position: 'absolute',
        top: 6.8,
        width: 169.8 + 6.8, height: 31.1 + 6.8,
        marginLeft: (deviceWidth - (169.8 + 6.8)) / 2, marginRight: (deviceWidth - (169.8 + 6.8)) / 2,
        padding: 6.8,
        backgroundColor: '#7740ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom_title: {
        flexDirection: 'row',
        width: '100%', height: 31.1,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom_L: {
        flexDirection: 'row',
        width: '30 %',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#fff',
        borderRightWidth: 0.3
    },
    bottom_L_T_B: {
        color: '#666',
        fontSize: 19.3,
        fontWeight: 'bold'

    },
    bottom_L_T_Y: {
        color: '#ffcd1a',
        fontSize: 19.3,
        fontWeight: 'bold'
    },
    bottom_R: {
        width: '70 %',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom_R_T: {
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold'
    },
});