import React,{Component} from 'react';
import {View,Text,Modal,Image,Button,StyleSheet,TouchableOpacity} from 'react-native';
import { inject } from 'mobx-react';


class RoomItem extends Component{

    state ={
        modalon:false

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
    render(){
        return(
            <View >
            <TouchableOpacity onPress={this.openmodal}><Text style={styles.item}>{this.props.item.room_name} </Text></TouchableOpacity>

            <Modal
             
             transparent={true} visible={this.state.modalon} onRequestClose={()=>{console.log('modal close ok');}}>
            <View style={styles.container}>
            <Text>방 주인 : {this.props.item.room_owner}</Text>

            <Button title="닫기" onPress={this.closemodal} ></Button>
            
            
            </View>
            </Modal>
            </View>
        );
        
    }

}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     margin: 100,
     backgroundColor:'grey'
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })

export default RoomItem;