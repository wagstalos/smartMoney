import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import ActionFooter, {
  ActionPrimaryButton,
  ActionSecondaryButton,
} from '../../components/Core/ActionFooter';

import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from './NewEntryInput';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';
import NewEntryDatePicker from './NewEntryDatePicker';
import NewEntryDeleteAction from './NewEntryDeleteAction';

import {saveEntry} from '../../services/Entries';
import {deleteEntry} from '../../services/Entries';

import Colors from '../../styles/Colors';

const NewEntry = ({navigation}) => {
  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    entryAt: new Date(),
    category: {id: null, name: 'Selecione'},
  });

  const [debit, setDebit] = useState(entry.amount <= 0);
  const [amount, setAmount] = useState(entry.amount);
  const [category, setCategory] = useState(entry.category);
  const [entryAt, setEntryAt] = useState(entry.entryAt);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  };

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
      category: category,
      entryAt: entryAt,
    };

    console.log('NewEntry :: save ', data);
    saveEntry(data, entry);
    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };

  const onClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View style={styles.formContainer}>
        <NewEntryInput
          value={amount}
          onChangeDebit={setDebit}
          onChangeValue={setAmount}
        />
        <View>
          <Text style={styles.textOrientation}>
            {' '}
            *Clique no R$ para mudar ente receita e despesa
          </Text>
        </View>

        <NewEntryCategoryPicker
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
        />

        <View style={styles.formActionContainer}>
          <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />
          <NewEntryDeleteAction entry={entry} onOKPress={onDelete} />
        </View>
      </View>

      <ActionFooter>
        <ActionPrimaryButton
          title={entry.id ? 'Salvar' : 'Adicionar'}
          onPress={() => {
            isValid() && onSave();
          }}
        />
        <ActionSecondaryButton title="Cancelar" onPress={onClose} />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.white,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  textOrientation: {
    textAlign: 'center',
    color: Colors.metalDark,
  },
  formActionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default NewEntry;
