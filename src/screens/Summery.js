//summary
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

const image = require('../assets/images/background.png');

const Summery = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image1} resizeMode="cover">
        <ScrollView>
          <View>
            <View style={styles.card}>
              <View>

              <View style={styles.itemView}>
               <Text style={styles.infor}>Delivery To</Text>
               <Text style={styles.detail}>:No. 56, Temple Road , Borella</Text>
              </View>
              <View style={styles.itemView}>
               <Text style={styles.infor}>Payment</Text>
               <Text style={styles.detail}>:Cash</Text>
              </View>
              <View style={styles.itemView}>
               <Text style={styles.infor}>Dealer</Text>
               <Text style={styles.detail}>:Milinda Stores</Text>
              </View>
              <View style={styles.itemView}>
               <Text style={styles.infor}>Dealer's Contact No.</Text>
               <Text style={styles.detail}>:0705434321</Text>
              </View>
              <View style={styles.itemView}>
               <Text style={styles.infor}>Item qty</Text>
               <Text style={styles.detail}>:1</Text>
              </View>
              <View style={styles.itemView}>
               <Text style={styles.infor}>Date</Text>
               <Text style={styles.detail}>:07/09/2021</Text>
              </View>
              <View style={styles.itemView}>
               <Text style={styles.infor}>Delivery Charges</Text>
               <Text style={styles.detail}>: LKR. 150.00</Text>
              </View>
              <View style={styles.itemView}>
               <Text style={styles.infor}>Total Amount</Text>
               <Text style={styles.detail}>:LKR.1450.00</Text>
              </View>

                <View style={styles.itemView1}>
                  <View>
                    <Image
                      style={styles.image}
                      source={require('../assets/images/gas.png')}
                    />
                  </View>
                  {/* <View style={styles.itemDetails}> */}
                      <Text style={styles.name}>Premium Hybrid 18L Refill</Text>
                      <Text style={styles.price}>LKR.1200.00</Text>
                    {/* </View> */}
                </View>
                      
              </View>
            </View>
            <View style={styles.btn}>
                      <Button title="Place Order"/>
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
    // padding: 20,
    // backgroundColor: '#ddd',
  },
  image: {
    height: 70,
    width: 50,
    marginRight: 15,
  },
  image1: {
    flex: 1
  },
  card: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 30,
    marginHorizontal: 25,
    padding: 20,
  },
  itemView: {
    borderRadius: 8,
    shadowColor: 'grey', 
    flexDirection: 'row',
    // marginTop:8,
  },

  btn:{
marginTop:40,
margin: 20
  },
  itemView1: {
    borderRadius: 8,
    shadowColor: 'grey',
    flexDirection: 'row',
    marginTop:45
  },
  itemDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  name: {
    flex: 0.9,
    paddingRight: 20,
    paddingVertical: 20,
    fontSize: 13
  },
  price: {
    fontSize: 13,
    paddingVertical: 20,
    color: 'blue'
  },
  infor: {
    flex: 0.4,
    paddingRight: 20,
    paddingVertical: 10,
    fontSize: 15
  },
  detail: {
    flex: 0.6,
    paddingRight: 20,
    paddingVertical: 10,
    fontSize: 15
  }
});

export default Summery;
