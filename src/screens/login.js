import React, {useState} from 'react';
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
import {Picker} from '@react-native-picker/picker';

const Login = ({navigation}) => {

  return (

    <ScrollView>
    <View style={styles.inputGroup}>
    <View >
          <Text style={styles.lableOnInput}>Email :</Text>
          <TextInput style={styles.inputfld}></TextInput>
        </View>
        <View >
          <Text style={styles.lableOnInput}>Password :</Text>
          <TextInput style={styles.inputfld}></TextInput>
        </View>
        <Button title="Login"></Button>
    </View>
    <View style={styles.bottomgrp}>
      <Text>Don't have an account?</Text>
      <View style={{width:350}}>
      <Button title="Register Now" />
      </View>
    </View>
    </ScrollView>

  );
};


const styles = StyleSheet.create({
  inputGroup: {
    margin: 10,
    marginTop: 8,
  },
  inputfld: {
    backgroundColor: '#FFFFFF',
    margin: 8,
    borderRadius: 8,
    height: 40,
    paddingLeft: 10,
  },
  lableOnInput: {
    // marginTop: 12,
    marginLeft: 10,
    fontSize: 16,
  },
  bottomgrp: {
    margin:30,
    alignItems:'center'
  }
});

export default Login;
