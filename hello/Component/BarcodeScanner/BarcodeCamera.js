import React,{Component} from 'react';
import {View,Modal,Text,StyleSheet,Button,TouchableOpacity} from 'react-native';
import {RNCamera, Barcode} from 'react-native-camera';

class BarcodeCamera extends Component{

    close_btn=()=>{
        this.props.navigation.navigate("HomeScreen");
    }


    render(){



        return(
    
                <View>


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

                    <Button title="닫기" onPress={this.close_btn}></Button>



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