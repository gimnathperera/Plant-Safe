import React, { Component } from 'react';

import { StyleSheet, Image, View, StatusBar } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

class InitialScreen extends Component {
  onSkip = () => {
    this.props.navigation.navigate('LoginScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor='#1A8766'
          barStyle='dark-content'
          hidden={false}
        ></StatusBar>
        <Onboarding
          pages={[
            {
              backgroundColor: '#E0C9B1',
              image: (
                <Image
                  source={require('../assets/images/intros.jpg')}
                  resizeMode='center'
                />
              ),
              title: '',
              subtitle: ''
            },
            {
              backgroundColor: '#789353',
              image: (
                <Image
                  source={require('../assets/images/water.jpg')}
                  resizeMode='center'
                  style={{ right: 5 }}
                />
              ),
              title: '',
              subtitle: ''
            },
            {
              backgroundColor: '#fff',
              image: (
                <Image
                  source={require('../assets/images/extra.jpg')}
                  resizeMode='center'
                  style={{ right: 18 }}
                />
              ),
              title: '',
              subtitle: ''
            }
          ]}
          onSkip={this.onSkip}
          onDone={this.onSkip}
        />
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
