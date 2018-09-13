import React, { Component } from 'react';
import {
    StyleSheet,
    View, Text, Image,
    TouchableOpacity
} from 'react-native';

const UserProfileOthers = ({ size, id, borderC, borderW }) => {
    let s = size;
    return (
        <View style={[styles.container, { width: s, height: s, borderRadius: s / 2, borderColor: borderC }]}>
            <Image style={styles.image} />
            <Text style={styles.T} numberOfLines={1}>
                {id}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.7,
        backgroundColor: '#228',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2.7,
        shadowOpacity: 0.3,
        elevation: 5,
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.5,

    },
    T: {
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20.7,
        letterSpacing: 0,
        textAlign: "left",
        color: "#ffffff"

    },
})

export default UserProfileOthers;