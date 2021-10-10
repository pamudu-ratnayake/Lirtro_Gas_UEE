import React from 'react';
import {
  View,
  Image,
  Text,
  Card,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Test2');
  };

  return (
    <ScrollView>
      <TextInput
        placeholder="Delivery to :"
        style={styles.deliverTo}></TextInput>
      <TouchableOpacity style={styles.cardView} onPress={pressHandler}>
        <View>
          <Image
            style={styles.images}
            source={require('./assets/images/gas.png')}
          />
        </View>
        <View>
          <Text style={styles.title}>12.5 kg Litro Regular Refil</Text>
          <Text style={styles.price}>LKR 1493.00</Text>
          <View style={styles.placeOrderBtn}>
            <Button title="Place Order"></Button>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardView} onPress={pressHandler}>
        <View>
          <Image
            style={styles.images}
            source={require('../assets/images/gas5k.png')}
          />
        </View>
        <View>
          <Text style={styles.title}>5 kg Litro Budget Refil</Text>
          <Text style={styles.price}>LKR 598.00</Text>
          <View style={styles.placeOrderBtn}>
            <Button title="Place Order"></Button>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardView} onPress={pressHandler}>
        <View>
          <Image
            style={styles.images}
            source={require('../assets/images/gas.png')}
          />
        </View>
        <View>
          <Text style={styles.title}>12.5 kg Litro Regular Refil</Text>
          <Text style={styles.price}>LKR 1493.00</Text>
          <View style={styles.placeOrderBtn}>
            <Button title="Place Order"></Button>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardView} onPress={pressHandler}>
        <View>
          <Image
            style={styles.images}
            source={require('../assets/images/gas.png')}
          />
        </View>
        <View>
          <Text style={styles.title}>12.5 kg Litro Regular Refil</Text>
          <Text style={styles.price}>LKR 1493.00</Text>
          <View style={styles.placeOrderBtn}>
            <Button title="Place Order"></Button>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardView} onPress={pressHandler}>
        <View>
          <Image
            style={styles.images}
            source={require('../assets/images/gas.png')}
          />
        </View>
        <View>
          <Text style={styles.title}>12.5 kg Litro Regular Refil</Text>
          <Text style={styles.price}>LKR 1493.00</Text>
          <View style={styles.placeOrderBtn}>
            <Button title="Place Order"></Button>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
    // <Container>
    //   <Text>Welcome to login</Text>
    // </Container>
  );
};

const styles = StyleSheet.create({
  deliverTo: {
    backgroundColor: '#FFFFFF',
    margin: 8,
    borderRadius: 8,
    height: 35,
    paddingLeft: 10,
  },
  cardView: {
    margin: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: 'grey',
    flexDirection: 'row',
  },
  images: {
    height: 120,
    width: 100,
    margin: 20,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 35,
    fontSize: 16,
    letterSpacing: 1,
  },
  price: {
    marginTop: 20,
    fontSize: 13,
    color: '#2553A8',
  },
  placeOrderBtn: {
    marginTop: 10,
  },
});

export default HomeScreen;
