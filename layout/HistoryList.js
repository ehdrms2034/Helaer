import React, { Component } from 'react';
import {
    FlatList, StyleSheet,
    View, Text, Image,
    TouchableOpacity
} from 'react-native';
import { List, ListItem } from 'react-native-elements'

const data = [
    { type: 'a', date: '18.03.05', result: '1' },
    { type: 'a', date: '18.03.26', result: '0' },
    { type: 'b', date: '18.06.05', result: '1' },
    { type: 'a', date: '18.03.05', result: '0' },
    { type: 'b', date: '18.03.05', result: '1' },
    { type: 'a', date: '18.03.05', result: '0' },
    { type: 'a', date: '18.03.05', result: '0' },
    { type: 'b', date: '18.03.05', result: '0' },
    { type: 'a', date: '18.03.05', result: '1' },
    { type: 'b', date: '18.03.05', result: '1' },
    { type: 'a', date: '18.03.05', result: '0' },
];


class HistoryList extends Component {

    render() {
        return (
            <FlatList
                data={data}
                style={styles.container}
                numColumns={3}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.item}>
                            <Image style={styles.item_image}
                                source={item.type == 'a' ? require('./src/history_images/card_all.png')
                                    : require('./src/history_images/card_ingre.png')}
                            />
                            <Image style={styles.item_result}
                                source={item.result == '1' ? require('./src/history_images/icon_medal.png')
                                    : null} />
                            <Text style={styles.item_T}>{item.date}</Text>
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
        // margin: 10,
        // padding: 10,
    },
    item_image: {
        width: 83.8 + 20,
        height: 74.6 + 20,
        resizeMode: 'contain'
    },
    item_result: {
        position: 'absolute',
        top: 5.4 + 7, left: 12.9 + 7,
        width: 26.6,
        height: 19.3,
        resizeMode: 'contain'
    },
    item_T: {
        fontSize: 16.7,
        fontWeight: "normal",
        fontStyle: "normal",
        textAlign: "left",
        color: "#ffffff"
    },
    shelf: {
        width: '70%',
        height: 11.7,
        borderRadius: 6,
        backgroundColor: '#7740ff',
        borderStyle: "solid",
        borderWidth: 0.3,
        borderColor: "#707070"

    },
});


export default HistoryList;