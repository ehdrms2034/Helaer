import React,{Component} from 'react';
import {Modal,View,Text,TextInput,Button,StyleSheet} from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('mobxStore')
@observer
export default class LoginPage extends Component{

    state ={
        modalon: false,
        
        id :'',
        passwd:''
    }

    openModal=()=>{

        this.setState({modalon: true});
    }

    closeModal=()=>{
        
        this.setState({modalon:false});
    }

    loginmethod=()=>{
        console.log("로그인 시도");
        const {id,passwd} = this.state;
        const URL="http://220.230.118.245:3000/passport/login";
        fetch(URL, {
            method: 'POST',
               headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json',
               },
           body: JSON.stringify({
               user_id : this.state.id,
               user_passwd : this.state.passwd
   
           }), //post 요청하구
       }).then((res)=>{
           if(!res) {alert("아이디 or 비밀번호 틀림"); return;} // 아이디 or 비번이 틀린경우
           else{
               res.json().then(user=>{
               if(user.id==null) alert("아이디 or 비밀번호 틀림"); // 아이디 or 비번이 틀린경우
               
               else{//alert(user.id+"님 접속을 환영합니다.");
                    this.props.mobxStore.set_name(user.id);
                    this.props.navigation.navigate("HomeScreen");} // 로그인 성공 // 이제 passport로부터 세션작동 들어감
                    console.log("로그인 성공");
                })
        }
    });

    }

    render(){
        return(
                
            <View>
                <Text>{this.props.mbox}</Text>
                <Text> id </Text>
                <TextInput onChangeText={(text)=>{this.setState({id:text});}}></TextInput>
                <Text>password</Text>
                <TextInput onChangeText={(text)=>{this.setState({passwd:text});}}></TextInput>
                
                <Button title="Login" onPress={this.loginmethod}></Button>

            </View>


        );


    }

}
