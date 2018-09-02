import React,{Component} from 'react';
import {Modal,Text,StyleSheet,Button,View,TextInput,Image,TouchableOpacity} from 'react-native';


class Custommodal extends Component{
    
    state = {
        modalon : false,
        room_name : '',
        room_intro: '',
    }

    openmodal = () =>{
        this.setState(
            { modalon : true }
        );
    };
    closemodal = () =>{
        this.setState({
            modalon: false
        });
    };
    make_room = (name,intro)=>{
        let  xhr = new XMLHttpRequest();
        xhr_room_name = this.state.room_name;
        xhr_room_intro = this.state.room_intro;
        xhr_room_owner ="미정";
        xhr_http="http://220.230.118.245:3000/room/make"+
        "?room_name="+xhr_room_name+
        "&room_owner="+xhr_room_owner+
        "&room_subject="+xhr_room_intro+
        "&room_people=1";
        xhr.open('GET',xhr_http);
        xhr.send();
        alert("방생성 완료");

    }
    

    render(){
        return(

            <View>
            <Modal
            onRequestClose={()=>{}}
            visible ={this.state.modalon}
            transparent={true}
            >
            
                <View style={styles.container}>
                    
                    <View style={styles.top}>

                        <View style={{width:20,height:20}}>
                            <TouchableOpacity
                                onPress={this.closemodal}
                            >
                                <Image source = {require('./img/minus_button.png')}
                                style={{resizeMode:'contain', height:20,width:20}}
                                />
                            </TouchableOpacity>

                        </View>
                    
                    </View>                  
                    <View style={styles.middle}>
                        <Text style={{fontSize:24}}>방 제목</Text>
                    
                        <TextInput onChangeText={(text)=>{
                            this.setState({room_name : text})}}
                            value={this.state.room_name}
                            underlineColorAndroid='#7740ff'
                        ></TextInput>

                        <Text style={{fontSize:24, marginTop:10}}>방 소개</Text>
                        <TextInput underlineColorAndroid="#7740ff"
                                    onChangeText={(text)=>{this.setState({room_intro:text})}}
                                    value={this.state.room_intro}
                        ></TextInput>

                        
                    </View>

                    <View style={styles.bottom}>


                    <Button
                        title="방 생성하기"
                        onPress={this.make_room}
                    /> 

                    </View>


                </View>

            </Modal>

            
            <Button title="방 생성하기"
                    onPress ={this.openmodal}
            ></Button>


            </View>
        );

    }
    

}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        flexDirection : 'column',
        margin : 50,
        marginTop : 150,
        marginBottom : 150,
        padding : 20,
        backgroundColor: 'white',
        shadowOpacity: 5,
        elevation : 2,
        borderRadius : 20,
        minHeight:300
        

    },

    top:{
        flex : 0.5,
        alignItems : 'flex-end',
        flexDirection:'row',
        justifyContent : 'flex-end'
        

    },

    middle:{
        flex : 3,
        flexDirection : 'column'

    },

    bottom: {
        flex : 1
        

    }

});

export default Custommodal;