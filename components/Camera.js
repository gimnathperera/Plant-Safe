import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import axios from 'axios';
import Modal from 'react-native-modal';

import Loader from './Loader';

export default class Camera extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      isLoading: false
    };
  }

  pickFromGallery = async () => {
    this.setState({
      isVisible: false
    });
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
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
    this.setState({
      isVisible: false
    });
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
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

    try {
      this.setState({
        isLoading: true
      });
      const response = await axios.post(
        `http://192.168.1.4:5000/api/validate`,
        data
      );
      if (response) {
        this.setState({
          isLoading: false
        });
        if (response.data.status > 0) {
          this.getDiseasePredection(image);
        } else {
          alert(
            'No Plant Leaf Detected, Please provide an image of a plant leaf'
          );
          console.log('No Plant Detected');
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  getDiseasePredection = async (image) => {
    const data = new FormData();
    data.append('file', image);
    try {
      this.setState({
        isLoading: true
      });

      const response = await axios.post(
        `http://192.168.1.4:5000/api/predict`,
        data
      );

      if (response.data) {
        this.setState({
          isLoading: false
        });

        console.log(response.data);
        this.props.navigation.navigate('PredictionScreen');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  onShowModal = () => {
    this.setState({
      isVisible: true
    });
  };

  render() {
    return (
      <View style={styles.rect5Stack}>
        <Loader isLoading={this.state.isLoading} />
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

const styles = StyleSheet.create({
  rect5Stack: {
    width: 201,
    height: 44,
    marginTop: 9,
    marginLeft: 19
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
  }
});
