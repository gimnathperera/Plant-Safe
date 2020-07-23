import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

export class CameraScreen extends Component {
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

    // fetch('https://api.cloudinary.com/v1_1/dark123/image/upload', {
    //   method: 'POST',
    //   body: data
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

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
        <View style={{ flexDirection: 'column' }}>
          <TouchableOpacity style={styles.rect5} onPress={this.pickFromCamera}>
            <Text style={styles.txt}> Choose from camera </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rect5} onPress={this.pickFromGallery}>
            <Text style={styles.txt}> Choose from gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rect5: {
    width: 201,
    height: 43,
    backgroundColor: '#195F57',
    borderRadius: 56,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  txt: {
    color: 'white'
  }
});

export default CameraScreen;
