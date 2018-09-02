import React,{Component} from 'react';
import {View,Modal,Text,Button,StyleSheet,TextInput} from 'react-native';

class JoinRoom extends Component{


    state={
        modalon:false,

        room_name:'',
        friends_id:'',
    }

    
    openmodal =() =>{
        this.setState({
            modalon:true
        })

    }

    closemodal =() =>{
        this.setState({
            modalon:false
        })
    }


    check_room_name = () =>{
        if(this.state.room_name ==''){alert('공백'); return; } //공백 부분 넘기고
        else{
            let {room_name} = this.state;
            let https="http://220.230.118.245:3000/room/findOne?room_name="+room_name; //고유 번호로 나중에 정책을 바꾸자.
            fetch(https)
            .then((res)=>{
                res.json()
                .then((res)=>{
                    if(!res){alert("올바른 방 이름을 적어주세요.");} //없다면
                    else{

                        //방 이름 있고 이제 참가하면댐. 

                        // 거기에 또 내가 참여 됬는지에 대한 부분도 있어야 함
                        
                        this.join_Room('Kimdonggeun');
                    }
                })
    
            });

        }

    }

    join_Room=(friends_id)=>{
        
        let userid="kimdonggeun" ; //내 아이디
        let friendid=friends_id; //친구아이디 친구아이디 유효성 검사도 해봐야되네
        let https= "http://220.230.118.245:3000/room/join?room_name="+this.state.room_name+"&user_id="+userid+"&friend_id="+friendid ; //restpul http get 방식

        fetch(https,{method : 'GET'})
        .then(res=>{
            if(!res) '서버 오류';
            else alert('방 참가 완료');
        });



    }


    render(){
        return(
            <View>
            <Button title="방 참여" onPress={this.openmodal}></Button>
            <Modal visible={this.state.modalon} onRequestClose={()=>{}}>
            
            <Text>방 이름</Text>
            <TextInput onChangeText={(text)=>this.setState({room_name : text})}> </TextInput>
            
            <Button title='방 참여' onPress={this.check_room_name}  ></Button>
            <Button title='방 닫기' onPress={this.closemodal}></Button>

            
            
            </Modal>

                </View> 
        );

    }

}

export default JoinRoom;