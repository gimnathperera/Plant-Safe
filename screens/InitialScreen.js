import React, { Component } from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class InitialScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        >
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
