import React from 'react';
import {Alert, View, TouchableOpacity, StyleSheet} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const NewEntryAddressPicker = () => {
  const onButtonPress = () => {
    Geolocation.getCurrentPosition(
      pos => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;

        const position = `Lat. ${latitude} - Lon. ${longitude}`;

        Alert.alert('Posição', position);
      },
      error => {
        console.error(
          'NewEntryAddressPicker :: erro ao recuperar a posição',
          error,
        );
      },
    );
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
