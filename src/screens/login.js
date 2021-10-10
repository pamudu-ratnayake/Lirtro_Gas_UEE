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
      <TouchableOpacity style={styles.bottomgrp}>
      <View style={styles.regbtn}>
        <Text style={styles.regBtnText}>
          Register Now
        </Text>
      </View>
    </TouchableOpacity>
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
  },
  regbtn: {
    backgroundColor:'#009DFE',
    width:350,
    height:35,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    backgroundColor:null,
    borderColor:'#009DFE'
  },
  regBtnText: {
    fontWeight:'bold',
    fontSize:16,
    color:'white'
  }
});

export default Login;
