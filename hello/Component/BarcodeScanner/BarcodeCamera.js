import React,{Component} from 'react';
import {View,Modal,Text,StyleSheet,Button} from 'react-native';
import {RNCamera, Barcode} from 'react-native-camera';

class BarcodeCamera extends Component{

    state={
        modalon:false,

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
    
                <View>

                    <Button title="바코드" onPress={this.openmodal}></Button>
                    
                    <Modal onRequestClose={()=>{}}
                        visible={this.state.modalon}
                    >

                    <RNCamera
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                    type={RNCamera.Constants.Type.back}
                    onBarCodeRead={(data)=>{
                        alert("인증성공 : "+data.data);
                        
                      }}
                    ref={ref => {
                        this.camera = ref;
                      }}
                      style={styles.Camera}

                    />

                    <Button title="닫기" onPress={this.closemodal}></Button>

                    </Modal>



                </View>

        );

    }


}

const styles = StyleSheet.create({
    Camera:{
        width:500,
        height: 300
    }

})

export default BarcodeCamera;