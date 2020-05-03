import React from 'react';
import {StatusBar, View, ScrollView, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Colors from '../../styles/Colors';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.violet} />
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <EntrySummary onPressActionButton={() => navigation.navigate('Report')} />
      <ScrollView>
        <EntryList
          onEntryPress={entry =>
            navigation.navigate('NewEntry', {
              entry: entry,
            })
          }
          onPressActionButton={() => navigation.navigate('Report')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green,
    padding: 0,
  },
});

export default Main;
