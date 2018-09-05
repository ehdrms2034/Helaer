

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
  TouchableOpacity, Image,
  AppRegistry
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Relay from './Relay';
import { observer,inject } from 'mobx-react';
import { BarcodeCamera } from './Component/BarcodeScanner/BarcodeCamera'

@inject('mobxStore')
@inject('mystate')
@observer
export default class main extends Component {

  state={
    User_id:'',    
    Lv : 0,
    User_Nick: '',
    barcode:false,
    next_blood:'D-',
  }

  navigationToAbout = () => {
  this.props.navigation.navigate("RelayScreen");
}



  firstSet=()=>{ 
    fetch("http://220.230.118.245:3000/passport/isuser") //유저정보
    .then(res=>{
      res.json()
      .then(user=>{
          this.props.mobxStore.set_name(user.id);
          this.SecondSet(user.id);
          console.log(user.id);
        })
    })

    fetch("http://220.230.118.245:3000/room/rank3") //랭크
    .then(res=>{
      res.json().then(
        res=>{
          this.props.mystate.set_rank(res);
          console.log(res);
        }
      )
    })

    fetch("http://220.230.118.245:3000/mission/findOne").then( //미션
      res=>{
        res.json().then(
          res=>{
            this.props.mystate.set_mission(res[0]);
            let date = new Date();
            let times = date.getTime();
            let temp = new Date(res[0].end_date);
            let balance_time = temp.getTime()-times;
            

            this.props.mystate.set_mission_balance_time(new Date(balance_time)); //모벡스에 넣음
            console.log(this.props.mystate.mission_balance_time);
            console.log(this.props.mystate.mission);
          }
        )
      }
    )
  }

  SecondSet=(id)=>{
    fetch("http://220.230.118.245:3000/user/findOne?user_id="+id) //현재 유저 조회
    .then(res=>{
      res.json()
      .then(user=>{
        this.setState({
          Lv: user.user_level,
          User_Nick : user.user_name

        })
        this.props.mobxStore.set_mydata(user); //mobx에 들어감
        this.next_blood();
        console.log("2단계:"+id);
        this.thirdSet(id);
      })
    })
  }
  
  thirdSet=(id)=>{ //룸_relation 조회
    fetch("http://220.230.118.245:3000/room_relation/findOne?user_id="+id)
    .then(res=>{
      res.json()
      .then(room_rel=>{
        console.log(room_rel)
              if(room_rel){console.log("진입"); //룸 조회 성공
                this.setState({room_relation : room_rel});
                this.props.mobxStore.set_relation(room_rel);
                this.props.mystate.set_isinroom(true);
                console.log(this.props.mystate.isinroom);
                this.fourthSet(room_rel.room_name);
                
              } 
              else {} //룸 조회 실패
      });
    });
  }

  fourthSet=(roomid)=>{ // 룸아이디 조회
    fetch("http://220.230.118.245:3000/room/findOne?room_name="+roomid)
    .then(res=>{
        res.json()
        .then(room=>{
          
          if(room){
            this.setState({
            room_database : room
          });
          this.props.mobxStore.set_roomdatabase(room);
          this.props.mobxStore.set_people_list(room.room_people_list);
          console.log(this.props.mobxStore.roomdatabase.room_people_list[0].people_id);
        }
        })

    })
  }

  next_blood=()=>{ // 다음 헌혈 설정하는 거
    if(this.props.mobxStore.mydata.user_last_blood==null){ //최근헌혈정보가없다
      this.setState({next_blood: 'Nothing'})

    }
    else{ //있다
      let time = new Date(this.props.mobxStore.mydata.user_last_blood);
      let times = time.getTime();
      let next_blood = times+1000*60*60*24*30*2; //2달뒤
      let now = new Date();
      let now_time = now.getTime();
      let Ddays = Math.floor((next_blood-now_time)/(1000*60*60*24));
      let submitdata = "D-"+Ddays;
      this.setState({next_blood: submitdata});
      
    
    }
  }

  componentWillMount(){
    this.firstSet();
  }


