import React, {useState} from 'react';
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

const image = require('../assets/images/background.png');

const HomeDealer = () => {
  const [TextInputDisableHolder1, setTextInputDisableHolder1] = useState(false);

  const onPressButton1 = () => {
    setTextInputDisableHolder1(true);
  };

  const [TextInputDisableHolder2, setTextInputDisableHolder2] = useState(false);

  const onPressButton2 = () => {
    setTextInputDisableHolder2(true);
  };

  const [TextInputDisableHolder3, setTextInputDisableHolder3] = useState(false);

  const onPressButton3 = () => {
    setTextInputDisableHolder3(true);
  };

  const [TextInputDisableHolder4, setTextInputDisableHolder4] = useState(false);

  const onPressButton4 = () => {
    setTextInputDisableHolder4(true);
  };

  const [TextInputDisableHolder5, setTextInputDisableHolder5] = useState(false);

  const onPressButton5 = () => {
    setTextInputDisableHolder5(true);
  };

  const [TextInputDisableHolder6, setTextInputDisableHolder6] = useState(false);

  const onPressButton6 = () => {
    setTextInputDisableHolder6(true);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground
            source={image}
            style={styles.image}
            resizeMode="cover">
            <View style={styles.card}>
              <View style={styles.col1}>
                <Image
                  style={styles.itemImage}
                  source={require('../assets/images/litro.jpg')}
                />
              </View>
              <View style={styles.col2}>
                <Text style={styles.itemName}>12.5kg Litro Regular Refill</Text>
                <View style={styles.stockView}>
                  <Text style={styles.stockText}>Stock </Text>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.stockDetail}
                    editable={TextInputDisableHolder1}>
                    100
                  </TextInput>
                </View>
                <Button
                  onPress={onPressButton1}
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
                  source={require('../assets/images/litro.jpg')}
                />
              </View>
              <View style={styles.col2}>
                <Text style={styles.itemName}>5kg Litro Budget Refill</Text>
                <View style={styles.stockView}>
                  <Text style={styles.stockText}>Stock </Text>
                  <TextInput 
                  keyboardType="numeric" 
                  style={styles.stockDetail}
                  editable={TextInputDisableHolder2}>
                    100
                  </TextInput>
                </View>
                <Button
                onPress={onPressButton2}
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
                  source={require('../assets/images/litro.jpg')}
                />
              </View>
              <View style={styles.col2}>
                <Text style={styles.itemName}>2.3kg Litro Buddy Refill</Text>
                <View style={styles.stockView}>
                  <Text style={styles.stockText}>Stock </Text>
                  <TextInput 
                  keyboardType="numeric" 
                  style={styles.stockDetail}
                  editable={TextInputDisableHolder3}>
                    100
                  </TextInput>
                </View>
                <Button
                onPress={onPressButton3}
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
                  source={require('../assets/images/litro.jpg')}
                />
              </View>
              <View style={styles.col2}>
                <Text style={styles.itemName}>Accessory Pack</Text>
                <View style={styles.stockView}>
                  <Text style={styles.stockText}>Stock </Text>
                  <TextInput 
                  keyboardType="numeric" 
                  style={styles.stockDetail}
                  editable={TextInputDisableHolder4}>
                    100
                  </TextInput>
                </View>
                <Button
                onPress={onPressButton4}
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
                  source={require('../assets/images/litro.jpg')}
                />
              </View>
              <View style={styles.col2}>
                <Text style={styles.itemName}>Hose</Text>
                <View style={styles.stockView}>
                  <Text style={styles.stockText}>Stock </Text>
                  <TextInput 
                  keyboardType="numeric" 
                  style={styles.stockDetail}
                  editable={TextInputDisableHolder5}>
                    100
                  </TextInput>
                </View>
                <Button
                onPress={onPressButton5}
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
                  source={require('../assets/images/litro.jpg')}
                />
              </View>
              <View style={styles.col2}>
                <Text style={styles.itemName}>Regulator</Text>
                <View style={styles.stockView}>
                  <Text style={styles.stockText}>Stock </Text>
                  <TextInput 
                  keyboardType="numeric" 
                  style={styles.stockDetail}
                  editable={TextInputDisableHolder6}>
                    100
                  </TextInput>
                </View>
                <Button
                onPress={onPressButton6}
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
    fontSize: 15,
  },
  stockDetail: {
    padding: 1,
    color: 'blue',
    fontSize: 15,
  },
});

export default HomeDealer;
