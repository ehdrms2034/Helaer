import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View,
    TouchableOpacity, Image, ScrollView,
    ListView, TextInput,
    Dimensions
} from 'react-native';

type Props = {};
export default class OtherLine extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>


                <View style={styles.top_contents}>
                    <View style={styles.top_contents_L}>
                        <Image style={styles.top_contents_image}
                            source={require('./src/detail_images/relay.png')} />
                        <Text style={styles.top_contents_L_T}>럽미럽미</Text>
                    </View>
                    <View style={styles.top_contents_R_group}>
                        <Text style={styles.top_contents_R_group_T}>23분 전</Text>
                        <View style={styles.top_contents_R}>
                            <Text style={styles.top_contents_R_T_Y}>12명</Text>
                            <Text style={styles.top_contents_R_T_r}>과 함께 달리고 있습니다.</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.top_contents_box}>
                    <Text style={styles.top_contents_box_T_b}>방소개</Text>
                    <Text style={styles.top_contents_box_T_r}>
                        첫 눈에 널 알아보게 돼써 서롤 불러 왔던 것처럼
                        바톤 넘기는 방임 스겜스겜
                        </Text>
                    <Image style={styles.bottom_doco_LT}
                        source={require('./src/detail_images/deco_I.png')} />
                    <Image style={styles.bottom_doco_RT}
                        source={require('./src/detail_images/deco_D.png')} />
                    <Image style={styles.bottom_doco_LB}
                        source={require('./src/detail_images/deco_D.png')} />
                    <Image style={styles.bottom_doco_RB}
                        source={require('./src/detail_images/deco_I.png')} />
                </View>

                <View style={styles.top_toss}>
                    <TouchableOpacity style={styles.top_toss_btn}>
                        <Text style={styles.top_toss_btn_T}>참여하기</Text>
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
    },

    top_contents: {
        width: deviceWidth - 25 * 2,
        marginRight: 25, marginLeft: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40.7, marginBottom: 11.3
    },
    top_contents_L: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    top_contents_image: {
        width: 30.7,
        height: 20.7,
        resizeMode: 'contain',
        marginRight: 3.6,
    },
    top_contents_L_T: {
        fontSize: 16.7,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: -0.4,
        textAlign: "center",
        color: "#000000"
    },
    top_contents_R_group: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    top_contents_R_group_T: {
        fontSize: 10.7,
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: -0.26,
        textAlign: "right",
        color: '#7740ff'
    },
    top_contents_R: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    top_contents_R_T_Y: {
        fontSize: 12.7,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.3,
        textAlign: "center",
        color: '#ffcd1a',
        marginRight: 2
    },
    top_contents_R_T_r: {
        fontSize: 10,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.24,
        textAlign: "center",
        color: '#333'
    },


    top_contents_box: {
        width: deviceWidth - 30 * 2,
        marginRight: 30, marginLeft: 30,
        borderColor: '#7740ff',
        borderStyle: "solid",
        borderWidth: 5,
        borderRadius: 15,
        padding: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    top_contents_box_T_b: {
        fontSize: 11.3,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: -0.27,
        textAlign: "center",
        color: "#000000"

    },
    top_contents_box_T_r: {
        marginTop: 6.7,
        fontSize: 12.7,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.3,
        textAlign: "center",
        color: "#333"

    },
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


    top_toss: {
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
        marginTop: 26.3,
    },
    top_toss_btn: {
        width: 101.3,
        height: 33.7,
        borderRadius: 17,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: '#7740ff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    top_toss_btn_T: {
        fontSize: 13.3,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.32,
        textAlign: "center",
        color: '#7740ff'
    },
});