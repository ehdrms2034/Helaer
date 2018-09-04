/**
 * 참여중인 내 라인 상세보기
 */

import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View,
    TouchableOpacity, Image, ScrollView,
    ListView, TextInput,
    Modal, TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

import ListMyRoom from './pages/relay_elements/List_myRoom';
import Userprofile from './pages/relay_elements/UserProfile';
import OffRelayView from './pages/relay_elements/OffRelayView';
import OnRelayView from './pages/relay_elements/OnRelayView';
import DetailRelayView from './pages/relay_elements/DetailRelayView';

export default class myLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_searchRoom: '',
            number: "3",
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container_top}>
                    <View style={styles.top_header}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
                            <Image source={require('./src/relay_images/icon_arrow.png')}
                                   style={styles.top_header_image} />
                        </TouchableOpacity>
                        <Text style={styles.top_header_T}>상세보기</Text>
                    </View>

                    <View style={styles.top}>
                        {/*<Text>현재순위권과 등등 나타내는 부분</Text>*/}
                        <View style={styles.top_mission}>

                            <View style={styles.top_mission_timer}>
                                <Image source={require('./src/relay_images/icon_clock.png')}
                                       style={styles.top_mission_timer_image} />
                                <Text style={styles.top_mission_timer_T}>00:00:00:00</Text>
                            </View>
                            <View style={styles.top_mission_box}>
                                <Text style={styles.top_mission_T}>
                                    현재 순위권과
                                    <Text style={{color: '#ad6aef', fontSize:27}}>
                                        {this.state.number}명
                                    </Text>
                                    차이 입니다.
                                </Text>
                            </View>
                            <View style={styles.top_mission_title}>
                                <Text style={styles.top_mission_title_T}>버튼넘기기!</Text>
                            </View>


                        </View>
                        {/* <OffRelayView /> */}
                        <DetailRelayView />
                    </View>

                    {/* contents */}
                    <View style={styles.contents}>

                        {/* contents - 기여도 list */}
                        <Text style={styles.contents_title}>기여도</Text>
                    </View>
                     <ListMyRoom />
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
    container_top: {
        borderWidth: 0,
        margin: 0, padding: 0
    },
    // 헤더
    top_header: {
        height: 40.2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    top_header_image: {  // 헤더의 뒤로가기 화살표
        position: 'absolute',
        left: 16.4,
        top: 10.5,
        width: 11.9, height: 19.2,
        resizeMode: 'contain'
    },
    top_header_T: {  // 상세보기 글
        color: '#000',
        fontSize: 16.7
    },

    //  상단 레이아웃
    top: {
        flex: 1,
        height: 280.5,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    top_mission: {  // 시계, 순위, 버튼넘기기
        width: '100%',
    },
    top_mission_box: { // 현재 순위권과 area
        marginTop: 23.5,
        width: deviceWidth - (32.7 * 2), height: 69.3,
        marginLeft: 32.7, marginRight: 32.7,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    top_mission_T: {  // 현재 순위권과 text
        width: '100%', height: '100%',
        fontSize: 20.7,
        color: '#ad6aef',
        // paddingTop: 16,
        // paddingLeft: 30,
        // paddingRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // borderRadius: 7,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    top_mission_title: {
        position: 'absolute',
        top: 8.5,
        left: deviceWidth / 2 - 101 / 2,
        width: 101, height: 32,
        borderRadius: 16,
        borderColor: '#ad6aef',
        alignItems: 'center',
        justifyContent: 'center'
    },
    top_mission_title_T: {
        color: '#ffcd1a',
        fontSize: 18,
        fontWeight: 'bold',
    },
    // 타이머
    top_mission_timer: {
        flexDirection: 'row',
        marginTop: 1.7,
        // marginRight: 40.9,
        marginLeft: 40.9,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    top_mission_timer_image: {
        width: 10.2, height: 10.2,
        resizeMode: 'contain',
        marginRight: 1.1
    },
    top_mission_timer_T: {
        color: '#ad6aef',
        fontSize: 10.7,
    },


    // 기여도!!!!
    contents: {
        flex: 1,
        paddingTop: 47.7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contents_title: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12.4
    },

    // 릴레이 - 리스트 전체
    contents_index: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 20,
    },
    contents_index_btn: {
        padding: 4,
    },
    contents_index_T: {
        color: '#a8a8a8',
        fontSize: 14.7,
        fontWeight: 'bold'
    },
});