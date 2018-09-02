
import React, { Component } from 'react';
import {
    StyleSheet, Text, View,
    TouchableOpacity, Image,
    ListView, TextInput,
    Modal,
} from 'react-native';

import Userprofile from './UserProfile';
import {  inject, observer } from 'mobx-react';

@inject("mobxStore")
@observer
export default class OnRelay extends Component {



    render() {
        const {user_roomdatabase} = this.props.mobxStore;
        const {room_people_list} = this.props.mobxStore.user_roomdatabase;
        const hi = JSON.stringify(room_people_list);
        
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <View style={styles.title_L}>
                        <Image style={styles.title_L_image}
                            source={require('../../src/relay_images/icon_myRelay.png')} />
                        <Text style={styles.title_L_T}>
                            {this.props.mobxStore.user_roomdatabase.room_name} {/*룸네임*/}
              </Text>
                    </View>

                    <View style={styles.title_R}>
                        <Text style={styles.title_R_T_b}>{this.props.mobxStore.user_roomdatabase.room_people} 명</Text>
                        <Text style={styles.title_R_T_r}>과 함께 달리고 있습니다.</Text>
                    </View>
                </View>
                <View style={styles.contents}>
                    <Userprofile
                        id="hh" />
                    <Image style={styles.heartArrow}
                        source={require('../../src/relay_images/deco_heartArrow.png')} />
                    <Userprofile
                        id="gg" />
                    <Image style={styles.heartArrow}
                        source={require('../../src/relay_images/deco_heartArrow.png')} />
                    <Userprofile
                        id="gg" />
                </View>

                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.bottom_btn}>
                        <Text style={styles.bottom_btn_T}>상세보기</Text>
                    </TouchableOpacity>
                    <Text style={styles.bottom_bar}> | </Text>
                    <TouchableOpacity style={styles.bottom_btn}>
                        <Text style={styles.bottom_btn_T}>바톤넘기기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 13.7
    },
    title: {
        width: '100%', height: 20.7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 28.1, paddingRight: 23.2,
    },
    title_L: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    // FIXME: 사진크기에 맞게 이미지 받기
    title_L_image: {
        width: 30.7, height: 20.7,
        resizeMode: 'contain',
        marginRight: 3.6,
    },
    title_L_T: {
        color: '#000',
        fontSize: 16.7,
        fontWeight: '800'
    },
    title_R: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    title_R_T_b: {
        color: '#ffcd1a',
        fontSize: 12.7,
        fontWeight: 'bold',
        marginRight: 3.3
    },
    title_R_T_r: {
        color: '#fff',
        fontSize: 10,
    },

    contents: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10, paddingBottom: 10,
    },
    heartArrow: {
        width: 50.1, height: 31,
        resizeMode: 'contain'
    },

    bottom: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 24.7,
    },
    bottom_btn: {
        padding: 3,
    },
    bottom_bar: {
        color: '#fff',
        fontSize: 12,
    },
    bottom_btn_T: {
        color: '#fff',
        fontSize: 12,
    }
});
