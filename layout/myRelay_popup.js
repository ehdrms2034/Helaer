
import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View,
    TouchableOpacity, Image,
    AppRegistry
} from 'react-native';
import UserProfileOthers from './UserProfile';
import UserProfileNone from './UserProfile_none';

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
                        <Image source={require('./src/relay_images/deco_heartArrow_RB.png')}
                            style={styles.arrow1} />
                        <Image source={require('./src/relay_images/deco_heartArrow_LB.png')}
                            style={styles.arrow2} />
                        <View style={styles.layout_head}>
                            <UserProfileOthers size={84.8} id={'User1'} borderC={'#ffcd1a'} borderW={1.7} />
                        </View>
                        <View style={styles.layout_me}>
                            <UserProfileOthers size={102.6} id={'User'} borderC={'#ff6443'} borderW={2.3} />
                        </View>
                        <Text style={styles.T1}>
                            User1 님에게 {'\n'}
                            바톤을 받았습니다.
                                </Text>
                        <View style={styles.contents_etc}>
                            <UserProfileOthers size={67.7} id={'User2'} borderC={'#ffcd1a'} borderW={1.7} />
                            <UserProfileNone />
                            <UserProfileNone />
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.bottom_L}>
                            <Text style={styles.T2}>
                                현재 User2 님에게 {'\n'}
                                바톤을 넘겨 주었습니다.
                                </Text>
                        </View>
                        <View style={styles.bottom_R}>
                            <Text style={styles.T_exp}>+ EXP 30</Text>
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
        width: 308,
        height: 375.3,
        borderRadius: 12.7,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 5,
        borderColor: "#7740ff",

        justifyContent: 'center',
        alignItems: 'center',
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
        marginTop: 25
    },
    arrow1: {
        width: 52.6,
        height: 50.9,
        resizeMode: 'contain',
        position: 'absolute',
        top: 48.6, left: 80.2
    },
    arrow2: {
        width: 66.6,
        height: 66.6,
        resizeMode: 'contain',
        position: 'absolute',
        top: 154.4, left: 66.4
    },
    T1: {
        position: 'absolute',
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 18,
        letterSpacing: -0.38,
        textAlign: "left",
        color: '#333',
        right: 40.3, top: 14.3,
    },
    layout_head: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 14
    },
    layout_me: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contents_etc: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingRight: 22, paddingLeft: 22,
        paddingTop: 10
    },
    bottom: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: 22
    },
    bottom_L: {},
    T2: {
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 18,
        letterSpacing: -0.38,
        textAlign: "left",
        color: '#333'
    },
    bottom_R: {},
    T_exp: {
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 18,
        letterSpacing: -0.38,
        textAlign: "left",
        color: '#7740ff'
    },

});

