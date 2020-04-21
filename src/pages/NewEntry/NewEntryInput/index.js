import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';

import Colors from '../../../styles/Colors';

const NewEntryInput = ({value, onChangeValue}) => {
  const [debit, setDebit] = useState(value < 0 ? -1 : 1);
  const [debitPrefix, setDebitPrefix] = useState(value < 0 ? '-' : '');

  const onChangeDebitCredit = () => {
    if (debit < 0) {
      setDebit(1);
      setDebitPrefix('');
    } else {
      setDebit(-1);
      setDebitPrefix('-');
    }

    onChangeValue(value * -1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.debitButton}
        onPress={onChangeDebitCredit}>
        <Text style={styles.debitButtonPrefix}>{debitPrefix}</Text>
        <Text style={styles.debitButtonText}>R$</Text>
      </TouchableOpacity>
      <TextInputMask
        style={styles.input}
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue(rawValue * debit);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.champagne,
    borderRadius: 30,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  debitButton: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.green,
    shadowColor: Colors.black,
    elevation: 5,
    margin: 5,
    borderRadius: 30,
  },
  debitButtonPrefix: {
    fontSize: 28,
    color: Colors.blue,
    fontWeight: 'bold',
    minWidth: 10,
  },
  debitButtonText: {
    fontSize: 28,
    color: Colors.blue,
  },
  input: {
    flex: 1,
    fontSize: 28,
    color: Colors.blue,
    textAlign: 'right',
    paddingLeft: 0,
    paddingRight: 20,
  },
});

export default NewEntryInput;
