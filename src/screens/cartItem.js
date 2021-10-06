import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// const image = require('../assets/images/background.png');

const CartItem = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        {/* <ImageBackground source={image} style={styles.image} resizeMode="cover"> */}
        <ScrollView>
          <View style={styles.card}>
            <View style={styles.itemDetails}>
              <Image
                style={styles.itemImage}
                source={require('../assets/images/litro.jpg')}
              />
              <Text style={styles.itemName}>2.3kg Litro Regular Refill</Text>
              <Text style={styles.itemName}>LKR 1250.00</Text>
              <Text style={styles.selItm}>Select Quantity</Text>
            </View>
            <View style={styles.countQty}>
              <TouchableOpacity>
                <Image
                  style={styles.addImage}
                  source={require('../assets/images/outline_remove_white_24dp.png')}
                />
              </TouchableOpacity>
              <Text style={styles.itemName}>1 </Text>
              <TouchableOpacity>
                <Image
                  style={styles.addImage}
                  source={require('../assets/images/outline_add_white_24dp.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.totPrice}>
              <Text style={styles.totText}>Total </Text>
              <Text style={styles.totText}>LKR 1250.00 </Text>
            </View>
            <View style={styles.btn}>
              <TouchableOpacity>
                <Text style={styles.btnText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
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
    // padding: 20,
    // backgroundColor: '#ddd',
  },
  card: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 70,
    marginHorizontal: 30,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemImage: {
    flex: 0.1,
    width: 150,
    height: 150,
  },
  countQty: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  selItm: {
    fontSize: 15,
    paddingTop: 30,
    paddingBottom: 10,
  },
  totPrice: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    // backgroundColor: '#ddd',
    padding: 5,
    marginVertical: 20,
    marginHorizontal: 50,
  },
  totText: {
    marginHorizontal: 50,
    marginVertical: 10,
    paddingVertical: 11,
    // fontWeight: 'bold',
    fontSize: 18,
  },
  addImage: {
    width: 40,
    height: 40,
    backgroundColor: 'blue',
    marginHorizontal: 45,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 8,
    fontSize: 12,
    borderRadius: 5,
    height: 40,
    width: 275,
    // marginVertical: 20,
    // marginHorizontal: 60,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,

    // fontWeight: 'bold'
  },
});

export default CartItem;
