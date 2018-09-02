import React, { Component } from 'react';
import {
    StyleSheet,
    View, Text, Image,
    TouchableOpacity
} from 'react-native';

export default class Userprofile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Image source={{ uri: this.props.pic }} style={styles.item_summary_L_image} />
                <Text style={styles.item_summary_L_T}
                    numberOfLines={1}>
                    {this.props.id}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 67.7, height: 67.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 67.7 / 2,
        borderWidth: 1.7,
        borderColor: '#ffcd1a',

        backgroundColor: '#234',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2.7,
        shadowOpacity: 0.3,
        elevation: 5,
    },
    item_summary_L_image: {
        flex: 1,
        resizeMode: 'contain',
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.5,

        borderRadius: 67.7 / 2,
    },
    item_summary_L_T: {
        color: '#fff',
        fontSize: 14.7,
    },
})