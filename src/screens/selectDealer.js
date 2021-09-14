import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';

const image = require('../assets/img/background.png');

const SelectDealer = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} resizeMode="cover">
          <ScrollView>
            <View style={styles.filter}>
              <Image source={require('../assets/img/icons8-filter-24.png')}></Image>
              <Text style={styles.filterTxt}>Filter By</Text>
              <Text>drop Down</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.dealerName}>DEALER</Text>
              <Text style={styles.dealerInfor}>Address</Text>
              <View style={styles.row}>
                <Text style={styles.dealerInfor}>Tell:</Text>
                <Text style={styles.dealerInfor2}>0754323677767</Text>
              </View>
              <View style={styles.row}>
              <Text style={styles.dealerInfor}>Distance:</Text>
              <Text style={styles.dealerInfor2}>10 m</Text>
              </View>
              <View style={styles.row}>
              <Text style={styles.dealerInfor}>Delivery Charge:</Text>
              <Text style={styles.dealerInfor2}> LKR. 300</Text>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 1,
    marginTop: 15,
    marginHorizontal: 5,
  },
  card: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 15,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  dealerName: {
    padding: 10,
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
  dealerInfor: {
    paddingHorizontal:10,
    paddingVertical: 1,
    fontSize: 15,
  },
  dealerInfor2: {
    paddingVertical: 1,
    fontSize: 15,
  },
  filterTxt: {
    color: '#bbb',
    fontSize: 15,
  },
});

export default SelectDealer;
