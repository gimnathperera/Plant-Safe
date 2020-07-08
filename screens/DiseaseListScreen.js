import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';

class DiseaseListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DiseaseList Screen</Text>
      </View>
    );
  }
}

export default DiseaseListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image: {
    top: 0,
    left: 252,
    width: 336,
    height: 320,
    position: 'absolute'
  },
  image1: {
    top: 283,
    left: 0,
    width: 466,
    height: 500,
    position: 'absolute'
  },
  image1_imageStyle: {},
  rect2: {
    width: 289,
    height: 300,
    marginTop: 20,
    marginLeft: 155
  },
  rect3: {
    width: 237,
    height: 63,
    backgroundColor: 'rgba(255,255,255,1)',
    elevation: 6,
    borderRadius: 15,
    shadowOffset: {
      height: 2,
      width: 2
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.02,
    shadowRadius: 2,
    overflow: 'visible',
    flexDirection: 'row',
    marginTop: 56,
    marginLeft: 28
  },
  image4: {
    width: 38,
    height: 46
  },
  rect6: {
    top: 0,
    left: 115,
    width: 40,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  loremIpsum: {
    top: 6,
    left: 0,
    width: 120,
    height: 50,
    color: '#1D446F',
    position: 'absolute',
    fontFamily: 'comicneueregular'
  },
  rect6Stack: {
    width: 155,
    height: 38,
    marginLeft: 20,
    marginTop: 7
  },
  image4Row: {
    height: 46,
    flexDirection: 'row',
    flex: 1,
    marginRight: 11,
    marginLeft: 13,
    marginTop: 6
  },
  rect4: {
    width: 237,
    height: 63,
    backgroundColor: 'rgba(255,255,255,1)',
    elevation: 6,
    borderRadius: 15,
    shadowOffset: {
      height: 2,
      width: 2
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.02,
    shadowRadius: 2,
    overflow: 'visible',
    flexDirection: 'row',
    marginTop: 39,
    marginLeft: 28
  },
  image5: {
    width: 39,
    height: 41
  },
  rect7: {
    top: 0,
    left: 114,
    width: 40,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  reportAProblem: {
    top: 5,
    left: 0,
    width: 120,
    height: 50,
    color: '#1D446F',
    position: 'absolute',
    fontFamily: 'comicneueregular'
  },
  rect7Stack: {
    width: 154,
    height: 38,
    marginLeft: 21,
    marginTop: 3
  },
  image5Row: {
    height: 41,
    flexDirection: 'row',
    flex: 1,
    marginRight: 11,
    marginLeft: 12,
    marginTop: 10
  },
  rect5: {
    width: 237,
    height: 63,
    backgroundColor: 'rgba(255,255,255,1)',
    elevation: 6,
    borderRadius: 15,
    shadowOffset: {
      height: 2,
      width: 2
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.02,
    shadowRadius: 2,
    overflow: 'visible',
    flexDirection: 'row',
    marginTop: 38,
    marginLeft: 29
  },
  image6: {
    width: 33,
    height: 46
  },
  rect8: {
    top: 0,
    left: 116,
    width: 40,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  logout: {
    top: 5,
    left: 0,
    width: 120,
    height: 50,
    color: '#1D446F',
    position: 'absolute',
    fontFamily: 'comicneueregular'
  },
  rect8Stack: {
    width: 156,
    height: 38,
    marginLeft: 18,
    marginTop: 6
  },
  image6Row: {
    height: 46,
    flexDirection: 'row',
    flex: 1,
    marginRight: 12,
    marginLeft: 18,
    marginTop: 7
  },
  rect1: {
    top: 165,
    left: 167,
    width: 265,
    height: 123,
    backgroundColor: 'rgba(255,255,255,1)',
    position: 'absolute',
    elevation: 6,
    borderRadius: 15,
    shadowOffset: {
      height: 2,
      width: 2
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.02,
    shadowRadius: 2,
    overflow: 'visible'
  },
  image2: {
    top: 10,
    left: -7,
    width: 120,
    height: 113,
    position: 'absolute'
  },
  image2_imageStyle: {},
  image3: {
    width: 76,
    height: 47,
    marginTop: 25,
    marginLeft: 22
  },
  useremaEmailCom1: {
    top: 22,
    left: 114,
    color: '#1D446F',
    position: 'absolute',
    fontFamily: 'comicneuebold'
  },
  useremaEmailCom2: {
    top: 45,
    left: 114,
    color: '#1D446F',
    position: 'absolute',
    fontFamily: 'comicneuebold'
  },
  useremaEmailCom3: {
    top: 77,
    left: 114,
    color: '#1D446F',
    position: 'absolute',
    fontFamily: 'comicneuebold'
  },
  image2Stack: {
    width: 250,
    height: 113,
    marginTop: 5,
    marginLeft: 6
  },
  imageStack: {
    width: 588,
    height: 783,
    marginTop: -72,
    marginLeft: -119
  },
  heart: {
    top: 67,
    left: 200,
    width: 41,
    height: 46,
    position: 'absolute'
  },
  icon: {
    color: '#1D446F',
    fontSize: 38
  }
});
