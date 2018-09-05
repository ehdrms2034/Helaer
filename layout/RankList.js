import React, { Component } from 'react';
import {
    FlatList, StyleSheet,
    View, Text, Image,
    TouchableOpacity
} from 'react-native';
import { List, ListItem } from 'react-native-elements'

const data = [
    { type: 'a', date: '18.03.05', result: '1' },
    { type: 'b', date: '18.03.05', result: '1' },
    { type: 'c', date: '18.03.05', result: '1' },
];


class RankList extends Component {

    render() {
        return (
            <FlatList
                data={data}
                style={styles.container}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.item}>
                            <View style={styles.rank}>
                                <Text style={styles.rank_T}>1</Text>
                            </View>
                            <Image style={styles.updown_image}
                                source={require('./src/detail_images/icon_up.png')} />
                            <View style={styles.user}>
                                <Image style={styles.user_image} />
                            </View>
                            <View style={styles.user_info}>
                                <Text style={styles.user_info_lv}>Lv.7</Text>
                                <Text style={styles.user_info_name}>User1</Text>
                            </View>
                            <Text style={styles.user_info_L}>
                                <Text style={styles.user_info_T}>바톤 넘기기</Text>
                            </Text>
                            <Text style={styles.user_info_R}>
                                <Text style={styles.user_info_T_r}>+1</Text>
                            </Text>
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
        flexDirection: 'row',
        paddingRight: 30, paddingLeft: 30,
    },
    rank: {
        marginRight: 16.6
    },
    rank_T: {
        fontSize: 26.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 31.3,
        letterSpacing: -0.64,
        textAlign: "left",
        color: "#777777"

    },
    updown_image: {
        width: 10.2,
        height: 11.2
    },
    user: {
        width: 47.7,
        height: 47.7,
        borderRadius: 47.7 / 2,
        borderStyle: "solid",
        borderWidth: 1.7,
        borderColor: '#ffcd1a',
        margin: 11.9
    },
    user_image: {
        width: '100%',
        height: '100%',
        borderRadius: 47.7 / 2,

    },
    user_info: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingRight: 22.2
    },
    user_info_lv: {
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic",
        letterSpacing: 0,
        textAlign: "left",
        color: "#666666"
    },
    user_info_name: {
        fontSize: 18.7,
        fontWeight: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: '#333'

    },
    user_info_L: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8
    },
    user_info_R: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    user_info_T: {
        fontSize: 16.7,
        fontWeight: "bold",
        letterSpacing: -0.4,
        textAlign: "center",
        color: "#000000",
    },
    user_info_T_r: {
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: -0.43,
        textAlign: "center",
        color: '#ff6443',

    },
});


export default RankList;