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

// const image = require('../assets/img/background.png');

const MyCart = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        {/* <ImageBackground source={image} style={styles.image} resizeMode="cover"> */}
        <ScrollView>
          <View>
            <View style={styles.card}>
              <View>
                <View style={styles.cardView}>
                  <View>
                    <Image
                      style={styles.images}
                      source={require('../assets/images/gas.png')}
                    />
                  </View>
                  <View>
                    <Text style={styles.title}>Premium Hybrid 18L Refill</Text>
                    <View style={styles.qty}>
                      <Text style={styles.price}>Quantity</Text>
                      <Text style={styles.price}>3</Text>
                      <Text style={styles.price}>3</Text>
                    </View>
                    <View style={styles.qty}>
                      <Text style={styles.price}>Price</Text>
                      <Text style={styles.price}>LKR.4020.00</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.cardView}>
                  <View>
                    <Image
                      style={styles.images}
                      source={require('../assets/images/gas.png')}
                    />
                  </View>
                  <View>
                    <Text style={styles.title}>Premium Hybrid 18L Refill</Text>
                    <View style={styles.qty}>
                      <Text style={styles.price}>Quantity</Text>
                      <Text style={styles.price}>3</Text>
                      <Text style={styles.price}>3</Text>
                    </View>
                    <View style={styles.qty}>
                      <Text style={styles.price}>Price</Text>
                      <Text style={styles.price}>LKR.4020.00</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.btn}>
                {/* <Image
                  style={styles.btnImage}
                  source={require('../assets/images/plus.png')}
                /> */}
                <TouchableOpacity>
                  <Text style={styles.btnText}>Add More Product</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.cartText}>Clear Cart</Text>

              <View style={styles.addressView}>
                <Text style={styles.deliverText}>Deliver To:</Text>
                <Text style={styles.address}>No.56, Temple Road, Colombo</Text>
                <View style={styles.line}></View>
                <View style={styles.pMethodView}>
                  <Text style={styles.pMethodText}>Payment Method</Text>
                  <Text style={styles.pMethod}>Cash</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.btn2}>
                <Text style={styles.btn2Text}>Select Dealer</Text>
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
  images: {
    height: 100,
    width: 70,
    marginRight: 10,
  },
  card: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 30,
    marginHorizontal: 25,
    padding: 20,
  },
  cardView: {
    margin: 8,
    // backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: 'grey',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  qty: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  price: {
    marginVertical: 10,
    fontSize: 13,
    color: 'grey',
  },
  placeOrderBtn: {
    marginTop: 10,
  },
  btnView: {
    // alignItems: 'center'
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
    alignItems: 'center',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 8,
    borderRadius: 5,
    borderColor: 'blue',
    borderWidth: 2,
    height: 45,
    width: 300,
  },
  btnText: {
    color: 'blue',
    fontSize: 17,
    fontWeight: 'bold',
  },
  btnImage: {
    marginRight: 20,
  },
  cartText: {
    marginTop: 40,
    color: '#009dfe',
    fontWeight: 'bold',
    fontSize: 17,
    textDecorationLine: 'underline',
  },
  addressView: {
    backgroundColor: '#ECECEC',
    marginTop: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 360,
  },
  deliverText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  address: {
    fontSize: 15,
    marginTop: 8,
    color: 'gray',
  },
  line: {
    borderBottomWidth: 2,
    marginVertical: 10,
  },
  pMethodView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pMethodText: {
    fontSize: 15,
    color: 'gray',
  },
  pMethod: {
    fontSize: 15,
    color: '#009dfe',
    textDecorationLine: 'underline',
  },
  btn2: {
    alignItems: 'center',
    backgroundColor: '#009dfe',
    marginTop: 50,
    paddingVertical: 10,
    height: 45,
    width: 300,
    borderRadius: 5,
  },
  btn2Text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default MyCart;
