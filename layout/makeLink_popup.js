
import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View,
    TouchableOpacity, Image, TextInput,
    AppRegistry
} from 'react-native';

export default class main extends Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.popup}>
                    <TouchableOpacity style={styles.popup_btn}>
                        <Image source={require('./src/relay_images/icon_close.png')}
                            style={styles.close} />
                    </TouchableOpacity>
                    <View style={styles.contents}>
                        <View style={styles.link}>
                            <Image style={styles.link_image}
                                source={require('./src/relay_images/icon_link.png')} />
                            <Text style={styles.link_T}>링크가 생성되었습니다 !</Text>
                        </View>
                        <View style={styles.address}>
                            <Text style={styles.address_T}>https://bit.ly/2OaJPO7</Text>
                            <TouchableOpacity style={styles.address_btn}>
                                <Text style={styles.address_btn_T}>복사하기</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottom}>
                            <Text style={styles.bottom_T}>친구나 지인에게 공유해 바톤을 넘겨주세요.</Text>
                            <View style={styles.bottom_btns}>
                                <Image style={styles.bottom_btn_image}
                                    source={require('./src/relay_images/icon_kakao.png')} />
                                <Image style={styles.bottom_btn_image}
                                    source={require('./src/relay_images/icon_face.png')} />
                                <Image style={styles.bottom_btn_image}
                                    source={require('./src/relay_images/icon_twitter.png')} />
                            </View>
                        </View>
                    </View>
                </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup: {
        width: 248.7,
        height: 229.7,
        borderRadius: 12.7,
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    popup_btn: {
        width: 20.3,
        height: 18.2,
        position: 'absolute',
        top: 10, right: 10
    },
    close: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },


    contents: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 26.7,
    },
    link: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    link_image: {
        width: 22,
        height: 23.1,
        marginRight: 4.5,
    },
    link_T: {
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 20.7,
        letterSpacing: -0.43,
        textAlign: "center",
        color: '#333'
    },
    address: {
        width: 248.7 - 24.2 * 2,
        borderBottomColor: '#7740ff',
        borderBottomWidth: 0.7,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 3.5
    },
    address_T: {
        fontSize: 12.7,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 14.3,
        letterSpacing: -0.3,
        textAlign: "center",
        color: "#707070"
    },
    address_btn: {
        width: 46.3,
        height: 17,
        borderRadius: 4.3,
        borderStyle: "solid",
        borderWidth: 0.7,
        borderColor: '#7740ff',
        justifyContent: 'center',
        alignItems: 'center',

    },
    address_btn_T: {
        fontSize: 10,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 11.7,
        letterSpacing: -0.24,
        textAlign: "center",
        color: '#7740ff'
    },

    bottom: {
        width: '100%',
        alignItems: 'flex-start',
    },
    bottom_T: {
        fontSize: 11.7,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 13.3,
        letterSpacing: -0.28,
        textAlign: "center",
        color: '#333'
    },
    bottom_btns: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
    },
    bottom_btn_image: {
        width: 35.7,
        height: 35.7,
        resizeMode: 'contain'
    },

});

