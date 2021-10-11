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
  ImageBackground,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Login = ({navigation}) => {

  const register = () => {
    navigation.navigate('Register')
  }

  return (

    <View style={styles.container}>
    <ScrollView>
      <View style={{alignItems:'center'}}>
      <ImageBackground style={styles.logo} source={require("../assets/images/logo.png")} />
      </View>
    <View style={styles.inputGroup}>
    <View >
          <Text style={styles.lableOnInput}>Email :</Text>
          <TextInput style={styles.inputfld}></TextInput>
        </View>
        <View >
          <Text style={styles.lableOnInput}>Password :</Text>
          <TextInput style={styles.inputfld}></TextInput>
        </View>
        <View style={{marginHorizontal:20, marginTop:30}}>
        <Button title="Login"></Button>
        </View>
    </View>
    <View style={styles.bottomgrp}>
      <Text style={{color:'#FFFFFF'}}>Don't have an account?</Text>
      <TouchableOpacity style={{marginTop:10}} onPress={register}>
      <View style={styles.regbtn}>
        <Text style={styles.regBtnText}>
          Register Now
        </Text>
      </View>
    </TouchableOpacity>
    </View>

    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    margin: 10,
    marginTop: 80,
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
    color:'#FFFFFF'
  },
  bottomgrp: {
    margin:30,
    alignItems:'center',
    marginTop:180
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
  },
  container: {
    backgroundColor:'#062F6E',
    flex:1
  },
  logo: {
    width:100,
    height:100,
    marginTop:30
  }
});

export default Login;
