import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import useBalance from '../../hooks/useBalance';

import Colors from '../../styles/Colors';

const BalancePanel = ({onNewEntryPress}) => {
  const [balance] = useBalance();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.blue, Colors.violet]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={balance} />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Icon name="add" size={30} color={Colors.green} />
        {/* <Text style={styles.more}>+</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  panel: {
    paddingVertical: 30,
    paddingBottom: 130,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  button: {
    backgroundColor: Colors.white,
    borderRadius: 150,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 50,
    shadowColor: Colors.black,
    elevation: 5,
    marginTop: -120,
    marginRight: 10,
    marginBottom: 10,
  },
  more: {
    fontSize: 45,
    // fontWeight: 'bold',
    color: Colors.dark,
  },
});

export default BalancePanel;
