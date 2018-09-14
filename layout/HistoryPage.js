
import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View,
    TouchableOpacity, Image, ScrollView,
    ListView, TextInput,
    Dimensions
} from 'react-native';

import HistoryList from './HistoryList';

type Props = {};
export default class HistoryPage extends Component<Props> {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container_box}>
                    <View style={styles.top_header}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}
                            style={styles.top_header_btn}>
                            <Image source={require('./src/history_images/icon_arrow_back.png')}
                                style={styles.top_header_image} />
                        </TouchableOpacity>
                        <View style={styles.top_header_title}>
                            <Text style={styles.top_header_T}>릴레이</Text>
                        </View>
                    </View>

                    <Image source={require('./src/history_images/deco_back_L.png')}
                        style={styles.deco_back_L} />
                    <Image source={require('./src/history_images/deco_back_R.png')}
                        style={styles.deco_back_R} />

                    <View style={styles.top_info}>
                        <View style={styles.top_info_1}>
                            <View style={styles.top_info_1_L}>
                                <Image style={styles.top_info_1_L_image}
                                    source={require('./src/history_images/bloodtype_a.png')} />
                                <Image style={styles.top_info_1_L_deco_image}
                                    source={require('./src/history_images/deco_beat.png')} />
                            </View>
                            <View style={styles.top_info_1_R}>
                                <View style={styles.top_info_1_R_lv}>
                                    <Text style={styles.top_info_1_R_lv_b}>Lv.</Text>
                                    <Text style={styles.top_info_1_R_lv_r}>2</Text>
                                </View>
                                <Text style={styles.top_info_1_R_name}>호야니</Text>
                            </View>
                        </View>

                        <View style={styles.top_info_2}>
                            <Text style={styles.top_info_2_title}>자주 가는 헌혈의 집</Text>
                            <View style={styles.top_info_2_box}>
                                <View style={styles.top_info_2_inner}>
                                    <Image style={styles.top_info_2_decoL}
                                        source={require('./src/history_images/deco_L.png')} />
                                    <Image style={styles.top_info_2_image}
                                        source={require('./src/history_images/icon_spot.png')} />
                                    <Text style={styles.top_info_2_T}>부산대학로 센터</Text>
                                    <Image style={styles.top_info_2_decoL}
                                        source={require('./src/history_images/deco_R.png')} />
                                </View>
                            </View>

                        </View>

                        <View style={styles.top_info_3}>
                            <View style={styles.top_info_3_L}>
                                <View style={styles.top_info_3_top}>
                                    <Image style={styles.top_info_3_image}
                                        source={require('./src/history_images/relay.png')} />
                                    <Text style={styles.top_info_3_T}>x5</Text>
                                </View>
                                <Text style={styles.top_info_3_bottom}>릴레이 참여 횟수</Text>
                            </View>
                            <View style={styles.top_info_3_R}>
                                <View style={styles.top_info_3_top}>
                                    <Image style={styles.top_info_3_image}
                                        source={require('./src/history_images/medal.png')} />
                                    <Text style={styles.top_info_3_T}>x1</Text>
                                </View>
                                <Text style={styles.top_info_3_bottom}>릴레이 우승 횟수</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.contents}>
                        <View style={styles.contents_header}>
                            <Image style={styles.contents_header_image}
                                source={require('./src/history_images/title.png')} />
                        </View>

                        <HistoryList />
                    </View>

                </View>
            </ScrollView >
        );
    }
}

let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor: '#fff',
    },
    container_box: {
        borderWidth: 0,
        margin: 0, padding: 0
    },
    deco_back_L: {
        position: 'absolute',
        top: 28.6 + 20, left: 5.9,
        width: 174.2,
        height: 344.7,
        resizeMode: 'contain',
    },
    deco_back_R: {
        position: 'absolute',
        top: 28.6 + 20, right: 24.3,
        width: 49.8,
        height: 309.6,
        resizeMode: 'contain',
    },


    // 헤더
    top_header: {
        width: deviceWidth, height: 40.2,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    top_header_btn: {
        width: 50,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    top_header_image: {
        width: 11.9, height: 19.2,
        // position: 'absolute',
        // left: 16.4,
        // top: 10.5,

        resizeMode: 'contain'
    },
    top_header_title: {
        width: deviceWidth - 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    top_header_T: {
        color: '#333',
        fontSize: 16.7,
        marginRight: 50
    },

    top_info: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    top_info_1: {
        paddingTop: 29.9,
        flexDirection: 'row',
    },
    top_info_1_L: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    top_info_1_L_image: {
        width: 89.1,
        height: 89.1,
        resizeMode: 'contain'
    },
    top_info_1_L_deco_image: {
        width: 30,
        height: 19,
        resizeMode: 'contain',
        margin: 7.5,
    },
    top_info_1_R: {},
    top_info_1_R_lv: {
        flexDirection: 'row',
    },
    top_info_1_R_lv_b: {
        color: '#666',
        fontSize: 31.7,
        fontStyle: "italic",
        fontWeight: 'bold'
    },
    top_info_1_R_lv_r: {
        color: '#ff6443',
        fontSize: 31.7,
        fontStyle: "italic",
        fontWeight: 'bold'
    },
    top_info_1_R_name: {
        fontSize: 43.3,
        fontWeight: "normal",
        fontStyle: "normal",
        fontWeight: 'bold',
        color: '#333'
    },
    top_info_2: {
        paddingTop: 21,

    },
    top_info_2_title: {
        fontSize: 11.3,
        fontWeight: "normal",
        fontStyle: "normal",
        textAlign: "left",
        color: "#707070",
        marginBottom: 7.1
    },
    top_info_2_box: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10.7,
        borderWidth: 1.3,
        borderColor: '#7740ff'
    },
    top_info_2_inner: {
        height: 38.6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 4,
        borderRadius: 8,
        backgroundColor: '#eaeaea'
    },
    top_info_2_decoL: {
        margin: 2,
        width: 11.7,
        height: 12.5,
        resizeMode: 'contain'
    },
    top_info_2_image: {
        width: 12.5,
        height: 20.5,
        resizeMode: 'contain',
        marginLeft: 26, marginRight: 10.4
    },
    top_info_2_T: {
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        textAlign: "left",
        color: '#333',
        marginRight: 26,
    },
    top_info_3: {
        paddingTop: 32.6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    top_info_3_L: {
        margin: 20,
    },
    top_info_3_R: {
        margin: 20,
    },
    top_info_3_top: {
        width: 100, height: 80,
    },
    top_info_3_image: {
        position: 'absolute',
        top: 0, left: 0,
        width: 76.1,
        height: 54.8,
        resizeMode: 'contain'

    },
    top_info_3_T: {
        position: 'absolute',
        bottom: 0, right: 0,
        color: '#ff6443',
        fontSize: 35.3,
        fontWeight: "bold",
        fontStyle: "normal",
    },
    top_info_3_bottom: {
        fontSize: 13.3,
        fontWeight: "normal",
        color: "#707070"

    },
    contents: {
        width: deviceWidth,
        paddingTop: 88.7, paddingBottom: 91.3,
        backgroundColor: '#7740ff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contents_header: {
        marginBottom: 18
    },
    contents_header_image: {
        width: 166,
        height: 44.1,
        resizeMode: 'contain',
    },

});