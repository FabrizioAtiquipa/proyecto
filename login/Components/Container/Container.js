import React from 'react';
import { View,Text,Image, Dimensions,StyleSheet, Button, Alert } from 'react-native';
import IMG from '../../img/fondo.jpg'
import DARK from '../../img/dark.jpg'
import SocialLogin from '../SocialLogin/SocialLogin'
import LogIn from '../LogIn/LogIn'
const {width} = Dimensions.get("window");
const aspectRatio = 590/1125;
const height = (width * aspectRatio)*0.61;

const showAlert = () => {
    Alert.alert(
        'REGISTRAR',
        'Lo sentimos, vista en creación',
        [
        {text:'Ok', onPress: () => console.log('Ok Pressed')},
        ],
        {cancelable: false},
    );
};




const Container = () => {
    return(
        <View style={{flex:1, backgroundColor:"#202020"}}>
            <View style={{backgroundColor:"white"}}>
                <View style={{overflow:"hidden"}}>
                    <Image source={IMG} style={{width,height, borderBottomLeftRadius:80}}/>
                </View>
            </View>
            <View style={{flex:1,overflow:"hidden"}}>
                <Image source={DARK} style={{...StyleSheet.absoluteFillObject ,width,height:500}}/>
                <View style={{borderRadius:80, borderTopLeftRadius:0, backgroundColor:"white",flex:1}}>
                    <LogIn />
                </View>
            </View>
            <View style={{height:140, backgroundColor:"#202020"}}> 
                <SocialLogin />
                <Button
                onPress={showAlert}
                title="Registrate"
                color="transparent"
                />
            </View>
        </View>
    );
}

export default Container;