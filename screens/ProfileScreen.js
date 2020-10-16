import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { userSignOut } from '../store/actions';

class ProfileScreen extends Component {
  handleLogout = () => {
    this.props.navigation.navigate('InitialScreen');
    this.props.userSignOut();
  };

  render() {
    const { security } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.image9Stack}>
          <ImageBackground
            source={require('../assets/images/roses.jpg')}
            resizeMode='contain'
            style={styles.image9}
            imageStyle={styles.image9_imageStyle}
          >
            <Text style={styles.profile}>Profile</Text>
            <View gradientImage='Gradient_RiPhkqO.png' style={styles.rect5}>
              <View style={styles.image2Row}>
                <Image
                  source={require('../assets/images/profile.png')}
                  resizeMode='contain'
                  style={styles.image2}
                ></Image>
                <View style={styles.bittScottMangetColumn}>
                  <Text style={styles.bittScottManget}>
                    {security.fullname}
                  </Text>
                  <Text style={styles.bittGmailCom}>{security.email}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.rect}>
            <TouchableOpacity style={styles.rect2}>
              <View style={styles.image5Row}>
                <Image
                  source={require('../assets/images/edit.png')}
                  resizeMode='contain'
                  style={styles.image5}
                ></Image>
                <Text style={styles.editUserAccount}>Edit user account</Text>
                <Image
                  source={require('../assets/images/next.png')}
                  resizeMode='contain'
                  style={styles.image6}
                ></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rect3}>
              <View style={styles.image4Row}>
                <Image
                  source={require('../assets/images/hr.png')}
                  resizeMode='contain'
                  style={styles.image4}
                ></Image>
                <Text style={styles.helpAndSupport}>Help and Support</Text>
                <Image
                  source={require('../assets/images/next.png')}
                  resizeMode='contain'
                  style={styles.image7}
                ></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rect4} onPress={this.handleLogout}>
              <View style={styles.image3Row}>
                <Image
                  source={require('../assets/images/exit.png')}
                  resizeMode='contain'
                  style={styles.image3}
                ></Image>
                <Text style={styles.logout}>Signout</Text>
                <Image
                  source={require('../assets/images/next.png')}
                  resizeMode='contain'
                  style={styles.image8}
                ></Image>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return { security: state.security.user };
};

export default connect(mapStateToProps, { userSignOut })(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image9: {
    top: 0,
    left: 0,
    width: 416,
    height: 401,
    position: 'absolute'
  },
  image9_imageStyle: {},
  profile: {
    fontFamily: 'comicneuebold',
    color: 'rgba(255,255,255,1)',
    marginTop: 113,
    marginLeft: 183
  },
  rect5: {
    width: 247,
    height: 78,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,1)',
    borderRadius: 20,
    marginTop: 25,
    marginLeft: 86
  },
  image2: {
    width: 50,
    height: 50
  },
  bittScottManget: {
    fontFamily: 'comicneuebold',
    color: 'rgba(255,255,255,1)',
    fontSize: 18
  },
  bittGmailCom: {
    fontFamily: 'comicneuebold',
    color: 'rgba(255,255,255,1)',
    marginTop: 2
  },
  bittScottMangetColumn: {
    width: 139,
    marginLeft: 13,
    marginBottom: 9
  },
  image2Row: {
    height: 50,
    flexDirection: 'row',
    marginTop: 14,
    marginLeft: 15,
    marginRight: 30
  },
  rect: {
    top: 307,
    left: 23,
    width: 360,
    height: 438,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 27
  },
  rect2: {
    width: 294,
    height: 78,
    backgroundColor: 'white',
    borderRadius: 97,
    flexDirection: 'row',
    marginTop: 63,
    marginLeft: 36,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  image5: {
    width: 40,
    height: 46,
    marginTop: 6
  },
  editUserAccount: {
    fontFamily: 'comicneuebold',
    color: '#121212',
    marginLeft: 10,
    marginTop: 22,
    fontSize: 16
  },
  image6: {
    width: 29,
    height: 58,
    marginLeft: 59
  },
  image5Row: {
    height: 58,
    flexDirection: 'row',
    flex: 1,
    marginRight: 21,
    marginLeft: 27,
    marginTop: 9
  },
  rect3: {
    width: 294,
    height: 78,
    backgroundColor: 'white',
    borderRadius: 100,
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 38,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  image4: {
    width: 40,
    height: 46,
    marginTop: 12
  },
  helpAndSupport: {
    fontFamily: 'comicneuebold',
    color: '#121212',
    marginLeft: 12,
    marginTop: 22,
    fontSize: 16
  },
  image7: {
    width: 29,
    height: 58,
    marginLeft: 58
  },
  image4Row: {
    height: 58,
    flexDirection: 'row',
    flex: 1,
    marginRight: 23,
    marginLeft: 24,
    marginTop: 10
  },
  rect4: {
    width: 294,
    height: 78,
    backgroundColor: 'white',
    borderRadius: 100,
    flexDirection: 'row',
    marginTop: 26,
    marginLeft: 36,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  image3: {
    width: 40,
    height: 46,
    marginTop: 6
  },
  logout: {
    fontFamily: 'comicneuebold',
    color: '#121212',
    marginLeft: 14,
    marginTop: 20,
    fontSize: 16
  },
  image8: {
    width: 29,
    height: 58,
    marginLeft: 124
  },
  image3Row: {
    height: 58,
    flexDirection: 'row',
    flex: 1,
    marginRight: 21,
    marginLeft: 26,
    marginTop: 10
  },
  image9Stack: {
    width: 416,
    height: 745,
    marginTop: -74,
    marginLeft: -23
  }
});
