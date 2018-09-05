import React, { Component } from 'react';
import {
    FlatList, StyleSheet,
    View, Text, Image,
    TouchableOpacity
} from 'react-native';
import { List, ListItem } from 'react-native-elements'

import { randomUsers } from '../util';
import Userprofile from './UserProfile';
import { observer, inject } from 'mobx-react';


@inject('mystate')
@observer
class RelayList extends Component {
    state = {
        refreshing: false,

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

    componentDidMount=()=>{
        this.props.mystate.set_relayList();
        console.log(this.props.mystate.relayList);
    }

    room_min=(date)=>{
        let temp = new Date(date);
        let now = new Date();
        let time = now.getTime() - temp.getTime();
        return Math.floor(time/1000/60);

        
        
    }


    render() {
        return (
            <List containerStyle={{
                borderTopWidth: 0, borderBottomWidth: 0
            }}>
                <FlatList
                    data={this.props.mystate.relayList}
                    keyExtractor={item=>item.room_name}
                    initialNumToRender={10}
                    onEndReachedThreshold={1}
                    onEndReached={this.onEndReached}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.container}>
                                <View style={styles.item}>
                                    <View style={styles.item_title}>
                                        <View style={styles.item_title_L}>
                                            <Image style={styles.item_title_L_image}
                                                source={require('./../../src/relay_images/icon_relay.png')} />
                                            <Text style={styles.item_title_L_T}>{item.room_name}</Text>
                                        </View>
                                        <View style={styles.item_title_R}>
                                            <Text style={styles.item_title_R_T_b}>{item.room_people}명</Text>
                                            <Text style={styles.item_title_R_T_r}>과 함께 달리고 있습니다. </Text>
                                        </View>
                                    </View>
                                    <View style={styles.item_summary}>
                                        <View style={styles.item_summary_L}>
                                            {/* 수정중!~~~! */}
                                            <Userprofile />

                                            <Image style={styles.item_summary_L_arrow}
                                                source={require('./../../src/relay_images/deco_heartArrow.png')} />

                                            <Userprofile />
                                        </View>
                                        <View style={styles.item_summary_R}>
                                            <Text style={styles.item_summary_R_notiTime_T}>{this.room_min(item.room_date)}분 전</Text>
                                            <TouchableOpacity style={styles.item_summary_R_btn}>
                                                <Text style={styles.item_summary_R_btn_T}>상세보기</Text>
                                                <Image style={styles.item_summary_R_btn_image}
                                                    source={require('./../../src/relay_images/icon_arrow_b.png')} />
                                            </TouchableOpacity>
                                        </View>
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
        width: '100%', height: 107.9 + 5,
        backgroundColor: '#fff',
        paddingLeft: 29.7, paddingRight: 25,
        paddingBottom: 19 / 2, paddingTop: 19 / 2
    },
    item_title: {
        height: 20.7,
        marginBottom: 9.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    item_title_L: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    // FIXME: 사진크기에 맞게 이미지 받기
    item_title_L_image: {
        width: 30.7, height: 20.7,
        resizeMode: 'contain',
    },
    item_title_L_T: {
        fontSize: 16.7,
        color: '#000',
        fontWeight: 'bold'
    },

    item_title_R: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    item_title_R_T_b: {
        color: '#333',
        fontSize: 12.7,
        fontWeight: 'bold',
        marginRight: 3.3
    },
    item_title_R_T_r: {
        color: '#333',
        fontSize: 10,
    },

    // TODO: 여기서부터!~!~!~
    item_summary: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    item_summary_L: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    //


    item_summary_L_arrow: {
        width: 50.1, height: 31,
        resizeMode: 'contain'
    },
    item_summary_R: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    item_summary_R_notiTime_T: {
        color: '#7740ff',
        fontSize: 10.7,

    },
    item_summary_R_btn: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        paddingRight: 0
    },
    item_summary_R_btn_T: {
        color: '#333',
        fontSize: 12,
    },
    item_summary_R_btn_image: {
        width: 7.2, height: 4.5,
        resizeMode: 'contain',
        marginLeft: 4.5,
    }

});


export default RelayList;