import React from 'react';
import {  View , Button } from 'react-native';

class LoginScreen extends React.Component{
  
    render(){
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
          <Button title="Login" onPress={()=>{ this.props.navigation.navigate('Loading')}}/>
        </View>
      )
    }
  }
  export default LoginScreen;