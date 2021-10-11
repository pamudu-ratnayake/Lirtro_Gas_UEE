import React, {useState} from 'react';
// import {useCart} from "react-use-cart";
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



const CartItem = ({navigation}) => {

  const mycart = () => {
    navigation.navigate('MyCart')
  }

const CartItem = () => {
  // const{
  //   Items,
  //   totalItems,
  //     }
  // = useCart();

  const [count, setCount] = useState(1);
  const [newPackage, setnewPackage] = useState(1250);

  function handleIncremet() {
    // for (var i = 0; i < 10; i++) {
    //   setCount = i;
    if (count >= 10) {
      setCount(10);
    } else {
      setCount(1 + count);
    }
  }
  function handleChange1() {
    let total = 0;
    if (count >= 10) {
      total = 1250 * 10;
    } else {
      total = 1250 * (count + 1);
      setnewPackage(total);
    }
  }
  // }

  function handleDecremet() {
    // for (var i = 0; i < 0; i--) {
    //   setCount = i;
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  }
  function handleChange2() {
    let total = 0;
    if (count <= 1) {
      total = 1250 * 1;
    } else {
      total = 1250 * (count - 1);
      setnewPackage(total);
    }
  }
  // }

  // var items = ['1 day', '3 day', '5 day', '10 day', '20 day', '30 day'];
  // const [newPackage, setnewPackage] = useState(0);

  // function handleChange() {
  // let total = 0;
  // if(itemName.value== "2.3kg Litro Regular Refill"){
  //       total = 1250*count;
  //       setnewPackage(newPackage=total);
  // }

  //       for (var i = 0; i < items .length; i++){

  //      if(event.target.value == items [i]);{

  //        switch(event.target.value)
  //       {
  //         case '1 day':
  //            setnewPackage('LKR.500.00');

  //            break;

  //          case '3 day':
  //            setnewPackage('LKR. 750.00');

  //            break;

  //          case '5 day':
  //            setnewPackage('LKR. 1000.00');

  //            break;

  //          case '10 day':
  //            setnewPackage('LKR. 1500.00');
  //            break;

  //          case '20 day':
  //            setnewPackage('LKR. 3000.00');
  //            break;

  //          case '30 day':
  //            setnewPackage('LKR. 5000.00');
  //            break;

  //          default:
  //            setnewPackage('LKR. 00.00');
  //                  break;
  //       }

  //      }
  //      break;
  //  }
  // }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <ScrollView>
          <View style={styles.card}>
            <View style={styles.itemDetails}>
              <Image
                style={styles.itemImage}
                source={require('../assets/images/litro.jpg')}
              />
              <Text style={styles.itemName} name="itemName">
                2.3kg Litro Regular Refill
              </Text>
              <Text style={styles.itemName}>LKR 1250.00</Text>
              <Text style={styles.selItm}>Select Quantity</Text>
            </View>
            <View style={styles.countQty}>
              <TouchableOpacity
                onPress={function (e) {
                  handleDecremet();
                  handleChange2();
                }}>
                <Image
                  style={styles.addImage}
                  source={require('../assets/images/icons/outline_remove_white_24dp.png')}
                />
              </TouchableOpacity>
              <TextInput keyboardType="numeric" style={styles.itemName}>
                {count}
              </TextInput>
              <TouchableOpacity
                onPress={function (e) {
                  handleIncremet();
                  handleChange1();
                }}>
                <Image
                  style={styles.addImage}
                  source={require('../assets/images/icons/outline_add_white_24dp.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.totPrice}>
              <Text style={styles.totText}>Total </Text>
              <Text style={styles.totText}>LKR.{newPackage} </Text>
            </View>
            <View style={styles.btn}>
              <TouchableOpacity
                onPress={function (e) {
                  setBoostPK(e.target.value);
                  handleChange();
                }}>
                <Text style={styles.btnText}>Add to Cart</Text>
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
    // padding: 20,
    // backgroundColor: '#ddd',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
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
