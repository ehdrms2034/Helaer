import React, { Component } from 'react';
import {
    FlatList, StyleSheet,
    View, Text, Image,
    TouchableOpacity
} from 'react-native';
import { List, ListItem } from 'react-native-elements'

const data = [
    { state: 'on', type: '전혈헌혈', date: '18.03.05', result: '1', code: '14-12-032943', date_relay: '18.03.05', title: '좋아하는 가수를 응원하자!', spot: '부산대학로 센터' },
    { state: 'off', type: '전혈헌혈', date: '18.03.26', result: '0', code: '14-12-032943', date_relay: '18.03.05', title: '좋아하는 가수를 응원하자!', spot: '부산대학로 센터' },
    { state: 'off', type: '성분헌혈', date: '18.06.05', result: '1', code: '14-12-032943', date_relay: '18.03.05', title: '좋아하는 가수를 응원하자!', spot: '부산대학로 센터' },
    { state: 'off', type: '전혈헌혈', date: '18.03.05', result: '0', code: '14-12-032943', date_relay: '18.03.05', title: '좋아하는 가수를 응원하자!', spot: '부산대학로 센터' },
    { state: 'off', type: '성분헌혈', date: '18.03.05', result: '1', code: '14-12-032943', date_relay: '18.03.05', title: '좋아하는 가수를 응원하자!', spot: '부산대학로 센터' },
    { state: 'off', type: '전혈헌혈', date: '18.03.05', result: '0', code: '14-12-032943', date_relay: '18.03.05', title: '좋아하는 가수를 응원하자!', spot: '부산대학로 센터' },
    { state: 'off', type: '전혈헌혈', date: '18.03.05', result: '0', code: '14-12-032943', date_relay: '18.03.05', title: '좋아하는 가수를 응원하자!', spot: '부산대학로 센터' },
    { state: 'off', type: '성분헌혈', date: '18.03.05', result: '0', code: '14-12-032943', date_relay: '18.03.05', title: '좋아하는 가수를 응원하자!', spot: '부산대학로 센터' },
    { state: 'off', type: '전혈헌혈', date: '18.03.05', result: '1', code: '14-12-032943', date_relay: '18.03.05', title: '좋아하는 가수를 응원하자!', spot: '부산대학로 센터' },
    { state: 'off', type: '성분헌혈', date: '18.03.05', result: '1', code: '14-12-032943', date_relay: '18.03.05', title: '좋아하는 가수를 응원하자!', spot: '부산대학로 센터' },
    { state: 'off', type: '전혈헌혈', date: '18.03.05', result: '0', code: '14-12-032943', date_relay: '18.03.05', title: '좋아하는 가수를 응원하자!', spot: '부산대학로 센터' },
];


class HistoryList extends Component {

    render() {
        return (
            <FlatList
                data={data}
                style={styles.container}
                renderItem={({ item }) => {
                    return (
                        // <View style={styles.item}>
                        //     <Image style={styles.item_image}
                        //         source={item.type == 'a' ? require('./src/history_images/card_all.png')
                        //             : require('./src/history_images/card_ingre.png')}
                        //     />
                        //     <Image style={styles.item_result}
                        //         source={item.result == '1' ? require('./src/history_images/icon_medal.png')
                        //             : null} />
                        //     <Text style={styles.item_T}>{item.date}</Text>
                        // </View>

                        <View style={styles.item}>
                            <View style={[styles.header, item.state == 'on' ? { backgroundColor: "rgba(255, 191, 0, 0.43)" } : { backgroundColor: "#eaeaea" }]}>
                                <Text style={styles.header_rankT}>{item.result == '1' ? '1등' : null}</Text>
                                <Text style={styles.header_titleT}
                                    numberOfLines={1}>{item.title}</Text>
                                <Text style={styles.header_code}>{item.code}</Text>
                            </View>
                            <View style={styles.conetents}>
                                <View style={styles.conetents_row}>
                                    <View style={styles.conetents_LT_T_box}>
                                        <Text style={styles.contents_T}>헌혈일 :</Text>
                                        <Text style={styles.contents_T_b}>{item.date}</Text>
                                    </View>

                                    <View style={styles.conetents_LB_T_box}>
                                        <Text style={styles.contents_T}>릴레이 참여일 :</Text>
                                        <Text style={styles.contents_T_b}>{item.date_relay}</Text>
                                    </View>

                                </View>
                                <View style={styles.conetents_row}>
                                    <View style={styles.conetents_T_box}>
                                        <Text style={styles.contents_T}>혈액원 :</Text>
                                        <Text style={styles.contents_T_b}>{item.spot}</Text>
                                    </View>

                                    <View style={styles.conetents_T_box}>
                                        <Text style={styles.contents_T}>헌혈종류 :</Text>
                                        <Text style={styles.contents_T_b}>{item.type}</Text>
                                    </View>
                                </View>
                            </View>

                            <Image style={item.result == '1' ? styles.item_result_image_rank : styles.item_result_image_done}
                                source={item.result == '1' ? require('./src/history_images/medal.png')
                                    : require('./src/history_images/icon_doneStamp.png')} />
                            <View style={styles.decoLine} />
                        </View>
                    );
                }}
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',

        width: 328.7,
        height: 100,
        borderRadius: 7.7,
        backgroundColor: "#ffffff",
        margin: 12,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 1.5,
            height: 1.5
        },
        shadowRadius: 6,
        elevation: 2
    },
    header: {
        width: '100%',
        height: 34,
        borderTopLeftRadius: 7.7, borderTopRightRadius: 7.7,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 7.9
    },
    header_rankT: {
        width: 65,
        fontSize: 19.3,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 21.7,
        letterSpacing: 1.16,
        textAlign: "center",
        color: "#6a6a6a",
    },
    header_titleT: {
        flex: 1,
        fontSize: 15.3,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 17.3,
        letterSpacing: -0.37,
        textAlign: "left",
        color: "#504f4f"

    },
    header_code: {
        width: 82,
        fontSize: 11,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 16.3,
        letterSpacing: 0,
        textAlign: "center",
        color: '#ff6443',
        marginRight: 7
    },
    conetents: {
        width: '100%',
        flex: 1,
        flexDirection: 'row'
    },
    conetents_row: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 11.7, paddingBottom: 11.7
    },
    conetents_LT_T_box: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 43
    },
    conetents_LB_T_box: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    conetents_T_box: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    contents_T: {
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 13.7,
        letterSpacing: 0,
        textAlign: "left",
        color: "#6a6a6a",
        marginRight: 5
    },
    contents_T_b: {
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 13.7,
        letterSpacing: 0,
        textAlign: "left",
        color: '#7740ff'

    },
    item_result_image_rank: {
        position: 'absolute',
        top: 17,
        left: 0.2,
        width: 62.5,
        height: 45.3,
        resizeMode: 'contain'
    },
    item_result_image_done: {
        position: 'absolute',
        top: 5.9,
        left: 6.9,
        width: 53.1,
        height: 53.1,
        resizeMode: 'contain'
    },
    decoLine: {
        width: 263,
        height: 3.3,
        backgroundColor: '#7740ff',
        borderTopLeftRadius: 6.7, borderBottomLeftRadius: 6.7,
        position: 'absolute',
        top: 32.7,
        right: 0
    }
});


export default HistoryList;