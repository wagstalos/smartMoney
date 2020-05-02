import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import useBalance from '../../hooks/useBalance';
import Currency from '../Core/Currency';

import Colors from '../../styles/Colors';

const BalanceLabel = () => {
  const [balance] = useBalance();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>

      <LinearGradient
        style={styles.panel}
        colors={[Colors.green, Colors.greenDark]}>
        <Text style={styles.value}>
          <Currency value={balance} />
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: Colors.violetText,
    fontWeight: 'bold',
  },
  panel: {
    borderRadius: 15,
    minWidth: 200,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 10,
  },
  value: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default BalanceLabel;
