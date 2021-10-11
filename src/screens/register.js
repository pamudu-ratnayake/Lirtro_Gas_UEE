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

const Register = ({navigation}) => {

  const login = () => {
    
  }

  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <ImageBackground
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
      </View>

      <View style={styles.inputGroup}>
        <View style={styles.firstRow}>
          <View style={{width: 195}}>
            <Text style={styles.lableOnInput}>First Name</Text>
            <TextInput style={styles.inputfld}></TextInput>
          </View>
          <View style={{width: 195}}>
            <Text style={styles.lableOnInput}>Last Name</Text>
            <TextInput style={styles.inputfld}></TextInput>
          </View>
        </View>
        <View>
          <Text style={styles.lableOnInput}>Email Address</Text>
          <TextInput style={styles.inputfld}></TextInput>
        </View>
        <View>
          <Text style={styles.lableOnInput}>Mobile Number</Text>
          <TextInput style={styles.inputfld}></TextInput>
        </View>
        <View>
          <Text style={styles.lableOnInput}>New Password</Text>
          <TextInput style={styles.inputfld}></TextInput>
        </View>
        <View>
          <Text style={styles.lableOnInput}>Confirm New Password</Text>
          <TextInput style={styles.inputfld}></TextInput>
        </View>
        <View style={{marginHorizontal:20, marginTop:30}}>
        <Button title="Register"></Button>
        </View>
      </View>
      <View style={styles.bottomgrp}>
      <Text style={{color:'#FFFFFF'}}>Already have an account?</Text>
      <TouchableOpacity style={{marginTop:10}} onPress={login}>
      <View style={styles.regbtn}>
        <Text style={styles.regBtnText}>
          Login Now
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
    marginTop: 20,
  },
  inputfld: {
    backgroundColor: '#FFFFFF',
    margin: 8,
    borderRadius: 8,
    height: 40,
    paddingLeft: 10,
  },
  lableOnInput: {
    marginLeft: 10,
    fontSize: 16,
    color:'#FFFFFF'
  },
  firstRow: {
    flexDirection: 'row',
  },
  bottomgrp: {
    margin: 30,
    alignItems: 'center',
  },
  regbtn: {
    backgroundColor: '#009DFE',
    width: 350,
    height: 35,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: null,
    borderColor: '#009DFE',
  },
  regBtnText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  container: {
    backgroundColor: '#062F6E',
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default Register;
