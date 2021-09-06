import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 59,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    color: '#FFFFFF',
    // letterSpacing: 0.7,
    fontFamily: 'calibry',
  },
});

export default Header;
