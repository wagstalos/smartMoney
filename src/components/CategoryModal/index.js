import React from 'react';
import {
  Modal,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';

import useCategories from '../../hooks/useCategories';

import Colors from '../../styles/Colors';

const CategoryModal = ({categoryType, isVisible, onConfirm, onCancel}) => {
  const [debitCategories, creditCategories, allCategories] = useCategories();

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.modal}>
        <FlatList
          data={
            categoryType === 'all'
              ? allCategories
              : categoryType === 'debit'
              ? debitCategories
              : creditCategories
          }
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => onConfirm(item)}>
              <Text style={[styles.modalItemText, {color: item.color}]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />

        <ActionFooter>
          <ActionPrimaryButton title="Fechar" onPress={onCancel} />
        </ActionFooter>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.violet,
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
});

export default CategoryModal;
