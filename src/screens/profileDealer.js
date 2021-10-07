import React from 'react';
import { useState } from 'react/cjs/react.development';
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

const image = require('../assets/img/background.png');

const ProfileDealer = () => {
  const [startCount, setState] = useState(3.5);

  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} resizeMode="cover">
          <ScrollView>
            <View style={styles.pageView}>
              <Image
                style={styles.profImage}
                source={require('../assets/img/dealerProfile.jpg')}
              />
              {/* <View style={styles.dealerInfor}> */}
                <View style={styles.dealerInfor}>
                  <Text style={styles.text1}>Shop </Text>
                  <Text style={styles.text2}>MINROSE GAS SHOP </Text>
                </View>

                <View style={styles.dealerInfor}>
                  <Text style={styles.text1}>Owner </Text>
                  <Text style={styles.text2}>Milan Fernando </Text>
                </View>

                <View style={styles.dealerInfor}>
                  <Text style={styles.text1}>Tell </Text>
                  <Text style={styles.text2}>077 4849423 </Text>
                </View>

                <View style={styles.dealerInfor}>
                  <Text style={styles.text1}>Address </Text>
                  <Text style={styles.text2}>No. 56, Temple Road, Kottawa, Pannipitiya </Text>
                </View>
              {/* </View> */}

              <View style={styles.btn}>
                <View style={styles.btn1}>
                <TouchableOpacity>
                  <Text style={styles.btnText}>Reviews</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.btn2}>
                <TouchableOpacity>
                  <Text style={styles.btnText}>Edit</Text>
                </TouchableOpacity>
                </View>
              </View>

              {/* <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      /> */}
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
  pageView: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 15,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  profImage: {
    width: 170,
    height: 170,
    borderRadius: 90,
    marginBottom: 20
  },
  dealerInfor: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 25
  },
  text1: {
    flex: 0.3,
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  text2: {
    flex: 0.7,
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  btn: {
    flexDirection: 'row',
    marginTop: 180
    
  },
  btn1: {
    alignItems: 'center',
    // marginVertical: 10,
    marginHorizontal: 30,
    padding: 10,
    backgroundColor: '#009dfe',
    borderRadius: 15,
    width: 150
  },
  btn2: {
    alignItems: 'center',
    // marginVertical: 10,
    marginHorizontal: 30,
    padding: 10,
    backgroundColor: '#009dfe',
    borderRadius: 15,
    width: 150
  },
  btnText: {
    fontSize: 20,
    color: '#fff'
    },
});

export default ProfileDealer;
