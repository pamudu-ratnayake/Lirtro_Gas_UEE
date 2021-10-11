import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  Card,
  StyleSheet,
  Button,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';
import {PickerItem} from 'react-native/Libraries/Components/Picker/Picker';

const HomeScreen = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Product');
  };

  const addAddress = () => {
    navigation.navigate('AddAddress');
  };



  const [selectedValue, setSelectedValue] = useState('Home');

  return (
    <ScrollView>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.image}
        resizeMode="cover">
        {/* <TextInput
        placeholder="Delivery to :"
        style={styles.deliverTo}></TextInput> */}
        <View style={styles.addressRow}>
          <View style={styles.deliverTo}>
            <Picker
              style={{marginTop: -10}}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="Home" value="Home" />
              <Picker.Item label="Work" value="Work" />
            </Picker>
          </View>
          <TouchableOpacity style={styles.addressBtn} onPress={addAddress}>
            <View>
              <Text style={styles.addBtnText}>New Address</Text>
            </View>
          </TouchableOpacity>
        </View>

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
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  deliverTo: {
    backgroundColor: '#FFFFFF',
    marginLeft: 8,
    borderRadius: 8,
    height: 35,
    paddingLeft: 10,
    width: 250,
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
    width: 215,
  },
  addressRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  addressBtn: {
    backgroundColor: '#009DFE',
    height: 35,
    width: 135,
    marginLeft: 10,
    borderRadius: 8,
    justifyContent: 'center',
  },
  addBtnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
