
import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
  TouchableOpacity, Image, ScrollView,
  ListView, TextInput,
  Modal, TouchableWithoutFeedback,
  Dimensions
} from 'react-native';

import RelayList from './pages/relay_elements/Relay_list';
import Userprofile from './pages/relay_elements/UserProfile';
import OffRelayView from './pages/relay_elements/OffRelayView';
import OnRelayView from './pages/relay_elements/OnRelayView';

export default class Relay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_searchRoom: '',
    };
  }

  render() {
    const { navigate } = this.props.navigation;  
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container_top}>
          <View style={styles.top_header}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Image source={require('./src/relay_images/icon_arrow.png')}
                style={styles.top_header_image} />
            </TouchableOpacity>
            <Text style={styles.top_header_T}>릴레이</Text>
          </View>
          <View style={styles.top}>
            <View style={styles.top_mission}>
              <View style={styles.top_mission_box}>
                <Text style={styles.top_mission_T}> 좋아하는 가수를 응원하자!</Text>
              </View>
              <View style={styles.top_mission_title}>
                <Text style={styles.top_mission_title_T}>MISSION</Text>
              </View>
              <View style={styles.top_mission_timer}>
                <Image source={require('./src/relay_images/icon_clock.png')}
                  style={styles.top_mission_timer_image} />
                <Text style={styles.top_mission_timer_T}>00:00:00:00</Text>
              </View>
            </View>
            {/* <OffRelayView /> */}
            <OnRelayView />

          </View>

          {/* contents */}
          <View style={styles.contents}>

            {/* contents - top3 */}
            <Text style={styles.contents_title}>TOP 3</Text>
            <View style={styles.contents_top3}>
              <View style={styles.contents_top3_item2}>
                <View style={styles.contents_top3_image_box2}>
                  <Image />
                  <Text style={styles.contents_top3_image_box_T}>26명</Text>
                </View>

                <Image style={styles.contents_top3_medal2}
                  source={require('./src/relay_images/deco_2.png')} />
                <Text style={styles.contents_top3_T}
                  numberOfLines={1}>
                  Twice랑 뜌비뜌밥
              </Text>
              </View>

              <View style={styles.contents_top3_item1}>
                <View style={styles.contents_top3_image_box1}>
                  <Image />
                  <Text style={styles.contents_top3_image_box_T}>26명</Text>
                </View>

                <Image style={styles.contents_top3_medal1}
                  source={require('./src/relay_images/deco_1.png')} />
                <Text style={styles.contents_top3_T}
                  numberOfLines={1}>
                  Twice랑 뜌비뜌밥
              </Text>
              </View>

              <View style={styles.contents_top3_item2}>

                <View style={styles.contents_top3_image_box2}>
                  <Image />
                  <Text style={styles.contents_top3_image_box_T}>26명</Text>
                </View>

                <Image style={styles.contents_top3_medal2}
                  source={require('./src/relay_images/deco_3.png')} />
                <Text style={styles.contents_top3_T}
                  numberOfLines={1}>
                  Twice랑 뜌비뜌밥
              </Text>
              </View>
            </View>

            <View style={styles.hLine} />

            {/* contents - list */}
            <Text style={styles.contents_title}>LIST</Text>

            <View style={styles.contents_index}>
              <TouchableOpacity style={styles.contents_index_btn}>
                <Text style={styles.contents_index_T}>최신순</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.contents_index_btn}>
                <Text style={styles.contents_index_T}>참여순</Text>
              </TouchableOpacity>
            </View>


          </View>


          {/* <RelayList /> */}



          <View style={styles.search}>
            <Image source={require('./src/relay_images/icon_search.png')}
              style={styles.search_image} />

            {/* inlineImageLeft='search_icon' */}
            <TextInput
              style={styles.search_T}
              placeholder="방 검색"
              onChangeText={(input_searchRoom) => this.setState({ input_searchRoom })}
              value={this.state.input_searchRoom}
            />
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

  container_top: {
    borderWidth: 0,
    margin: 0, padding: 0
  },
  // 헤더
  top_header: {
    height: 40.2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7740ff'
  },
  top_header_image: {
    position: 'absolute',
    left: 16.4,
    top: 10.5,
    width: 11.9, height: 19.2,
    resizeMode: 'contain'
  },
  top_header_T: {
    color: '#fff',
    fontSize: 16.7
  },

  //  상단 레이아웃
  top: {
    flex: 1,
    height: 280.5,
    alignItems: 'center',
    backgroundColor: '#7740ff'
  },
  top_mission: {
    width: '100%',
  },
  top_mission_box: {
    marginTop: 23.5,
    width: deviceWidth - (32.7 * 2), height: 69.3,
    marginLeft: 32.7, marginRight: 32.7,
    padding: 5,
    borderColor: '#ffcd1a',
    borderWidth: 1.3,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  top_mission_T: {
    width: '100 %', height: '100%',
    fontSize: 20.7,
    color: '#333',
    paddingTop: 16,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 7,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  top_mission_title: {
    position: 'absolute',
    top: 8.5,
    left: deviceWidth / 2 - 101 / 2,
    width: 101, height: 32,
    borderRadius: 16,
    backgroundColor: '#ad6aef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  top_mission_title_T: {
    color: '#ffcd1a',
    fontSize: 18,
    fontWeight: 'bold',
  },
  top_mission_timer: {
    flexDirection: 'row',
    marginTop: 1.7,
    marginRight: 40.9,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  top_mission_timer_image: {
    width: 10.2, height: 10.2,
    resizeMode: 'contain',
    marginRight: 1.1
  },
  top_mission_timer_T: {
    color: '#ffffff',
    fontSize: 10.7,
  },


  // 릴레이 내용!!!!
  // 릴레이 - 탑3
  contents: {
    flex: 1,
    paddingTop: 47.7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contents_title: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12.4
  },
  contents_top3: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  contents_top3_image_box_T: {
    fontSize: 13.7,
    color: '#fff'
  },

  contents_top3_item1: {
    // FIXME: 정확한 수치!!!! 가로 길이, 마진, 
    width: 84.2,
    marginLeft: 20, marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contents_top3_image_box1: {
    width: 82.3, height: 82.3,
    position: 'absolute',
    top: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#495',
    borderRadius: 83.2 / 2,
    borderColor: '#ffcd1a',
    borderWidth: 2.3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2.7,
    elevation: 5
  },
  contents_top3_medal1: {
    width: '100%', height: 92.8,
    resizeMode: 'contain',
    marginBottom: 10.1,
    elevation: 6
  },

  contents_top3_item2: {
    // FIXME: 정확한 수치!!!! 가로 길이, 마진, 
    width: 69,
    marginLeft: 20, marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contents_top3_image_box2: {
    width: 67.7, height: 67.7,
    position: 'absolute',
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#495',
    borderRadius: 83.2 / 2,
    borderColor: '#ffcd1a',
    borderWidth: 2.3
  },
  contents_top3_medal2: {
    width: '100%', height: 92.8,
    resizeMode: 'contain',
    marginBottom: 10.1,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2.7,
    elevation: 5
  },
  contents_top3_T: {
    width: 77.3,
    color: '#333',
    fontSize: 16.7,
    textAlign: 'center',
  },
  hLine: {
    borderBottomColor: '#707070',
    borderBottomWidth: 0.5,
    width: deviceWidth - 32.5 * 2,
    margin: 20
  },


  // 릴레이 - 리스트 전체
  contents_index: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  contents_index_btn: {
    padding: 4,
  },
  contents_index_T: {
    color: '#a8a8a8',
    fontSize: 14.7,
    fontWeight: 'bold'
  },


  // 방 검색
  search: {
    position: 'absolute',
    top: 301.1,
    left: deviceWidth / 2 - 313.3 / 2,
    flexDirection: 'row',
    width: 313.3, height: 43.7,
    borderRadius: 7.7,
    backgroundColor: '#fff',
    shadowColor: '#555',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    alignItems: 'center',
    elevation: 5
  },
  search_image: {
    width: 12.8, height: 12.8,
    resizeMode: 'contain',
    marginLeft: 7.3, marginRight: 7.3,

  },
  search_T: {
    flex: 1,
    textAlign: 'left',
    fontSize: 13.3,
    color: '#8e8e93',

  }
});