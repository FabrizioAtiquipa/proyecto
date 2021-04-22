import React, {Component} from "react";
import {StyleSheet, ImageBackground, TouchableOpacity, Text, View, TextInput, Image, str} from 'react-native';
import Container from './Components/Container/Container';
import ConexionFetch from './Components/ConexionFetch/ConexionFetch';
import Details from './Components/Detalles/Details'
import LogIn from './Components/LogIn/LogIn'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Container">
          <Stack.Screen name="Container" component={Container}/>
          <Stack.Screen name="ConexionFetch" component={ConexionFetch}/>
          <Stack.Screen name="Details" component={Details}/>
          <Stack.Screen name="LogIn" component={LogIn}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}