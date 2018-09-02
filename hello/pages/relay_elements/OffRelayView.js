
import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
  TouchableOpacity, Image,
  ListView, TextInput,
  Modal,
} from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('mobxStore')
@inject('mystate')
@observer
export default class OffRelayView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      height: 30,
      modalHeight: 258.3,

      room_name : '',
      room_intro : '',
    };
  }


  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  updateSize = (height) => {
    this.setState({
      height,
      modalHeight: 258.3 + height
    })
  }

  make_room_event=()=>{
    const xhr_room_name = this.state.room_name;
    const xhr_room_intro = this.state.room_intro;
    const xhr_room_owner =this.props.mobxStore.user_name;
    const xhr_http="http://220.230.118.245:3000/room/make"+
    "?room_name="+xhr_room_name+
    "&room_owner="+xhr_room_owner+
    "&room_subject="+xhr_room_intro+
    "&room_people=1";
    console.log("방생성 준비");

    fetch(xhr_http).then(
      res=>res.json()
      .then(data=>{
          this.props.mobxStore.set_roomdatabase(data[0]);
          this.props.mobxStore.set_relation(data[1]);
          console.log(data[1]);
          console.log("방 생성 완료");
          this.props.mystate.set_isinroom(true);

      })
    )



  }

  render() {
    const { input_roomTitle, input_roomIntro, height } = this.state;

    let newStyle = {
      height
    }

    return (
      <View style={styles.container}>
        <Text style={styles.noti}>
          현재 참여 중인 릴레이가 없습니다.
          </Text>

        <TouchableOpacity
          style={styles.btn_newRelay}
          onPress={() => {
            this.setModalVisible(true);
          }} >
          <Text style={styles.btn_newRelay_T}>새 릴레이 만들기</Text>
        </TouchableOpacity>


        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>

          <View style={styles.modal_container}>
            <View style={[styles.modal_size, { height: this.state.modalHeight }]}>
              <View style={styles.modal_header}>
                <TouchableOpacity style={styles.modal_header_btn}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Image style={styles.modal_header_btn_image}
                    source={require('./../../src/relay_images/icon_close.png')} />
                </TouchableOpacity>
              </View>
              <View style={styles.modal_contents_box}>
                <View style={styles.modal_contents}>
                  <Text style={styles.modal_contents_title}>방 제목</Text>
                  <TextInput style={styles.modal_contents_input}
                    onChangeText={(value) => this.setState({ room_name:value })}
                    editable={true}
                    maxLength={15}
                    placeholder="15자 이내로 작성해주세요." />
                </View>
                <View style={styles.modal_contents}>
                  <Text style={styles.modal_contents_title}>방 소개</Text>
                  <TextInput style={[styles.modal_contents_input, newStyle]}
                    onChangeText={(value) => this.setState({ room_intro:value })}
                    multiline={true}
                    editable={true}
                    maxLength={100}
                    placeholder="100자 이내로 작성해주세요."
                    onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height + 10)} />
                </View>

                <View style={styles.modal_btn_box}>
                  <TouchableOpacity style={styles.modal_btn_new}
                    onPress={this.make_room_event}>
                    <Text style={styles.modal_btn_new_T}>
                      새 릴레이 만들기
                        </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>


      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  noti: {
    color: '#fff',
    fontSize: 16,
    marginTop: 40.5
  },
  btn_newRelay: {
    width: 139, height: 33.3,
    borderColor: '#ffcd1a',
    borderRadius: 14,
    borderWidth: 1.3,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 56.3
  },
  btn_newRelay_T: {
    color: '#fff',
    fontSize: 16.7,
    fontWeight: 'bold',

    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6.7,
  },

  // 모달 - 새 릴레이 만들기
  modal_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  modal_size: {
    width: 248.7, height: 258.3,
    borderRadius: 15.7,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_header: {
    width: '100%', height: 28.4,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  modal_header_btn: {
    width: 30.1, height: 28.4,
    padding: 12.4,
    marginRight: 14.2
  },
  modal_header_btn_image: {
    width: 17.7, height: 15.9,
    resizeMode: 'contain',
  },
  modal_contents_box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 11.7, paddingBottom: 20
  },
  modal_contents: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 24.8, paddingRight: 24.8,
    paddingTop: 5, paddingBottom: 6
  },
  modal_contents_title: {
    width: 248.7 - 24.8 * 2,
    textAlign: 'left',
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modal_contents_input: {
    width: 248.7 - 24.8 * 2,
    textAlign: 'left',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    color: '#333',
    fontSize: 13.3,
    paddingBottom: 5,
    lineHeight: 20,

    borderBottomColor: '#7740ff',
    borderBottomWidth: 0.7,
  },

  modal_btn_box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal_btn_new: {
    width: 139, height: 33.3,
    borderRadius: 14,
    borderColor: '#ffcd1a',
    borderWidth: 1.3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    elevation: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_btn_new_T: {
    textAlign: 'center',
    color: '#707070',
    fontSize: 16.7,
    fontWeight: 'bold',

  }

})