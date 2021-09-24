import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Payment = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Test');
  };

  return (
    <View style={styles.welcomeview}>
      <Text style={styles.welcometxt}>Welcome Back</Text>
      <Button title="go to login" onPress={pressHandler} />
    </View>
    // <Container>
    //   <Text>Welcome to login</Text>
    // </Container>
  );
};

const styles = StyleSheet.create({
  welcometxt: {
    backgroundColor: 'red',
  },

  welcomeview: {
    // backgroundColor: "#2553A8",
    // width: 412,
    // height: 59,
    marginTop: 10,
  },
});

export default Payment;
