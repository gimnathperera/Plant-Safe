import React, { Component } from 'react';
import _ from 'lodash';
import { StyleSheet, Text, View, Image } from 'react-native';

import { data } from '../public/diseases';

class PredictionScreen extends Component {
  renderDescription = (_id) => {
    if (!data.length == 0) {
      let item = _.filter(data, { id: parseInt(_id) });
      return <Text>{item[0].description}</Text>;
    } else {
      return <Text>No records found</Text>;
    }
  };

  renderImage = (_id) => {
    if (!data.length == 0) {
      let item = _.filter(data, { id: parseInt(_id) });

      return (
        <Image
          source={item[0].image}
          resizeMode='cover'
          style={styles.plantImage}
        ></Image>
      );
    } else {
      return <Text>No image found</Text>;
    }
  };

  render() {
    const { _disease, confidence, id } = this.props.route.params;

    return (
      <View style={styles.container}>
        <View style={styles.imageStack}>
          <Image
            source={require('../assets/images/blob.png')}
            resizeMode='contain'
            style={styles.image}
          ></Image>
          <View style={styles.rect}>{this.renderImage(id)}</View>
        </View>
        <View style={styles.plantDiseaseName3Row}>
          <Text style={styles.plantDiseaseName3}></Text>
          <View style={styles.image1Stack}>
            <Image
              source={require('../assets/images/blob.png')}
              resizeMode='contain'
              style={styles.image1}
            ></Image>
            <View style={styles.rect3}>
              <Text style={styles.plantDiseaseName2}>{_disease}</Text>
              <View style={styles.textStack}>
                <Text style={styles.text}>{this.renderDescription(id)}</Text>
                <View style={styles.rect4}>
                  <Image
                    source={require('../assets/images/dislike.png')}
                    resizeMode='contain'
                    style={styles.image3}
                  ></Image>
                </View>
                <View style={styles.rect5}>
                  <Image
                    source={require('../assets/images/like.png')}
                    resizeMode='contain'
                    style={styles.image4}
                  ></Image>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rect2}>
          <View style={styles.potatoColumnRow}>
            <View style={styles.potatoColumn}>
              <Text style={styles.plantDiseaseName1}>{_disease}</Text>
              <Text style={styles.confidence71}>Confidence: {confidence}</Text>
            </View>
            <Image
              source={require('../assets/images/pest.png')}
              resizeMode='contain'
              style={styles.image5}
            ></Image>
          </View>
        </View>
      </View>
    );
  }
}

export default PredictionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image: {
    top: 0,
    left: 117,
    width: 310,
    height: 294,
    position: 'absolute'
  },
  rect: {
    top: 140,
    width: 256,
    height: 256,
    position: 'absolute',
    backgroundColor: 'white',
    left: 13,
    borderRadius: 12,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 7,
    shadowOpacity: 0.16,
    shadowRadius: 12
  },
  plantImage: {
    borderRadius: 12
  },
  imageStack: {
    width: 427,
    height: 422,
    marginTop: -90,
    marginLeft: 46
  },
  plantDiseaseName3: {
    fontFamily: 'comicneuebold',
    color: '#195F57',
    fontSize: 14,
    marginTop: 25
  },
  image1: {
    top: -50,
    left: 0,
    width: 310,
    height: 294,
    position: 'absolute'
  },
  rect3: {
    top: 0,
    left: 132,
    width: 272,
    height: 156,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 27,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  plantDiseaseName2: {
    fontFamily: 'comicneuebold',
    color: '#195F57',
    marginTop: 16,
    marginLeft: 16
  },
  text: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: 'comicneueregular',
    color: '#195F57',
    textAlign: 'justify',
    width: 242,
    height: 69
  },
  rect4: {
    top: 68,
    left: 132,
    width: 47,
    height: 32,
    position: 'absolute',
    backgroundColor: 'rgba(235,20,20,1)',
    borderRadius: 56
  },
  image3: {
    width: 30,
    height: 25,
    marginTop: 3,
    marginLeft: 8
  },
  rect5: {
    top: 68,
    left: 195,
    width: 47,
    height: 32,
    position: 'absolute',
    backgroundColor: 'rgba(65,117,5,1)',
    borderRadius: 56
  },
  image4: {
    width: 30,
    height: 25,
    marginTop: 3,
    marginLeft: 8
  },
  textStack: {
    width: 242,
    height: 100,
    marginTop: 10,
    marginLeft: 16
  },
  image1Stack: {
    width: 405,
    height: 303,
    marginLeft: 1285,
    top: 14,
    left: 1
  },
  plantDiseaseName3Row: {
    height: 303,
    flexDirection: 'row',
    marginTop: 146,
    marginLeft: -1371,
    marginRight: 41
  },
  rect2: {
    width: 274,
    height: 97,
    backgroundColor: 'white',
    borderRadius: 27,
    marginTop: -418,
    marginLeft: 48,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  potato: {
    fontFamily: 'comicneuebold',
    color: '#195F57'
  },
  plantDiseaseName1: {
    fontFamily: 'comicneuebold',
    color: '#195F57',
    marginTop: 2
  },
  confidence71: {
    fontFamily: 'comicneuebold',
    color: '#195F57',
    marginTop: 16
  },
  potatoColumn: {
    width: 149
  },
  image5: {
    width: 60,
    height: 58,
    marginLeft: 24,
    marginTop: 7
  },
  potatoColumnRow: {
    height: 69,
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 21,
    marginRight: 20
  }
});