  render() {

    return (
      <View style={styles.container}>

        {/* header - info */}
        <View style={styles.info}>
          {/* FIXME: 세로 정렬 맞추기  */}
          <View style={styles.info_me}>
            <View style={styles.info_me_Lv}>
              <Image source={require('./src/main_images/icon_lv.png')}
                style={styles.info_me_Lv_image} />
              <View style={styles.info_me_Lv_T}>
                <Text style={styles.info_me_Lv_T_Lv}>LV.</Text>
                <Text style={styles.info_me_Lv_T_LvR}> {this.state.Lv} </Text>
                <Text style={styles.info_me_Lv_T_Id}>{this.state.User_Nick}</Text>
              </View>
            </View>
            <View style={styles.info_me_Exp}>
              <Text style={styles.info_me_Exp_T_Exp}>EXP</Text>
              <View style={styles.info_me_Exp_box}></View>
            </View>
            <View style={styles.info_me_Spot}>
              <Image source={require('./src/main_images/icon_spot.png')}
                style={styles.info_me_Spot_image} />
              <Text style={styles.info_me_Spot_T} >부산대학로 센터</Text>
            </View>
          </View>
          {/* TODO: progressive circle */}
          <View style={styles.info_dDay}>
            <Text style={styles.info_dDay_T_title}>다음 헌혈까지</Text>
            <View style={styles.info_dDay_T_box}>
              <Text style={styles.info_dDay_T_count}>{this.state.next_blood}</Text>
            </View>
          </View>
        </View>

        {/* main - character */}
        <View style={styles.main}>
          <Text>캐릭터</Text>
        </View>

        {/* bottom - buttons */}
        <View style={styles.bottom}>
          <TouchableOpacity
            style={[styles.button, styles.btn1]}
            onPress={() => {this.props.navigation.navigate("HistoryScreen");}}>
            <Image source={require('./src/main_images/btn1_record.png')}
              style={[styles.image, styles.btn1_image]} />
            <Text style={styles.buttonText}>헌혈기록</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.btn2]}
            //() => navigate('RelayScreen')
            onPress={this.navigationToAbout}>
            <Image source={require('./src/main_images/btn2_relay.png')}
              style={[styles.image, styles.btn2_image]} />
            <Text style={styles.buttonText}>릴레이</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.btn3]}
            onPress={()=>{this.props.navigation.navigate("BarcodeScreen");}}>
            <Image source={require('./src/main_images/btn3_camera.png')}
              style={[styles.image, styles.btn3_image]} />
            <Text style={styles.buttonText}>헌혈인증</Text>
          </TouchableOpacity >
          
        </View >
        
      </View >
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#fff'
  },

  // 사용자 정보 섹션
  info: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // 사용자 정보 섹션 - 1 
  info_me: {
    position: 'absolute',
    left: 30, top: 30, width: 150,
  },
  info_me_Lv: {
    height: 28,
    flexDirection: 'row',
    marginBottom: 5.3
  },
  info_me_Lv_image: {
    width: 20.2,
    height: 20.2,
    resizeMode: 'contain',
    marginRight: 6.5,
  },
  info_me_Lv_T: {
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  info_me_Lv_T_Lv: {
    color: '#666',
    fontSize: 23.7
  },
  info_me_Lv_T_LvR: {
    color: '#ff6443',
    fontSize: 23.7,
    marginRight: 6.5
  },
  info_me_Lv_T_Id: {
    color: '#333',
    fontSize: 18,
    textAlignVertical: 'bottom',
  },

  // 사용자 정보 섹션 - 2
  info_me_Exp: {
    height: 10.3,
    flexDirection: 'row',
    marginBottom: 9.5
  },
  info_me_Exp_T_Exp: {
    color: '#333',
    fontSize: 10.3,
    fontFamily: 'Helvetica',
    marginRight: 3.5,
  },
  info_me_Exp_box: {
    width: 116.8,
    height: 7.1,
    backgroundColor: '#ffe3dd'
  },

  // 사용자 정보 섹션 - 3
  info_me_Spot: {
    height: 17.7,
    flexDirection: 'row',

  },
  info_me_Spot_image: {
    width: 9.8,
    marginLeft: 8.1,
    marginRight: 8.1,
    resizeMode: 'contain'
  },
  info_dDay_T_box: {
    width: 56.7,
    height: 56.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info_me_Spot_T: {
    color: '#333',
    fontSize: 16
  },


  // 헌혈 디데이
  info_dDay: {
    position: 'absolute',
    right: 30, top: 30, width: 90, height: '100%',
    alignItems: 'center'
  },
  info_dDay_T_title: {
    textAlign: 'center',
    color: '#000',
    fontSize: 12.3
  },
  info_dDay_T_count: {
    color: '#000',
    fontSize: 21
  },

  // 캐릭터
  main: {
    flex: 2.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff00ff',

  },

  // 버튼
  bottom: {
    height: 147.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  buttonText: {
    color: '#000',
    fontSize: 13.7,
  },


  btn1_image: {
    width: 58.8,
    height: 66,

  },
  btn2_image: {
    width: 93.8,
    height: 75.5,
  },
  btn3_image: {
    width: 69.2,
    height: 62,
  },
  btn1: {
    marginBottom: 38.3,
  },
  btn2: {
    marginBottom: 32.3,
  },
  btn3: {
    marginBottom: 38.3,
  },

});


AppRegistry.registerComponent('flow', () => AppNavigator);
