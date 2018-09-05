
import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View,
    TouchableOpacity, Image, ScrollView,
    ListView, TextInput,
    Dimensions
} from 'react-native';

import RankList from './RankList';
import MyLine from './DetailMyLine';
import OtherLine from './DetailOtherLine';

type Props = {};
export default class HistoryPage extends Component<Props> {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container_box}>
                    <View style={styles.top_header}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}
                            style={styles.top_header_btn}>
                            <Image source={require('./src/detail_images/icon_arrow_back.png')}
                                style={styles.top_header_image} />
                        </TouchableOpacity>
                        <View style={styles.top_header_title}>
                            <Text style={styles.top_header_T}>상세보기</Text>
                        </View>
                    </View>

                    {/* <MyLine /> */}
                    <OtherLine />

                    <View style={styles.bottom_title}>
                        <Text style={styles.bottom_title_T}>기여도</Text>
                        <RankList />
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

    bottom_title: {
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom_title_T: {
        fontSize: 16.7,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: -0.4,
        textAlign: "center",
        color: '#333',
        marginTop: 38, marginBottom: 24,

    },
});