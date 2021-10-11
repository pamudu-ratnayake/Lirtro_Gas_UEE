import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
} from 'react-native';

const image = require('../assets/images/background.png');

const PendingOrders = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} resizeMode="cover">
          <ScrollView>
            <View style={styles.card}>
              <Text style={styles.orderInfor1}>OR001</Text>
              <Text style={styles.orderInfor1}>03/10/2021</Text>
              <Text style={styles.orderInfor1}>No.21, Colombo 07</Text>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Tell</Text>
                <Text style={styles.orderInfor2}>: 0754323677767</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Distance</Text>
                <Text style={styles.orderInfor2}>: 10 m</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Delivery Charge</Text>
                <Text style={styles.orderInfor2}>: LKR. 300</Text>
              </View>
              <View style={styles.row2}>
                <Text style={styles.itemHeader1}>Item</Text>
                <Text style={styles.itemHeader2}>Qty</Text>
                <Text style={styles.itemHeader3}>Price</Text>
              </View>
              <View style={styles.row3}>
                <Text style={styles.itemBody1}>Hose</Text>
                <Text style={styles.itemBody2}>1</Text>
                <Text style={styles.itemBody3}>780.00</Text>
              </View>
              <View style={styles.row3}>
                <Text style={styles.itemBody1}>Cylinder</Text>
                <Text style={styles.itemBody2}>2</Text>
                <Text style={styles.itemBody3}>2580.00</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.totPriceTxt}>Total</Text>
                <Text style={styles.totPrice}>: LKR.3790.00</Text>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>To Accepted</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.orderInfor1}>OR002</Text>
              <Text style={styles.orderInfor1}>03/10/2021</Text>
              <Text style={styles.orderInfor1}>No.25, Colombo 07</Text>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Tell</Text>
                <Text style={styles.orderInfor2}>: 0754323677767</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Distance</Text>
                <Text style={styles.orderInfor2}>: 10 m</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Delivery Charge</Text>
                <Text style={styles.orderInfor2}>: LKR. 300</Text>
              </View>
              <View style={styles.row2}>
                <Text style={styles.itemHeader1}>Item</Text>
                <Text style={styles.itemHeader2}>Qty</Text>
                <Text style={styles.itemHeader3}>Price</Text>
              </View>
              <View style={styles.row3}>
                <Text style={styles.itemBody1}>Hose</Text>
                <Text style={styles.itemBody2}>1</Text>
                <Text style={styles.itemBody3}>780.00</Text>
              </View>
              <View style={styles.row3}>
                <Text style={styles.itemBody1}>Cylinder</Text>
                <Text style={styles.itemBody2}>2</Text>
                <Text style={styles.itemBody3}>2580.00</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.totPriceTxt}>Total</Text>
                <Text style={styles.totPrice}>: LKR.3790.00</Text>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>To Accepted</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.orderInfor1}>OR003</Text>
              <Text style={styles.orderInfor1}>03/10/2021</Text>
              <Text style={styles.orderInfor1}>No.23, 1st Lane, Colombo 07</Text>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Tell</Text>
                <Text style={styles.orderInfor2}>: 0754323677767</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Distance</Text>
                <Text style={styles.orderInfor2}>: 10 m</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Delivery Charge</Text>
                <Text style={styles.orderInfor2}>: LKR. 300</Text>
              </View>
              <View style={styles.row2}>
                <Text style={styles.itemHeader1}>Item</Text>
                <Text style={styles.itemHeader2}>Qty</Text>
                <Text style={styles.itemHeader3}>Price</Text>
              </View>
              <View style={styles.row3}>
                <Text style={styles.itemBody1}>Hose</Text>
                <Text style={styles.itemBody2}>1</Text>
                <Text style={styles.itemBody3}>780.00</Text>
              </View>
              <View style={styles.row3}>
                <Text style={styles.itemBody1}>Cylinder</Text>
                <Text style={styles.itemBody2}>2</Text>
                <Text style={styles.itemBody3}>2580.00</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.totPriceTxt}>Total</Text>
                <Text style={styles.totPrice}>: LKR.3790.00</Text>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>To Accepted</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.orderInfor1}>OR004</Text>
              <Text style={styles.orderInfor1}>03/10/2021</Text>
              <Text style={styles.orderInfor1}>No.2, Colombo 07</Text>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Tell</Text>
                <Text style={styles.orderInfor2}>: 0754323677767</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Distance</Text>
                <Text style={styles.orderInfor2}>: 10 m</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Delivery Charge</Text>
                <Text style={styles.orderInfor2}>: LKR. 300</Text>
              </View>
              <View style={styles.row2}>
                <Text style={styles.itemHeader1}>Item</Text>
                <Text style={styles.itemHeader2}>Qty</Text>
                <Text style={styles.itemHeader3}>Price</Text>
              </View>
              <View style={styles.row3}>
                <Text style={styles.itemBody1}>Hose</Text>
                <Text style={styles.itemBody2}>1</Text>
                <Text style={styles.itemBody3}>780.00</Text>
              </View>
              <View style={styles.row3}>
                <Text style={styles.itemBody1}>Cylinder</Text>
                <Text style={styles.itemBody2}>2</Text>
                <Text style={styles.itemBody3}>2580.00</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.totPriceTxt}>Total</Text>
                <Text style={styles.totPrice}>: LKR.3790.00</Text>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>To Accepted</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.orderInfor1}>OR005</Text>
              <Text style={styles.orderInfor1}>03/10/2021</Text>
              <Text style={styles.orderInfor1}>No.2, 3rd Lane, Colombo 08</Text>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Tell</Text>
                <Text style={styles.orderInfor2}>: 0754323677767</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Distance</Text>
                <Text style={styles.orderInfor2}>: 10 m</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Delivery Charge</Text>
                <Text style={styles.orderInfor2}>: LKR. 300</Text>
              </View>
              <View style={styles.row2}>
                <Text style={styles.itemHeader1}>Item</Text>
                <Text style={styles.itemHeader2}>Qty</Text>
                <Text style={styles.itemHeader3}>Price</Text>
              </View>
              <View style={styles.row3}>
                <Text style={styles.itemBody1}>Hose</Text>
                <Text style={styles.itemBody2}>1</Text>
                <Text style={styles.itemBody3}>780.00</Text>
              </View>
              <View style={styles.row3}>
                <Text style={styles.itemBody1}>Cylinder</Text>
                <Text style={styles.itemBody2}>2</Text>
                <Text style={styles.itemBody3}>2580.00</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.totPriceTxt}>Total</Text>
                <Text style={styles.totPrice}>: LKR.3790.00</Text>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>To Accepted</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.orderInfor1}>OR006</Text>
              <Text style={styles.orderInfor1}>03/10/2021</Text>
              <Text style={styles.orderInfor1}>No.2, 4th Lane, Colombo 10</Text>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Tell</Text>
                <Text style={styles.orderInfor2}>: 0754323677767</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Distance</Text>
                <Text style={styles.orderInfor2}>: 10 m</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.orderInfor1}>Delivery Charge</Text>
                <Text style={styles.orderInfor2}>: LKR. 300</Text>
              </View>
              <View style={styles.row2}>
                <Text style={styles.itemHeader1}>Item</Text>
                <Text style={styles.itemHeader2}>Qty</Text>
                <Text style={styles.itemHeader3}>Price</Text>
              </View>
              <View style={styles.row3}>
                <Text style={styles.itemBody1}>Hose</Text>
                <Text style={styles.itemBody2}>1</Text>
                <Text style={styles.itemBody3}>780.00</Text>
              </View>
              <View style={styles.row3}>
                <Text style={styles.itemBody1}>Cylinder</Text>
                <Text style={styles.itemBody2}>2</Text>
                <Text style={styles.itemBody3}>2580.00</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.totPriceTxt}>Total</Text>
                <Text style={styles.totPrice}>: LKR.3790.00</Text>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>To Accepted</Text>
                </TouchableOpacity>
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
  card: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  orderInfor: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontSize: 15,
  },
  orderInfor1: {
    flex: 1 / 3,
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontSize: 15,
  },
  orderInfor2: {
    flex: 1 / 2,
    paddingVertical: 2,
    fontSize: 15,
  },
  row2: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 10,
  },
  itemHeader1: {
    flex: 1,
    paddingVertical: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
  },
  itemHeader2: {
    flex: 1 / 3,
    paddingVertical: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
  },
  itemHeader3: {
    flex: 1 / 2,
    paddingVertical: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
  },
  row3: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  itemBody1: {
    flex: 1,
    paddingVertical: 1,
    paddingRight: 10,
    fontSize: 15,
  },
  itemBody2: {
    flex: 1 / 3,
    paddingVertical: 1,
    paddingRight: 10,
    fontSize: 15,
  },
  itemBody3: {
    flex: 1 / 2,
    paddingVertical: 1,
    paddingRight: 10,
    fontSize: 15,
  },
  totPriceTxt: {
    paddingHorizontal: 10,
    paddingTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  totPrice: {
    paddingTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  btn: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#009dfe',
    height: 34,
    marginTop: 20,
    marginLeft: 255,
    borderRadius: 15,
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default PendingOrders;
