import React from 'react';
import {Alert, View, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const NewEntryDeleteAction = ({entry, onOKPress}) => {
  const onDelete = () => {
    Alert.alert(
      'Apagar',
      'Você deseja realmente apagar este lançamento?',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => onOKPress()},
      ],
      {cancelable: false},
    );
  };
  return (
    entry.id && (
      <View>
        <TouchableOpacity style={styles.button} onPress={onDelete}>
          <Icon name="delete" size={30} color={Colors.white} />
        </TouchableOpacity>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.red,
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

export default NewEntryDeleteAction;
