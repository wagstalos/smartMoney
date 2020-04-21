import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const EntryListItem = ({entry, isFirstItem, isLastItem, onEntryPress}) => {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 25 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
  const bulletColor = entry.category.color || Colors.white;
  //const bulletColor = Colors.violet;

  return (
    <TouchableOpacity
      onPress={() => {
        onEntryPress && onEntryPress(entry);
      }}>
      <View style={styles.container}>
        <View style={styles.bullet}>
          <Svg height="50" width="30">
            {showBulletLine && (
              <Rect
                x="9"
                y={bulletLineY}
                width="1.5"
                height={bulletLineHeight}
                fill={Colors.green}
              />
            )}
            <Circle
              cx="10"
              cy="25"
              r="8"
              stroke={Colors.green}
              strokeWidth="1.5"
              fill={bulletColor}
            />
          </Svg>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText}>{entry.description}</Text>

          <View style={styles.details}>
            <Icon style={styles.entryAtIcon} name="access-time" size={12} />
            <Text style={styles.entryAtText}>{entry.entryAt.toString()}</Text>

            {entry.address && (
              <>
                <Icon style={styles.addressIcon} name="person-pin" size={12} />
                <Text style={styles.addressText}>{entry.address}</Text>
              </>
            )}
          </View>
        </View>

        <View style={styles.amount}>
          <Text style={styles.amountText}>{entry.amount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  bullet: {},
  description: {
    flex: 1,
    justifyContent: 'center',
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.dark,
  },
  details: {
    flexDirection: 'row',
  },
  entryAtIcon: {
    color: Colors.metalDark,
    marginTop: 2,
    marginRight: 2,
  },
  entryAtText: {
    fontSize: 12,
    color: Colors.metalDark,
  },
  addressIcon: {
    color: Colors.metalDark,
    marginTop: 2,
    marginRight: 2,
    marginLeft: 5,
  },
  addressText: {
    fontSize: 12,
    color: Colors.metalDark,
  },
  amount: {
    justifyContent: 'center',
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.blue,
  },
});

export default EntryListItem;
