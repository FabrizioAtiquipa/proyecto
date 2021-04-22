import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,ImageBackground} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { DataTable } from 'react-native-paper';

export default class Details extends Component {
    render() {
        const image = { uri: "https://i.pinimg.com/564x/09/2e/2f/092e2f99dce8e1513c6f2d77220351b1.jpg" };
        const {params} = this.props.route;
        return ( 
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{params.itemObject.nombreCliente}</Text>
                    <Text style={styles.descripcion}>{params.itemObject.Carga}{"\n"}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image1:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "rgba(34,34,34,0.75)",
    },
    title: {
        fontWeight: 'bold',
        flexDirection:'column',
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 30,
        color:"white",
        textAlign:"center",
    },
    descripcion: {
        flexDirection:'column',
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 13,
        color:"white",
        textAlign: "justify",
    }
});