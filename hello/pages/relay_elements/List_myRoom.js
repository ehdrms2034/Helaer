/**
 * 팀 별 기여도
 * https://appdividend.com/2018/04/10/react-native-flatlist-example/
 */

import React, { Component } from 'react';
import {
    FlatList, StyleSheet,
    View, Text, Image,
    TouchableOpacity
} from 'react-native';
import { List, ListItem } from 'react-native-elements'

import { randomUsers } from '../util';
import Userprofile from './UserProfile';

class ListMyRoom extends Component {
    state = {
        refreshing: false,
        data: randomUsers(10),
        score: '3',
    };

    /*
    props ={
        room-relation : [],
        room-database : []
    }
    */

    onEndReached = () => {
        // this.setState(state => ({
        //     data: [
        //         ...state.data,
        //         ...randomUsers(),
        //     ]
        // }));
    };

    onRefresh = () => {
        this.setState({
            data: randomUsers(10),
        });
    }

    // list view 개수
    _renderRow = (rowItem, rowId) => <Text>{rowItem.title}</Text>;

    render() {
        return (
            <List containerStyle={{
                borderTopWidth: 0, borderBottomWidth: 0
            }}>
                <FlatList
                    data={this.state.data}
                    initialNumToRender={10}
                    onEndReachedThreshold={1}
                    onEndReached={this.onEndReached}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    renderRow={this._renderRow}  //개수
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.container}>
                                <View style={styles.item}>
                                    <View style={styles.item_title}>
                                        <View style={styles.item_title_number}>
                                            <Text style={{fontSize:20}}>{item.key}</Text>
                                        </View>
                                        <View style={styles.item_title_upDown}>
                                            <Text style={{fontSize:20}}>{item.key}</Text>  {/*그림으로 바꿔야함*/}
                                        </View>
                                        <View style={styles.item_title_user_pic}>
                                            <Image style={styles.item_title_user_image}
                                                   source={require('./../../src/relay_images/icon_relay.png')} />
                                        </View>
                                        <View style={styles.item_title_user_text}>
                                            <View style={{flex:1}}>
                                                <Text style={{fontStyle:'italic'}}>Lv.7</Text>   {/*레벨 받아오기*/}
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text>User1</Text>   {/*id 받아오기*/}
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.item_summary}>
                                        {/*<View style={styles.item_summary_L}>*/}
                                            {/*/!* 수정중!~~~! *!/*/}
                                            {/*<Userprofile />*/}

                                            {/*<Image style={styles.item_summary_L_arrow}*/}
                                                {/*source={require('./../../src/relay_images/deco_heartArrow.png')} />*/}

                                            {/*<Userprofile />*/}
                                        {/*</View>*/}
                                        <Text style={{fontWeight:'bold'}}>
                                            바톤 넘기기
                                            <Text style={{color:'#ff6443'}}>+{this.state.score}</Text>
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                />
            </List>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        width: '100%', height: 25,
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
    },
    // list #, 상승/하강, user
    item_title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    item_title_number: {
        flex: 1,
        alignItems: 'center'
    },
    item_title_upDown: {
        flex: 1,
        alignItems: 'center'
    },
    item_title_user_pic: { // 사진
        flex: 1,
        alignItems: 'center',
    },
    // FIXME: 사진크기에 맞게 이미지 받기
    item_title_user_image: {
        width: 20, height: 20,  //사이즈 알아보쟈ㅜㅜ
        resizeMode: 'contain',
    },
    item_title_user_text: { // user level, id
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    // item_title_L_T: {
    //     fontSize: 16.7,
    //     color: '#000',
    //     fontWeight: 'bold'
    // },

    // 버튼넘기기, +3
    item_summary: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
});

export default ListMyRoom;