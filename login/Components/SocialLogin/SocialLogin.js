import React from 'react';
import { View,Image, Text } from 'react-native';
import Facebook from '../../img/facebook.png'
import Google from '../../img/google-mas.png'
import Github from '../../img/github.png';


const SocialLogin = () => {
    return(
        <View>
            <View>
            <Text style={{color:'white',textAlign:"center", marginBottom: 15, marginTop:10}}>Más opciones de inicio de sesión:</Text>
            </View>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <Image source={Facebook} style={{marginLeft:115, marginRight: 30,borderRadius:32,borderColor:"white",borderWidth:2}}/>
                <Image source={Google} style={{marginRight: 30,borderRadius:32,borderColor:"white",borderWidth:2}}/>
                <Image source={Github} style={{borderRadius:32,borderColor:"white",borderWidth:2}}/>
            </View>
        </View>
    );
}

export default SocialLogin;