import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  KeyboardAvoidingView
} from 'react-native';
import { Item, Icon, Input } from 'native-base';

import { userSignIn } from '../../store/actions';

class FormLogin extends Component {
  state = {
    email: '',
    password: ''
  };

  componentDidUpdate(prevProps) {
    if (this.props.security !== prevProps.security) {
      this.props.navigation.navigate('Home');
    }
  }

  onSubmit = () => {
    const { email, password } = this.state;

    // this.props.navigation.navigate('Home');

    if (email == '') {
      alert('Email is required');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      alert('Invalid email');
    } else if (password == '') {
      alert('Password is required');
    } else {
      const credentials = {
        email,
        password
      };

      this.props.userSignIn(credentials);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image1Stack}>
          <Image
            source={require('../../assets/images/blob.png')}
            resizeMode='contain'
            style={styles.image1}
          ></Image>
          <View style={styles.group}>
            <TouchableOpacity
              style={styles.materialButtonPrimary1}
              onPress={this.onSubmit}
            >
              <Text style={styles.btnText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imageStack}>
          <ImageBackground
            source={require('../../assets/images/blob.png')}
            resizeMode='contain'
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <Image
              source={require('../../assets/images/wfh.png')}
              resizeMode='cover'
              style={styles.image2}
            ></Image>
          </ImageBackground>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.login}>LOG</Text>
            <Text style={styles.login1}>IN</Text>
          </View>
        </View>
        <StatusBar
          animated={true}
          backgroundColor='#1A8766'
          barStyle='dark-content'
          hidden={false}
        ></StatusBar>

        <KeyboardAvoidingView
          style={{
            paddingTop: 5,
            paddingLeft: 30,
            paddingRight: 30
          }}
        >
          <Text style={styles.label}>Email</Text>
          <Item>
            <Icon active name='md-mail' />
            <Input
              placeholder='Enter your email'
              onChangeText={(value) => {
                this.setState({ email: value });
              }}
            />
          </Item>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView
          style={{ paddingTop: 5, paddingLeft: 30, paddingRight: 30 }}
        >
          <Text style={styles.label}>Password</Text>

          <Item>
            <Icon active name='md-key' />
            <Input
              placeholder='Enter your password'
              onChangeText={(value) => {
                this.setState({ password: value });
              }}
              secureTextEntry={true}
            />
          </Item>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={{ margin: 20, marginLeft: 30 }}
          onPress={() => {
            this.props.navigation.navigate('RegisterScreen');
          }}
        >
          <Text style={{ ...styles.label, ...styles.labelLine }}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('mapStateToProps -> state', state);
  return { security: state.security };
};

export default connect(mapStateToProps, {
  userSignIn
})(FormLogin);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  btnText: {
    color: 'white',

    fontFamily: 'comicneuebold'
  },
  label: {
    color: '#195F57',
    fontFamily: 'comicneuebold'
  },
  labelLine: {
    textDecorationLine: 'underline'
  },
  image1: {
    top: 0,
    left: 0,
    width: 307,
    height: 415,
    position: 'absolute',
    transform: [
      {
        rotate: '-20.00deg'
      }
    ]
  },
  group: {
    top: 21,
    left: 217,
    width: 121,
    height: 40,
    position: 'absolute'
  },
  materialButtonPrimary1: {
    width: 121,
    height: 40,
    borderRadius: 25,
    marginLeft: 10,
    marginTop: 20,
    backgroundColor: '#195F57',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image1Stack: {
    width: 338,
    height: 415,
    marginTop: 469,
    marginLeft: -18
  },
  image: {
    top: 0,
    left: 18,
    width: 496,
    height: 473,
    position: 'absolute'
  },
  image_imageStyle: {},
  image2: {
    width: 215,
    height: 217,
    marginTop: 186,
    marginLeft: 84
  },
  login: {
    top: 356,
    left: 0,
    color: '#195F57',
    position: 'absolute',
    fontSize: 40,
    fontFamily: 'comicneuebold'
  },
  login1: {
    top: 356,
    left: 70,
    color: 'white',
    position: 'absolute',
    fontSize: 40,
    fontFamily: 'comicneuebold'
  },
  imageStack: {
    width: 514,
    height: 473,
    marginTop: -1030,
    marginLeft: 28
  },

  password: {
    color: '#1D446F',
    fontSize: 14,
    fontFamily: 'comicneuebold',
    marginTop: -52,
    marginLeft: 28
  },
  emailAddress: {
    color: '#1D446F',
    fontSize: 14,

    marginTop: -78,
    marginLeft: 28
  },
  rect: {
    width: 292,
    marginTop: 11,
    marginLeft: 28
  },
  rect1: {
    width: 292,
    marginTop: 111,
    marginLeft: 28
  }
});
