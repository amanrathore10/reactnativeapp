import React from 'react';
import { Text, View , Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from './src/Views/LoginRegister';
import HomeScreen from './src/Views/Home';
import SettingsScreen from './src/Views/Settings';
import AccountScreen from './src/Views/Account';
import SearchScreen from './src/Views/Search';
import LoadingScreen from './src/Views/Loading';
import DetailsScreen from './src/Views/Details';

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}


const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-home${focused ? '' : ''}`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Settings') {
    iconName = `ios-options${focused ? '' : ''}`;
  }else if (routeName === 'Account') {
    iconName = `md-wallet${focused ? '' : ''}`;
  }else if (routeName === 'Search') {
    iconName = `ios-search${focused ? '' : ''}`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});
const SearchStack = createStackNavigator({
  Settings: SearchScreen,
  Details: DetailsScreen,
});
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen,
});
const AccountStack = createStackNavigator({
  Settings: AccountScreen,
  Details: DetailsScreen,
});

const AppContainer = 
  createBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      Search: {screen:  SearchStack},
      Settings: { screen: SettingsStack },
      Account: {screen: AccountStack},
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  );
  
  const  AppStack = createDrawerNavigator(
    { 
      Home: AppContainer,
      Profile: () => <View style={{flex:1}}><Text>Profile Page</Text></View>,
    },
    
  );
  export default createAppContainer(
    createSwitchNavigator({
      App :  AppStack,
      Loading : LoadingScreen,
      Login:  LoginScreen
     }, {
        initialRouteName:'Login'
      }
    )
  );