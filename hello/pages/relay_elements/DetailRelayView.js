/**
 * 상세보기의 방 소개 페이지
 */
import React, { Component } from 'react';
import {
    StyleSheet, Text, View,
    TouchableOpacity, Image,
    ListView, TextInput,
    Modal,
} from 'react-native';

import Userprofile from './UserProfile';


export default class DetailRelay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyText: '첫 눈에 널 알아보게 돼써 호롤롤롤라레레러러러먀캬컄ㅋ캬캬캬ㅑㅑ캬캬ㅑㅋ',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <View style={styles.title_L}>
                        <Image style={styles.title_L_image}
                            source={require('../../src/relay_images/icon_myRelay.png')} />
                        <Text style={styles.title_L_T}>
                            DNA 뚜둔뚜둔
              </Text>
                    </View>

                    <View style={styles.title_R}>
                        <Text style={styles.title_R_T_b}>12명</Text>
                        <Text style={styles.title_R_T_r}>과 함께 달리고 있습니다.</Text>
                    </View>
                </View>

                <View style={styles.contents}>
                    <View style={styles.intro_box}>
                        <View style={styles.intro_box_title}>
                            <Text style={styles.titleText}>방 소개</Text>
                        </View>
                        <View style={styles.intro_box_text}>
                        <Text style={styles.text} numberOfLines={2}>{this.state.bodyText}</Text>
                        </View>
                    </View>
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
    intro_box: {
        marginTop: 23.5,
        width: deviceWidth - (32.7 * 2), height: 69.3,
        // marginLeft: 32.7, marginRight: 32.7,
        padding: 5,
        borderColor: '#ad6aef',
        borderWidth: 2,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    intro_box_title: {
        marginLeft: 32.7, marginRight: 32.7,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    intro_box_text: {
        width: '100%',
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 10,
        fontWeight: 'normal',
    },
});