import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

const DATA = [
  { id: 1, name: 'Alder', species: 'Alnus' },
  {
    id: 2,
    name: 'Black alder',
    species: 'Alnus glutinosa, Ilex verticillata'
  },
  { id: 3, name: 'Common alder', species: 'Alnus glutinosa' },
  { id: 4, name: 'False alder', species: 'Ilex verticillata' },
  { id: 5, name: 'Gray alder', species: 'Alnus incana' }
];

class DiseaseListScreen extends Component {
  renderPlantDisease = (plant) => {
    console.log('DiseaseListScreen -> renderPlantDisease -> plant', plant);
    return (
      <TouchableOpacity
        style={styles.rect3}
        onPress={() => {
          this.props.navigation.navigate('DetailedScreen');
        }}
      >
        <View style={styles.rect6Row}>
          <View style={styles.rect6}>
            <Image
              source={require('../assets/images/potato.png')}
              resizeMode='cover'
              style={styles.plantImage}
            ></Image>
          </View>
          <View style={styles.potatoEralyBrightColumn}>
            <Text style={styles.potatoEralyBright}>Potato Eraly Bright</Text>
            <Text style={styles.mangoAppleOrange}>Mango, Apple, Orange</Text>
            <Text style={styles.fungens}>Fungens</Text>
          </View>
          <Image
            source={require('../assets/images/next.png')}
            resizeMode='contain'
            style={styles.image4}
          ></Image>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}></View>

          <FlatList
            data={DATA}
            contentContainerStyle={{
              paddingBottom: 100
            }}
            renderItem={this.renderPlantDisease}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View style={styles.image3Stack}>
          <Image
            source={require('../assets/images/blob1.png')}
            resizeMode='contain'
            style={styles.image3}
          ></Image>
          <View style={styles.rect}>
            <View style={styles.otherColumnRow}>
              <View style={styles.otherColumn}>
                <Text style={styles.other}>Other</Text>
                <Text style={styles.pestsDiseases}>Pests &amp; Diseases</Text>
              </View>
              <Image
                source={require('../assets/images/agriculture.png')}
                resizeMode='contain'
                style={styles.image2}
              ></Image>
            </View>
            <Text style={styles.loremIpsum}>Browse throgh plant diseases.</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default DiseaseListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  rect2: {
    top: 0,
    left: 0,
    width: 230,
    height: 453,
    position: 'absolute',
    backgroundColor: '#5BB59B',
    borderRadius: 27
  },
  rect3: {
    top: 15,
    left: 120,
    width: 323,
    height: 99,
    backgroundColor: 'white',

    borderRadius: 27,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    marginTop: 20,
    shadowRadius: 10
  },
  rect6: {
    width: 97,
    height: 76,
    backgroundColor: 'green',
    borderRadius: 12
  },
  plantImage: {
    borderRadius: 12,
    width: 97,
    height: 76
  },
  potatoEralyBright: {
    fontFamily: 'comicneuebold',
    color: '#121212',
    bottom: 7
  },
  mangoAppleOrange: {
    fontFamily: 'comicneueregular',
    color: '#121212',
    bottom: 3,
    marginLeft: 1
  },
  fungens: {
    fontFamily: 'comicneueregular',
    color: '#121212',
    marginTop: 14,
    marginLeft: 2
  },
  potatoEralyBrightColumn: {
    width: 137,
    marginLeft: 17,
    marginTop: 10,
    marginBottom: 2
  },
  image4: {
    width: 29,
    height: 58,
    marginLeft: 17,
    marginTop: 10
  },
  rect6Row: {
    height: 76,
    flexDirection: 'row',
    marginTop: 11,
    marginLeft: 13,
    marginRight: 13
  },
  rect4: {
    top: 143,
    left: 135,
    width: 308,
    height: 99,
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
  rect5: {
    top: 268,
    left: 135,
    width: 308,
    height: 99,
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
  rect2Stack: {
    width: 450,
    height: 453,
    marginTop: 230,
    marginLeft: -109
  },
  image3: {
    top: 0,
    left: 17,
    width: 490,
    height: 287,
    position: 'absolute'
  },
  rect: {
    top: 111,
    width: 293,
    height: 114,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 15,
    left: 0,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10
  },
  other: {
    fontFamily: 'comicneuebold',
    color: '#121212',
    fontSize: 18,
    marginTop: -1
  },
  pestsDiseases: {
    fontFamily: 'comicneuebold',
    color: '#121212',
    marginTop: 5
  },
  otherColumn: {
    width: 107,
    marginBottom: 21
  },
  image2: {
    width: 71,
    height: 63,
    marginLeft: 47,
    marginTop: 1
  },
  otherColumnRow: {
    height: 64,
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 44,
    marginRight: 24
  },
  loremIpsum: {
    fontFamily: 'comicneuebold',
    color: '#121212',
    marginTop: 4,
    marginLeft: 44
  },
  image3Stack: {
    width: 507,
    height: 287,
    marginTop: -754,
    marginLeft: 33
  }
});
