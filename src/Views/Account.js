import React from 'react';
import { Text, View , Button } from 'react-native';

class AccountScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Account</Text>
          <Button
            title="Go to Account"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
  }

  export default AccountScreen;