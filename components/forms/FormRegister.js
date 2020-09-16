import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text
} from 'react-native';
import { Item, Icon, Input } from 'native-base';

import { userSignUp } from '../../store/actions';

class FormRegister extends Component {
  state = {
    fullname: '',
    password: '',
    email: ''
  };

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      alert('Account created successfully');

      this.props.navigation.navigate('LoginScreen');
    }
  }

  onSubmit = () => {
    const { fullname, email, password } = this.state;
    let user = {
      fullname,
      email,
      password
    };
    if (fullname == '') {
      alert('Fullname is required');
    } else if (email == '') {
      alert('Email is required');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      alert('Invalid email');
    } else if (password == '') {
      alert('Password is required');
    } else {
      const newUser = {
        email,
        fullname,
        password
      };
      this.props.userSignUp(newUser);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image1Stack}>
          <Image
            source={require('../../assets/images/blob1.png')}
            resizeMode='contain'
            style={styles.image1}
          ></Image>

          <View style={styles.group}>
            <TouchableOpacity
              style={styles.materialButtonPrimary1}
              onPress={this.onSubmit}
            >
              <Text style={styles.btnText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ImageBackground
          source={require('../../assets/images/blob.png')}
          resizeMode='contain'
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <View style={styles.image22Row}>
            <Image
              source={require('../../assets/images/registercustomer.png')}
              resizeMode='contain'
              style={styles.image22}
            ></Image>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.login}>SIGN</Text>
              <Text style={styles.login1}>UP</Text>
            </View>
          </View>
        </ImageBackground>
        <StatusBar
          animated={true}
          backgroundColor='#1A8766'
          barStyle='dark-content'
          hidden={false}
        ></StatusBar>

        <View style={{ paddingBottom: 15, paddingLeft: 30, paddingRight: 30 }}>
          <Text style={{ color: '#195F57', fontFamily: 'comicneuebold' }}>
            Fullname
          </Text>

          <Item>
            <Icon active name='md-person' />
            <Input
              placeholder='Enter your fullname'
              onChangeText={(value) => {
                this.setState({ fullname: value });
              }}
            />
          </Item>
        </View>
        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
          <Text style={{ color: '#195F57', fontFamily: 'comicneuebold' }}>
            Email
          </Text>

          <Item>
            <Icon active name='md-mail' />
            <Input
              placeholder='Enter your email'
              onChangeText={(value) => {
                this.setState({ email: value });
              }}
            />
          </Item>
          <Text></Text>
        </View>
        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
          <Text style={{ color: '#195F57', fontFamily: 'comicneuebold' }}>
            Passwords
          </Text>

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
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, {
  userSignUp
})(FormRegister);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image1: {
    top: 90,
    left: 59,
    width: 309,
    height: 415,
    position: 'absolute',
    transform: [
      {
        rotate: '91.00deg'
      }
    ]
  },
  group: {
    top: 120,
    left: 0,
    width: 121,
    height: 40,
    position: 'absolute'
  },
  materialButtonPrimary1: {
    width: 121,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#195F57',
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontFamily: 'comicneuebold'
  },
  image1Stack: {
    width: 368,
    height: 432,
    marginTop: 423,
    marginLeft: 25
  },
  image2: {
    width: 496,
    height: 473,
    flexDirection: 'row',
    marginTop: -1040,
    marginLeft: -182
  },

  image22: {
    width: 200,
    height: 200
  },
  login: {
    color: '#1D446F',
    fontSize: 40,
    marginLeft: 0,
    fontFamily: 'comicneuebold',
    marginTop: 170
  },
  login1: {
    color: '#195F57',
    fontSize: 40,
    marginLeft: 2,
    fontFamily: 'comicneuebold',
    marginTop: 170
  },
  image22Row: {
    height: 240,
    flexDirection: 'row',
    flex: 1,
    marginRight: 14,
    marginLeft: 160,
    marginTop: 200
  }
});
