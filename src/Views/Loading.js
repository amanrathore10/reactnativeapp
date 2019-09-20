import React from 'react';
import { Text, View  } from 'react-native';

class LoadingScreen extends React.Component{
    componentDidMount(){
      setInterval(()=>{
        this.props.navigation.navigate("App");
      },3000);
    }
    render(){
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:"center"}}><Text>Loading...</Text></View>
      )
    }
  }
  
  export default LoadingScreen;