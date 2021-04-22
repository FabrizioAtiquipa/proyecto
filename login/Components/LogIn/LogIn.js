import React, {Component}  from 'react';
import { View,Text,StyleSheet,Button,TextInput,TouchableOpacity } from 'react-native';

export default class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userValue: '',
      passwordValue: '',
      message: '',
      count: 0,
    }
  }

  changeTextUserInput = text => {
    this.setState({userValue: text});
  };
  changeTextPasswordInput = text => {
    this.setState({passwordValue: text});
  };

  onPress = () => {
    this.setState({message:''})
    if (this.state.userValue=="1" && this.state.passwordValue=="1"){
      this.props.navigation.navigate('ConexionFetch')
    }else if( this.state.userValue=="" || this.state.passwordValue==""){
      this.setState({message: "Complete los campos vacios"})
    } 
    else {
      this.setState({message: "Las credenciales no son correctas"})
    }
  };

  render() {
    return ( 
    <View>
      <View style={{padding:5}}>
        <Text style={{fontWeight:"bold", fontSize:70,fontFamily: 'Raleway-Bold',color:"#008BFF",textAlign:"center"}}>¡Bienvenido a UNDERWAY!</Text>
        <Text style={{textAlign:"center", marginTop:15, fontSize:15}}>Tu mejor opción para de cargas</Text>

        <View style={{alignItems:"flex-start", padding:10}}>  
            <Text style={{marginStart:10, marginTop:15, fontSize:15}}>Correo:</Text>    
            <TextInput
            ref={input => { this.textUser = input }}
            placeholder={'Correo'}
            style={styles.input}
            onChangeText={text=>this.changeTextUserInput(text)}
            />
            <Text style={{marginStart:10, marginTop:15, fontSize:15}}>Contraseña:</Text>    
            <TextInput
            ref={input => { this.textPassword = input }}
            placeholder={'Contraseña'}
            secureTextEntry={true}
            style={styles.input}
            onChangeText={text=>this.changeTextPasswordInput(text)}
            />
        </View> 

        <View style={{alignItems:"center", marginTop: 15}}>
            <TouchableOpacity style={styles.button} onPress={this.onPress}>
              <Text style={{color:"#fff", fontWeight:"bold"}}> Iniciar Sesion </Text>
            </TouchableOpacity>
            <Text style={styles.alert}>{this.state.message}</Text>
            <Text style={styles.text}>
            {this.state.newUserValue}
            </Text>
            <Text style={styles.text}>
            {this.state.newPasswordValue}
            </Text>
         </View>

      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 1,
    width: 120,
    padding:10,
    alignItems: 'center',
    borderRadius: 5,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#0094EA',
  },
  alert: {
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    width: 420,
    height: 44,
    margin:10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#008BFF',
    marginBottom: 10,
    borderRadius: 5,
    marginTop: 20,
  },
})


