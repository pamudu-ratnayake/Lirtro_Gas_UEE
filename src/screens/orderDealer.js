import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Picker,
} from 'react-native';

const image = require('../assets/img/background.png');

const OrderDealer = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} resizeMode="cover">
          <ScrollView>
            <View style={styles.cardView}>
              <View style={styles.card}>
                <View style={styles.row}>
                  <Text style={styles.cardText}>Pending Orders</Text>
                  <Image
                    style={styles.iconImage}
                    source={require('../assets/img/icons/outline_arrow_forward_ios_black_24dp.png')}
                  />
                </View>
              </View>

              <View style={styles.card}>
                <View style={styles.row}>
                  <Text style={styles.cardText}>Accepted Orders</Text>
                  <Image
                    style={styles.iconImage}
                    source={require('../assets/img/icons/outline_arrow_forward_ios_black_24dp.png')}
                  />
                </View>
              </View>

              <View style={styles.card}>
                <View style={styles.row}>
                  <Text style={styles.cardText}>Dispatched Orders</Text>
                  <Image
                    style={styles.iconImage}
                    source={require('../assets/img/icons/outline_arrow_forward_ios_black_24dp.png')}
                  />
                </View>
              </View>

              <View style={styles.card}>
                <View style={styles.row}>
                  <Text style={styles.cardText}>Delivered Orders</Text>
                  <Image
                    style={styles.iconImage}
                    source={require('../assets/img/icons/outline_arrow_forward_ios_black_24dp.png')}
                  />
                </View>
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
  cardView: {
    paddingVertical: 40,
    paddingHorizontal: 15,
  },
  card: {
    flex: 0.25,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 18,
    marginVertical: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cardText: {
    flex: 0.9,
    paddingRight: 10,
    paddingVertical: 20,
    fontSize: 28,
  },
  iconImage: {
    flex: 0.1,
    width: 40,
    height: 40,
    paddingVertical: 20,
    marginVertical: 20,
    marginRight: 5,
  },
});

export default OrderDealer;
