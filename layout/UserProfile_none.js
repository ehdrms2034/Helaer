import React, { Component } from 'react';
import {
    StyleSheet,
    View, Text, Image,
    TouchableOpacity
} from 'react-native';

const UserProfileNone = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('./src/relay_images/deco_none.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 67.7,
        height: 67.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 67.7 / 2,
        borderColor: '#959292',
        borderWidth: 1.7,
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        position: 'absolute',
        width: 45,
        height: 28.4,

    },
})

export default UserProfileNone;