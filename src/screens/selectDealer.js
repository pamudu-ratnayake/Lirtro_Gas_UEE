import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const image = require('../assets/images/background.png');

const SelectDealer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} resizeMode="cover">
          <View style={styles.filterArea}>
            <View style={styles.filterIcon}>
              <Image
                source={require('../assets/images/icons/icons8-filter-24.png')}
              />
            </View>
            <View style={styles.filter}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="1km - 3km" value="1km - 3km" />
                <Picker.Item label="3km - 5km" value="3km - 5km" />
                <Picker.Item label="5km - 7km" value="5km - 7km" />
                <Picker.Item label="7km - 10km" value="7km - 10km" />
              </Picker>
            </View>
          </View>
          <ScrollView>
            <TouchableOpacity>
              <View style={styles.card}>
                <Text style={styles.dealerName}>A M L Perera</Text>
                <Text style={styles.dealerInfor}>Colombo 07</Text>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Tell:</Text>
                  <Text style={styles.dealerInfor2}>0754323677767</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Distance:</Text>
                  <Text style={styles.dealerInfor2}>3500 m</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Delivery Charge:</Text>
                  <Text style={styles.dealerInfor2}> LKR. 350</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.card}>
                <Text style={styles.dealerName}>P R G H H Bandara</Text>
                <Text style={styles.dealerInfor}>Colombo 10</Text>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Tell:</Text>
                  <Text style={styles.dealerInfor2}>0754323677767</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Distance:</Text>
                  <Text style={styles.dealerInfor2}>3800 m</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Delivery Charge:</Text>
                  <Text style={styles.dealerInfor2}> LKR. 380</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.card}>
                <Text style={styles.dealerName}>P M Ratnayake</Text>
                <Text style={styles.dealerInfor}>Colombo 04</Text>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Tell:</Text>
                  <Text style={styles.dealerInfor2}>0754323677767</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Distance:</Text>
                  <Text style={styles.dealerInfor2}>4000 m</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Delivery Charge:</Text>
                  <Text style={styles.dealerInfor2}> LKR. 400</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.card}>
                <Text style={styles.dealerName}>J N H Fernando</Text>
                <Text style={styles.dealerInfor}>Colombo 10</Text>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Tell:</Text>
                  <Text style={styles.dealerInfor2}>0754323677767</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Distance:</Text>
                  <Text style={styles.dealerInfor2}>4300 m</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Delivery Charge:</Text>
                  <Text style={styles.dealerInfor2}> LKR. 430</Text>
                </View>
              </View>
            </TouchableOpacity>
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
  filterArea: {
    // flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 55,
    width: 410,
    borderRadius: 1,
    // marginHorizontal: 6,
  },
  filterIcon: {
    flex: 1,
    paddingTop: 3,
    marginVertical: 12,
    marginLeft: 10
  },
  filter: {
    flex: 8,
  },
  pickerItem: {
    color: '#333333',
    alignItems: 'center',
  },
  // filterTxt: {
  //   backgroundColor: 'red',
  //   flex: ,
  //   padding: 2,
  //   color: '#bbb',
  //   fontSize: 15,
  // },
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
    paddingHorizontal: 10,
    paddingVertical: 1,
    fontSize: 15,
  },
  dealerInfor2: {
    paddingVertical: 1,
    fontSize: 15,
  },
});

export default SelectDealer;
