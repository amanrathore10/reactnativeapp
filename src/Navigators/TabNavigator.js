import React, {Component} from 'react';
import { Text, View , Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Octicons from 'react-native-vector-icons/Octicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Home from '../Views/Home';

class DummyScreen extends Component {
    render() {
      return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Entypo name={'twitter'} size={70} style={{color: 'rgb(29, 161, 242)'}} />
        </View>
      );
    }
  };
export default  HomeTabs =  createBottomTabNavigator({
    Home: {
      screen: Home, 
  
    },
    Search: {
      screen: DummyScreen,
      navigationOptions: {
        tabBarLabel: 'Search',
      }
    },
    Notification: {
      screen: DummyScreen,
      navigationOptions: {
        tabBarLabel: 'Notification',
      }
    },
    DM: {
      screen: DummyScreen,
      navigationOptions: {
        tabBarLabel: 'DM',
      }
    },
    
  }, 
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        
        switch (routeName){
  
          case "Home":
            return <Octicons name={'home'} size={30} color={ focused ? 'rgb(29, 161, 242)':'rgb(136, 153, 166)'} />
          
          case "Search":
            return <EvilIcons name={'search'} size={35} color={ focused ?  'rgb(29, 161, 242)':'rgb(136, 153, 166)'} />
          
          case "Notification":
            return <Ionicons
                    name={'ios-notifications-outline'}
                    size={30}
                    style={{ color: focused ?  'rgb(29, 161, 242)':'rgb(136, 153, 166)' }}
                  />
          
          case "DM":
            return <FontAwesome
                    name={'envelope-o'}
                    size={26}
                    style={{ color: focused ? 'rgb(29, 161, 242)':'rgb(136, 153, 166)' }}
                  />
          
        }
      },
      
    }),
    
  
   
    tabBarOptions: {
      // activeTintColor: 'tomato',
      // inactiveTintColor: 'gray',
      showIcon: true,
          showLabel:false,
      showIndicator:false,
      titleStyle: {
          justifyContent: 'center',
          alignItems: 'center',
      },
      // style: {
      //     borderWidth: 0,
      //     position:'absolute',
      //     bottom:0,
      //     left:0,
      //     width:'100%',
      //     backgroundColor: 'rgb(27, 42, 51)',
      //     borderColor: 'rgb(27, 42, 51)',
      //     shadowColor:'red',
      //     elevation:2
      // },
      activeBackgroundColor: 'rgb(0, 79, 114)',
      inactiveBackgroundColor: 'rgb(27, 42, 51)',
      labelStyle: {
          fontSize: 14,
          color: '#fff',
          position: 'relative',
          alignSelf: 'center',
      },
      iconStyle:{
        marginBottom:5,
        marginTop:5
      },
      tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          
      },
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
    },
  });

