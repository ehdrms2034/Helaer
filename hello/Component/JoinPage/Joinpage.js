import React,{Component} from 'react';
import {Button,Modal,Text,TextInput,StyleSheet,View,Picker,ScrollView} from 'react-native';

class JoinPage extends Component{
    state={
        modalon:false,



        id : '',
        name:'',
        passwd : '',
        passwd2:'',
        age : 0,
        bloodType: 'A',
        date:'',
        birth:'',
        last_login:'',
        last_blood:'',
        id_check: false,
        passwd_check: false,
        check : false,


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

    id_check = ()=>{
      //id 중복체크
        let id = this.state.id;
        let xhr_http="http://220.230.118.245:3000/user/findOne?user_id="+id;
        let hi = new Promise ((resolve,reject)=>{
            let id=this.state.id;
            resolve(id);
        });

        //let xhr_http="http://220.230.118.245:3000/user/FindAll"
        hi.then((id)=>{
        fetch(xhr_http)
        .then( (response)=>
                {
                if(response.status !==200){
                    alert("문제 발생");
                    return ;
                }

            response.json().then(
                        (data)=>{
                        if(!data) {
                            this.setState({id_check : true});
                            alert("완료");
                            return;}
                        if(id==data.user_id){
                            alert("이미 사용중인 id입니다.");
                        }else{
                            alert("사용해도 좋은 id입니다.");
                            this.setState({id_check : true});
                        }
                    }
                );
            }
        )}
    )
    }
    //나중에 전부다 회원그거 하는걸로 하고



    check_complete =() =>{

        if(this.state.id_check==false) {alert("아이디 중복체크해주세요."); return; }

        if(this.state.passwd==''){alert("비밀번호가 공백입니다."); return; }

        if(this.state.birth==''){alert("생년월일이 공백입니다."); return;}

        if(this.state.passwd!=this.state.passwd2){
            alert("비밀번호가 동일하지 않습니다. "); return;
        }

        //이제 fetch 해서 post로 보내자.
        fetch('http://220.230.118.245:3000/user/insertOne', {
         method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            user_id : this.state.id,
            user_name : "칸만들자",
            user_passwd : this.state.passwd,
            user_age : this.state.age,
            user_birth :this.state.user_birth,
            user_blood_type : this.bloodType,


        }),
    }).then(()=>{
        alert("회원가입 완료");
    });
    //fetch 부분 끝

    }
    render(){



        return(
            
            <View>
            

            <Button title='회원가입' onPress={this.openmodal}/>

            <Modal onRequestClose={()=>{}}
                    visible={this.state.modalon}>
                    
                <View style={style.container}>
                <ScrollView>
                    <View style={style.formbox} >
                        <Text style={style.text}>아이디</Text>
                        <TextInput onChangeText={(text)=>this.setState({id : text, id_check:false})}
                                maxLength={12} ></TextInput>
                        <Button title="중복확인" onPress={this.id_check} ></Button>
                        <Text style={style.text} >비밀번호 </Text>
                        <TextInput secureTextEntry={true} value={this.state.passwd} onChangeText = {(text)=>{this.setState({passwd:text})}}></TextInput>
                        <Text style={style.text} >비밀번호 확인 </Text>
                        <TextInput secureTextEntry={true} value={this.state.passwd2} onChangeText={(text)=>{this.setState({passwd2:text})}}></TextInput>
                        <Text style={style.text}>생년월일</Text>
                        <TextInput onChangeText={(text)=>{this.setState({birth:text});}}></TextInput>
                        <Text style={style.text}>혈액형</Text>
                        <Picker selectedValue={this.state.bloodType}
                                onValueChange={(itemvalue,itemindex)=>{this.setState({bloodType:itemvalue})}}>
                        <Picker.Item label ="A형" value='A'/>    
                        <Picker.Item label ="B형" value='B'/>    
                        <Picker.Item label ="O형" value='O'/>    
                        <Picker.Item label ="AB형" value='AB'/>              
                        </Picker>
                    </View>
                    </ScrollView>
                    <View style={style.buttons}>

                        <Button title='회원가입' onPress={this.check_complete}></Button>
                        <Button title='닫기' onPress={this.closemodal}></Button>
                    </View>
                    
                </View>



            </Modal>


            </View>


        );

    }

}

const style = StyleSheet.create({

    container:{
            flex:1,
            margin: 30
    },
    formbox:{
        flex:3
    },
    text:{
        fontSize:24
    },

    buttons:{
        flex:1,
        flexDirection:'row',

    }

});


export default JoinPage;