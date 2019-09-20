import React from 'react';
import { Text, View , Button } from 'react-native';

class SearchScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Search</Text>
          <Button
            title="Go to Search"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
  }

  export default SearchScreen;