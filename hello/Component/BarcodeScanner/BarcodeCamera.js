import React,{Component} from 'react';
import {View,Modal,Text,StyleSheet,Button,TouchableOpacity} from 'react-native';
import {RNCamera, Barcode} from 'react-native-camera';
import { inject, observer } from 'mobx-react';

@inject('mobxStore')
@observer
class BarcodeCamera extends Component{

    close_btn=()=>{
        this.props.navigation.navigate("HomeScreen");
    }


    barcode_event=(data)=>{

        //근데 일단 중복확인부터해야함.

        const URL="http://220.230.118.245:3000/barcode/insertTwo";
            fetch(URL, { // 헌혈횟수 및 헌혈 증가
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                user_id : this.props.mobxStore.user_name,
        
            }), //post 요청하구
        });

        fetch("http://220.230.118.245:3000/barcode/insertOne", //바코드 저장
            {method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                barcode_number :data.data,
                barcode_user : this.props.mobxStore.user_name
            })
            }
        )
       console.log("헌혈 인증완료");
        this.props.navigation.navigate("HomeScreen");


    }

    
    

      
    
    render(){



        return(
    
                <View>


                    <RNCamera
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                    type={RNCamera.Constants.Type.back}
                    onBarCodeRead={this.barcode_event}
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