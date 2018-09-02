import React,{Component} from 'react';
import {Modal,View,Text,Button,StyleSheet,FlatList,TouchableOpacity} from 'react-native';

import RoomItem  from './RoomItem';

class RoomView extends Component{

    state={
        modalon:false,

        data : [{hello: " hi"}]

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

    fetch_data(){
        let https="http://220.230.118.245:3000/room/findAll";
        fetch(https)
        .then((res)=>{
            res.json()
            .then((res)=>{
                this.setState({
                    data : res
                });
                
                this.setState({data : this._addKeytodata(this.state.data)});
                //alert(this.state.data[0].key);
                // data state에 등록
            })

        })
    }

    _addKeytodata = datas =>{ //키를 더해줌
        return datas.map(data => {
            return Object.assign(data, {key: data.room_name});
        })
    }
    
    

    componentWillMount(){
        this.fetch_data();
        
    
    }
    
    _renderItem=item=>{
       return <RoomItem item={item}></RoomItem>
    
    }


    render(){
        return(
            <View>
            <Button title='방 보기' onPress={this.openmodal}></Button>

            <Modal onRequestClose={()=>{}}
                   visible={this.state.modalon}
            >
            
            <FlatList
          data={this.state.data}
          renderItem={({item}) => this._renderItem(item)}
        />



            <Button title="닫기" onPress={this.closemodal}></Button>    
            </Modal>

            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })

export default RoomView;