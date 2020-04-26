import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import RelativeDaysModal from '../../components/RelativeDaysModal';

import Colors from '../../styles/Colors';

const Report = ({navigation}) => {
  const [relativeDaysModalVisible, setRelativeDaysModalVisible] = useState(
    false,
  );
  const [relativeDays, setRelativeDays] = useState(7);

  const onRelativeDaysPress = item => {
    setRelativeDays(item);
    onRelativeDaysClosePress();
  };

  const onRelativeDaysClosePress = () => {
    setRelativeDaysModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            setRelativeDaysModalVisible(true);
          }}>
          <Text style={styles.filterButtonText}>Últimos 7 dias</Text>
          <Icon name="keyboard-arrow-down" size={20} color={Colors.blue} />
        </TouchableOpacity>
        <RelativeDaysModal
          isVisible={relativeDaysModalVisible}
          onConfirm={onRelativeDaysPress}
          onCancel={onRelativeDaysClosePress}
        />
      </View>

      <ScrollView>
        <EntrySummary />
        <EntryList days={relativeDays} />
      </ScrollView>

      <ActionFooter />
      <ActionPrimaryButton
        title="Fechar"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 10,
  },
  filterButton: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 150,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  filterButtonText: {
    color: Colors.blue,
    // fontWeight: 'bold',
  },
});

export default Report;
