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
  Picker,
} from 'react-native';

const image = require('../assets/img/background.png');

const SelectDealer = () => {
  const [filter, setFilter] = useState('1-2 km');

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
                source={require('../assets/img/icons/icons8-filter-24.png')}
              />
            </View>
            {/* <Text style={styles.filterTxt}>Filter By</Text> */}
            <View style={styles.filter}>
              <Picker
                mode="dropdown"
                itemStyle={styles.pickerItem}
                style={styles.Picker}
                selectedValue={filter}
                onValueChange={(itemValue, itemIndex) =>
                  setFilter({filter: itemValue})
                }>
                <Picker.Item lable="1-2km" value="1-2km" />
                <Picker.Item lable="1-3km" value="1-3km" />
                <Picker.Item lable="1-4km" value="1-4km" />
                <Picker.Item lable="1-5km" value="1-5km" />
              </Picker>
            </View>
          </View>
          <ScrollView>
            <TouchableOpacity>
              <View style={styles.card}>
                <Text style={styles.dealerName}>DEALER</Text>
                <Text style={styles.dealerInfor}>Address</Text>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Tell:</Text>
                  <Text style={styles.dealerInfor2}>0754323677767</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Distance:</Text>
                  <Text style={styles.dealerInfor2}>10 m</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Delivery Charge:</Text>
                  <Text style={styles.dealerInfor2}> LKR. 300</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.card}>
                <Text style={styles.dealerName}>DEALER</Text>
                <Text style={styles.dealerInfor}>Address</Text>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Tell:</Text>
                  <Text style={styles.dealerInfor2}>0754323677767</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Distance:</Text>
                  <Text style={styles.dealerInfor2}>10 m</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Delivery Charge:</Text>
                  <Text style={styles.dealerInfor2}> LKR. 300</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.card}>
                <Text style={styles.dealerName}>DEALER</Text>
                <Text style={styles.dealerInfor}>Address</Text>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Tell:</Text>
                  <Text style={styles.dealerInfor2}>0754323677767</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Distance:</Text>
                  <Text style={styles.dealerInfor2}>10 m</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Delivery Charge:</Text>
                  <Text style={styles.dealerInfor2}> LKR. 300</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.card}>
                <Text style={styles.dealerName}>DEALER</Text>
                <Text style={styles.dealerInfor}>Address</Text>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Tell:</Text>
                  <Text style={styles.dealerInfor2}>0754323677767</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Distance:</Text>
                  <Text style={styles.dealerInfor2}>10 m</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.dealerInfor}>Delivery Charge:</Text>
                  <Text style={styles.dealerInfor2}> LKR. 300</Text>
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
    padding: 8,
    borderRadius: 1,
    marginTop: 15,
    marginHorizontal: 6,
  },
  filterIcon: {
    flex: 1,
    paddingTop: 3,
  },
  filter: {
    flex: 8,
    // paddingRight: 1,
    fontSize: 15,
    color: 'red',
    backgroundColor: '#F5F5F5',
    height: 30,
  },
  Picker: {
    flex: 1,
    height: 60,
    width: 350,
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
