import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {useHistory} from 'react-router-dom';

const image = require('../assets/img/background.png');

const OrderDealer = () => {
  // let history = useHistory();

  const toRecieveOrd = () => {
    // history.push('/recievedOrder');
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        {/* <ImageBackground source={image} style={styles.image} resizeMode="cover"> */}
        <ScrollView>
          <View style={styles.cardView}>
            <TouchableOpacity style={styles.card} onPress={toRecieveOrd}>
              <Text style={styles.cardText}>Recieved Orders</Text>
              <Image
                style={styles.iconImage}
                source={require('../assets/img/icons/outline_arrow_forward_ios_white_24dp.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>Pending Orders</Text>
              <Image
                style={styles.iconImage}
                source={require('../assets/img/icons/outline_arrow_forward_ios_white_24dp.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>Dispatched Orders</Text>
              <Image
                style={styles.iconImage}
                source={require('../assets/img/icons/outline_arrow_forward_ios_white_24dp.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardText}>Delivered Orders</Text>
              <Image
                style={styles.iconImage}
                source={require('../assets/img/icons/outline_arrow_forward_ios_white_24dp.png')}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* </ImageBackground> */}
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    // paddingVertical: 5,
    backgroundColor: '#009dfe',
    borderRadius: 18,
    marginHorizontal: 18,
    marginVertical: 30,
  },
  cardText: {
    flex: 0.9,
    paddingRight: 10,
    paddingVertical: 20,
    fontSize: 28,
    color: '#fff',
  },
  iconImage: {
    flex: 0.1,
    width: 15,
    height: 15,
    paddingVertical: 20,
    marginVertical: 20,
    marginRight: 5,
  },
});

export default OrderDealer;
