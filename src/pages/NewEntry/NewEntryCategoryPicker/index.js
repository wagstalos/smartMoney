import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';

import {
  getDebitCategories,
  getCreditCategories,
} from '../../../services/Categories';

import Colors from '../../../styles/Colors';

const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [debitCategories, setDebitCategories] = useState([]);
  const [creditCategories, setCreditCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      setDebitCategories(await getDebitCategories());
      setCreditCategories(await getCreditCategories());
    }

    loadCategories();

    console.log('NewEntryCategoryPicker :: useEffect');
  }, []);

  const onCategoryPress = item => {
    onChangeCategory(item);
    onClosePress();
  };

  const onClosePress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <FlatList
            data={debit ? debitCategories : creditCategories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => onCategoryPress(item)}>
                <Text style={[styles.modalItemText, {color: item.color}]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClosePress}>
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
