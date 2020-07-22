import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

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
      console.log(data);
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
      console.log(data);
    } else {
      Alert.alert('You need to give permissions');
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
