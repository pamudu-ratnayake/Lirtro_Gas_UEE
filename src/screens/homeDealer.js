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

const image = require('../assets/img/background.png');

const HomeDealer = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
          <ScrollView>
        <ImageBackground source={image} style={styles.image} resizeMode="cover">
            <View style={styles.card}>
              <View style={styles.col1}>
                <Image
                  style={styles.itemImage}
                  source={require('../assets/img/litro.jpg')}
                />
              </View>
              <View style={styles.col2}>
                <Text style={styles.itemName}>2.3kg Litro Regular Refill</Text>
                <View style={styles.stockView}>
                  <Text style={styles.stockText}>Stock </Text>
                  <TextInput keyboardType="numeric" style={styles.stockDetail}>
                    100
                  </TextInput>
                </View>
                <Button
                  title="Update Stock"
                  style={styles.cardbtn}
                  borderRadius="10"
                />
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.col1}>
                <Image
                  style={styles.itemImage}
                  source={require('../assets/img/litro.jpg')}
                />
              </View>
              <View style={styles.col2}>
                <Text style={styles.itemName}>2.3kg Litro Regular Refill</Text>
                <View style={styles.stockView}>
                  <Text style={styles.stockText}>Stock </Text>
                  <TextInput keyboardType="numeric" style={styles.stockDetail}>
                    100
                  </TextInput>
                </View>
                <Button
                  title="Update Stock"
                  style={styles.cardbtn}
                  borderRadius="10"
                />
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.col1}>
                <Image
                  style={styles.itemImage}
                  source={require('../assets/img/litro.jpg')}
                />
              </View>
              <View style={styles.col2}>
                <Text style={styles.itemName}>2.3kg Litro Regular Refill</Text>
                <View style={styles.stockView}>
                  <Text style={styles.stockText}>Stock </Text>
                  <TextInput keyboardType="numeric" style={styles.stockDetail}>
                    100
                  </TextInput>
                </View>
                <Button
                  title="Update Stock"
                  style={styles.cardbtn}
                  borderRadius="10"
                />
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.col1}>
                <Image
                  style={styles.itemImage}
                  source={require('../assets/img/litro.jpg')}
                />
              </View>
              <View style={styles.col2}>
                <Text style={styles.itemName}>2.3kg Litro Regular Refill</Text>
                <View style={styles.stockView}>
                  <Text style={styles.stockText}>Stock </Text>
                  <TextInput keyboardType="numeric" style={styles.stockDetail}>
                    100
                  </TextInput>
                </View>
                <Button
                  title="Update Stock"
                  style={styles.cardbtn}
                  borderRadius="10"
                />
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.col1}>
                <Image
                  style={styles.itemImage}
                  source={require('../assets/img/litro.jpg')}
                />
              </View>
              <View style={styles.col2}>
                <Text style={styles.itemName}>2.3kg Litro Regular Refill</Text>
                <View style={styles.stockView}>
                  <Text style={styles.stockText}>Stock </Text>
                  <TextInput keyboardType="numeric" style={styles.stockDetail}>
                    100
                  </TextInput>
                </View>
                <Button
                  title="Update Stock"
                  style={styles.cardbtn}
                  borderRadius="10"
                />
              </View>
            </View>

        </ImageBackground>
          </ScrollView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 15,
  },
  col1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  col2: {
    flex: 1.5,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 2,
  },
  itemImage: {
    width: 150,
    height: 150,
  },
  itemName: {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  stockView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 6,
    paddingBottom: 15,
  },
  stockText: {
    color: 'blue',
    paddingTop: 5,
    fontSize: 15
  },
  stockDetail: {
    padding: 1,
    color: 'blue',
    fontSize: 15
  },
});

export default HomeDealer;
