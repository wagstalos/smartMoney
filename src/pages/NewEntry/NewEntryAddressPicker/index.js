import React from 'react';
import {Alert, View, TouchableOpacity, StyleSheet} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const getLocation = (latitude, longitude) => {
  Geocoder.init('AIzaSyAsIrHUXtFAXfJ5nYGGTal0MFFGCfH3ngM');

  Geocoder.from({latitude, longitude})
    .then(json => {
      const formattedAddress = json.results[0].formatted_address;
      Alert.alert('Endereço Formatado', formattedAddress);
    })
    .catch(error => {
      console.error(
        'NewEntryAddressPicker :: getLocation :: erro ao recuperar a localização',
        error,
      );
      Alert.alert(
        'Houve um erro ao recuperar sua posição, por favor, tenha certeza que autorizou este aplicativo',
      );
    });
};

const getPosition = () => {
  Geolocation.getCurrentPosition(
    pos => {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;

      getLocation(latitude, longitude);
    },
    error => {
      console.error(
        'NewEntryAddressPicker :: getPosition :: erro ao recuperar a posição',
        error,
      );
      Alert.alert(
        'Houve um erro ao recuperar sua posição, por favor, tenha certeza que autorizou este aplicativo',
      );
    },
  );
};

const NewEntryAddressPicker = () => {
  const onButtonPress = () => {
    getPosition();
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Icon name="person-pin" size={30} color={Colors.violet} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.champagne,
    width: 59,
    height: 59,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    shadowColor: '#000',
    elevation: 5,
  },
});

export default NewEntryAddressPicker;
