import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const ProfEditDealer = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.inputGroup}>
          <View style={styles.inputGroup}>
            <Text style={styles.lableOnInput}>Shop :</Text>
            <TextInput style={styles.inputfld} placeholder="MINROSE GAS SHOP "></TextInput>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.lableOnInput}>Owner :</Text>
            <TextInput style={styles.inputfld} placeholder="Milan Fernando"></TextInput>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.lableOnInput}>Address :</Text>
            <TextInput style={styles.inputfld} placeholder="No. 56, Temple Road, Kottawa, Pannipitiya"></TextInput>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.lableOnInput}>tell :</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.inputfld} placeholder="077 4849423"></TextInput>
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
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
  inputGroup: {
    margin: 10,
    marginTop: 8,
  },
  profImage: {
    margin: 20,
    width: 370,
    height: 200,
  },
  btnView: {
    alignItems: 'center',
    marginTop: 160,
  },
  btn: {
    backgroundColor: '#009dfe',
    height: 35,
    width: 135,
    marginLeft: 10,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfEditDealer;
