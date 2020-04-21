import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';

import {getAllCategories} from '../../../services/Categories';

import Colors from '../../../styles/Colors';

const NewEntryCategoryPicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const data = await getAllCategories();
      setAllCategories(data);
    }

    loadCategories();

    console.log('NewEntryCategoryPicker :: useEffect');
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.pickerButtonText}>Alimentação</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <FlatList
            data={allCategories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.modalItem}>
                <Text style={[styles.modalItemText, {color: item.color}]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setModalVisible(false);
            }}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.violet,
  },
  pickerButton: {
    backgroundColor: Colors.champagne,
    borderRadius: 30,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  pickerButtonText: {
    fontSize: 28,
    color: Colors.violet,
    textAlign: 'center',
  },
  modalItem: {
    backgroundColor: Colors.champagne,
    borderRadius: 30,
    marginVertical: 10,
    marginHorizontal: 30,
    padding: 10,
  },
  modalItemText: {
    fontSize: 22,
    color: Colors.blue,
    textAlign: 'center',
  },
  closeButton: {
    alignSelf: 'center',
    backgroundColor: Colors.green,
    borderColor: Colors.green,
    shadowColor: Colors.black,
    elevation: 5,
    borderWidth: 2,
    borderRadius: 30,
    marginVertical: 10,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: Colors.blue,
    textAlign: 'center',
  },
});

export default NewEntryCategoryPicker;
