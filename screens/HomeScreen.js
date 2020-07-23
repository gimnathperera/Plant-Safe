import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import Modal from 'react-native-modal';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

class Home extends Component {
  state = {
    isVisible: false
  };

  onShowModal = () => {
    this.setState({
      isVisible: true
    });
  };
  pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1 //1 means high quality
      });
      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split('.')[1]}`,
          name: `test.${data.uri.split('.')[1]}`
        };
        this.onUpload(newFile);
      }
    } else {
      Alert.alert('You need to give permissions');
    }
  };

  pickFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1 //1 means high quality
      });
      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split('.')[1]}`,
          name: `test.${data.uri.split('.')[1]}`
        };
        this.onUpload(newFile);
      }
    } else {
      Alert.alert('You need to give permissions');
    }
  };

  onUpload = async (image) => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'plantsApp');
    data.append('cloud_name', 'dark123');

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dark123/image/upload`,
        data
      );
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rect2StackStack}>
          <View style={styles.rect2Stack}>
            <Image
              source={require('../assets/images/blob1.png')}
              resizeMode='cover'
              style={styles.rect2}
            ></Image>
            <View style={styles.rect}>
              <Text style={styles.loremIpsum}>Hi! Welcome to Plant Safe</Text>
              <View style={styles.rect4}>
                <Text style={styles.healYourCrop}>Heal Your Crop!</Text>
                <View style={styles.image3Row}>
                  <Image
                    source={require('../assets/images/qr.png')}
                    resizeMode='contain'
                    style={styles.image3}
                  ></Image>
                  <Image
                    source={require('../assets/images/next.png')}
                    resizeMode='contain'
                    style={styles.image6}
                  ></Image>
                  <Image
                    source={require('../assets/images/paper.png')}
                    resizeMode='contain'
                    style={styles.image4}
                  ></Image>
                  <Image
                    source={require('../assets/images/next.png')}
                    resizeMode='contain'
                    style={styles.image7}
                  ></Image>
                  <Image
                    source={require('../assets/images/healthcare-and-medical.png')}
                    resizeMode='contain'
                    style={styles.image5}
                  ></Image>
                </View>
                <View style={styles.rect5Stack}>
                  <TouchableOpacity
                    style={styles.rect5}
                    onPress={() => {
                      // this.props.navigation.navigate('PredictionScreen');
                      this.onShowModal();
                    }}
                  >
                    <Text style={styles.takeAPicture}>Take a Picture</Text>
                  </TouchableOpacity>

                  <Image
                    source={require('../assets/images/photography.png')}
                    resizeMode='contain'
                    style={styles.image8}
                  ></Image>
                </View>
              </View>
              <View style={styles.rect6}>
                <Text style={styles.previousPictures}>Previous pictures</Text>
                <View style={styles.rect8Row}>
                  <View style={styles.rect8}></View>
                  <View style={styles.rect10}></View>
                  <View style={styles.rect9}></View>
                  <View style={styles.rect11}></View>
                </View>
              </View>
              <View style={styles.rect7}>
                <View style={styles.today14JulColumnRow}>
                  <View style={styles.today14JulColumn}>
                    <Text style={styles.today14Jul}>Today, 14 Jul</Text>
                    <Text style={styles.today15}>27.7° C</Text>
                    <Text style={styles.sunset632Pm}>Sunset 6.32 PM</Text>
                  </View>
                  <Image
                    source={require('../assets/images/rain.png')}
                    resizeMode='contain'
                    style={styles.image9}
                  ></Image>
                </View>
                <Text style={styles.rainUntilAfternoon}>
                  Rain until afternoon 75%
                </Text>
              </View>
            </View>
            <Image
              source={require('../assets/images/animation_500_kcit151v.gif')}
              resizeMode='contain'
              style={styles.image2}
            ></Image>
            {/* <Text
              style={{
                top: 30,
                fontSize: 24,
                fontFamily: 'comicneuebold',
                color: '#195F57',
                left: 10
              }}
            >
              Plant Safe
            </Text> */}
            <Image
              source={require('../assets/images/logo.png')}
              resizeMode='contain'
              style={styles.image10}
            ></Image>
          </View>
          <Image
            source={require('../assets/images/blob1.png')}
            resizeMode='cover'
            style={styles.rect3}
          ></Image>
        </View>
        <Modal
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalHeader}>Choose</Text>
              <View style={styles.modalBody}>
                <TouchableOpacity onPress={this.pickFromCamera}>
                  <Image
                    source={require('../assets/images/photo.png')}
                    resizeMode='contain'
                    style={styles.modalImage1}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.pickFromGallery}>
                  <Image
                    source={require('../assets/images/memories.png')}
                    resizeMode='contain'
                    style={styles.modalImage2}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.cameraRow}>
                <Text style={styles.camera}>Camera</Text>
                <Text style={styles.gallery}>Gallery</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.setState({ isVisible: false })}
              >
                <Text style={styles.modalCancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Home;
// comicneuebold
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  rect2: {
    top: -40,
    left: 110,
    height: 350,
    position: 'absolute'
  },
  modalView: {
    width: 239,
    height: 157,
    backgroundColor: 'white',
    borderRadius: 17,

    alignSelf: 'center'
  },
  modalHeader: {
    fontFamily: 'comicneuebold',
    color: '#121212',
    fontSize: 18,
    marginTop: 12,
    marginLeft: 14
  },
  modalBody: {
    height: 30,
    flexDirection: 'row',
    marginTop: 21,
    marginLeft: 55,
    marginRight: 54
  },
  modalImage1: {
    width: 50,
    height: 50,
    bottom: 9,
    right: 10
  },
  modalImage2: {
    width: 50,
    height: 50,
    marginLeft: 40,
    bottom: 10
  },
  cameraRow: {
    height: 17,
    flexDirection: 'row',
    marginTop: 7,
    marginLeft: 45,
    marginRight: 48
  },
  camera: {
    fontFamily: 'comicneueregular',
    color: '#121212',
    top: 5,
    left: 2
  },
  gallery: {
    fontFamily: 'comicneueregular',
    color: '#121212',
    marginLeft: 59,
    top: 5
  },
  modalCancel: {
    fontFamily: 'comicneuebold',
    color: 'red',
    marginTop: 20,
    marginLeft: 180
  },
  rect: {
    top: 90,
    width: 278,
    height: 513,
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 35,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 7,
    shadowOpacity: 1,
    shadowRadius: 4,
    left: 28
  },
  loremIpsum: {
    fontFamily: 'comicneuebold',
    color: '#195F57',
    fontSize: 20,
    marginTop: 19,
    marginLeft: 24
  },
  rect4: {
    width: 238,
    height: 176,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 27,
    marginTop: 30,
    marginLeft: 20,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  healYourCrop: {
    fontFamily: 'comicneuebold',
    color: '#195F57',
    fontSize: 18,
    marginTop: 14,
    marginLeft: 21
  },
  image3: {
    width: 38,
    height: 39,
    marginTop: 11
  },
  image6: {
    width: 16,
    height: 34,
    marginLeft: 12,
    marginTop: 14
  },
  image4: {
    width: 48,
    height: 48,
    marginLeft: 7,
    marginTop: 3
  },
  image7: {
    width: 16,
    height: 34,
    marginLeft: 1,
    marginTop: 13
  },
  image5: {
    width: 47,
    height: 53,
    marginLeft: 2
  },
  image3Row: {
    height: 53,
    flexDirection: 'row',
    marginTop: 27,
    marginLeft: 31,
    marginRight: 20
  },
  rect5: {
    top: 1,
    left: 0,
    width: 201,
    height: 43,
    position: 'absolute',
    backgroundColor: '#195F57',
    borderRadius: 56
  },
  takeAPicture: {
    fontFamily: 'comicneuebold',
    color: 'rgba(255,255,255,1)',
    fontSize: 14,
    marginTop: 13,
    marginLeft: 84
  },
  image8: {
    top: 0,
    left: 25,
    width: 35,
    height: 42,
    position: 'absolute'
  },
  rect5Stack: {
    width: 201,
    height: 44,
    marginTop: 9,
    marginLeft: 19
  },
  rect6: {
    width: 238,
    height: 85,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 27,
    marginTop: 19,
    marginLeft: 22,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  previousPictures: {
    fontFamily: 'comicneuebold',
    color: '#195F57',
    fontSize: 14,
    marginTop: 9,
    marginLeft: 14
  },
  rect8: {
    width: 35,
    height: 36,
    backgroundColor: '#E6E6E6',
    borderRadius: 5
  },
  rect10: {
    width: 35,
    height: 36,
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    marginLeft: 21
  },
  rect9: {
    width: 35,
    height: 36,
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    marginLeft: 23
  },
  rect11: {
    width: 35,
    height: 36,
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    marginLeft: 23
  },
  rect8Row: {
    height: 36,
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 17,
    marginRight: 14
  },
  rect7: {
    width: 238,
    height: 126,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 27,
    marginTop: 17,
    marginLeft: 22,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  today14Jul: {
    fontFamily: 'comicneuebold',
    color: '#195F57',
    fontSize: 14
  },
  today15: {
    fontFamily: 'comicneuebold',
    color: '#195F57',
    fontSize: 30,
    marginTop: 6
  },
  sunset632Pm: {
    fontFamily: 'comicneuebold',
    color: '#195F57',
    fontSize: 13,
    marginTop: 3,
    marginLeft: 1,
    width: 90
  },
  today14JulColumn: {
    width: 84,
    marginTop: 2
  },
  image9: {
    width: 78,
    height: 71,
    marginLeft: 46
  },
  today14JulColumnRow: {
    height: 72,
    flexDirection: 'row',
    marginTop: 14,
    marginLeft: 14,
    marginRight: 16
  },
  rainUntilAfternoon: {
    fontFamily: 'comicneuebold',
    color: '#195F57',
    fontSize: 13,
    marginTop: 18,
    marginLeft: 15
  },
  image2: {
    top: 492,
    left: 270,
    width: 131,
    height: 155,
    position: 'absolute'
  },
  sunset633: {
    top: 178,
    left: 64,
    position: 'absolute',
    fontFamily: 'comicneuebold',
    color: '#121212',
    fontSize: 13
  },
  image10: {
    top: 20,
    bottom: 20,
    left: -5,
    width: 120,
    height: 35,
    position: 'absolute'
  },
  rect2Stack: {
    top: 0,
    left: 57,
    width: 402,
    height: 647,
    position: 'absolute'
  },
  rect3: {
    top: 447,
    left: 0,
    width: 273,
    height: 245,
    position: 'absolute'
  },
  rect2StackStack: {
    width: 459,
    height: 692,
    marginLeft: -50
  }
});
