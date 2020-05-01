import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import NewEntryCameraPickerModal from './NewEntryCameraPickerModal';

import Colors from '../../../styles/Colors';

const NewEntryCameraPicker = ({photo, onChangePhoto}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onChangePhotoPress = newPhoto => {
    onChangePhoto(newPhoto);
    onClosePress();
  };

  const onDeletePicturePress = () => {
    onChangePhoto(null);
    onClosePress();
  };

  const onClosePress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.button, photo ? styles.buttonActived : '']}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Icon name="photo-camera" size={30} color={Colors.violet} />
      </TouchableOpacity>
      <NewEntryCameraPickerModal
        photo={photo}
        isVisible={modalVisible}
        onChangePhoto={onChangePhotoPress}
        onDelete={onDeletePicturePress}
        onClose={onClosePress}
      />
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
  buttonActived: {
    backgroundColor: Colors.green,
  },
});

export default NewEntryCameraPicker;
