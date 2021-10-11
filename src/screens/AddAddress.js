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
import {Formik} from 'formik';
import axios from 'axios';

const AddAddress = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <ScrollView>
      <View style={styles.inputGroup}>
        <Formik
          initialValues={{
            delivery_to: '',
            district: '',
            address_line_1: '',
            address_line_2: '',
            city: '',
          }}
          onSubmit={(values) => {
            console.log('data', values)
              axios.post(`https://localhost:8080/deliverAddress/addAddress`, values)
              .then((res) => {
                console.log(res.data)
              })
              .catch((err) => {
                console.log(err)
              })
          }}>
          {props => (
            <View>
              <View style={styles.inputGroup}>
                <Text style={styles.lableOnInput}>Delivery To :</Text>

                <View style={styles.inputfld}>
                  <Picker
                    mode={'dropdown'}
                    style={{marginTop: -8}}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedValue(itemValue)
                    }>
                    <Picker.Item label="Home" value="Home" />
                    <Picker.Item label="Company" value="Company" />
                  </Picker>
                </View>
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.lableOnInput}>District :</Text>

                <View style={styles.inputfld}>
                  <Picker
                    mode={'dropdown'}
                    style={{marginTop: -8}}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedValue(itemValue)
                    }>
                    <Picker.Item label="Colombo" value="Colombo" />
                    <Picker.Item label="Ampara" value="Ampara" />
                    <Picker.Item label="Anuradhapura" value="Anuradhapura" />
                    <Picker.Item label="Badulla" value="Badulla" />
                    <Picker.Item label="Batticalo" value="Batticalo" />
                    <Picker.Item label="Galle" value="Galle" />
                    <Picker.Item label="Gampaha" value="Gampaha" />
                    <Picker.Item label="Hambanthota" value="Hambanthota" />
                    <Picker.Item label="Jaffna" value="Jaffna" />
                    <Picker.Item label="Kalutara" value="Kalutara" />
                    <Picker.Item label="Kandy" value="Kandy" />
                    <Picker.Item label="Kegalle" value="Kegalle" />
                    <Picker.Item label="Kilinochchi" value="Kilinochchi" />
                    <Picker.Item label="Kurunagala" value="Kurunagala" />
                    <Picker.Item label="Mannar" value="Mannar" />
                    <Picker.Item label="Matale" value="Matale" />
                    <Picker.Item label="Matara" value="Matara" />
                    <Picker.Item label="Moneragala" value="Moneragala" />
                    <Picker.Item label="Mullativu" value="Mullativu" />
                    <Picker.Item label="Nuwara Eliya" value="Nuwara Eliya" />
                    <Picker.Item label="Polonnaruwa" value="Polonnaruwa" />
                    <Picker.Item label="Puttalama" value="Puttalama" />
                    <Picker.Item label="Ratnapura" value="Ratnapura" />
                    <Picker.Item label="Tricomalee" value="Tricomalee" />
                    <Picker.Item label="Vavuniya" value="Vavuniya" />
                  </Picker>
                </View>
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.lableOnInput}>Address Line One :</Text>
                <TextInput
                  style={styles.inputfld}
                  onChangeText={props.handleChange('address_line_1')}
                  value={props.values.address_line_1} />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.lableOnInput}>Address Line Two :</Text>
                <TextInput
                  style={styles.inputfld}
                  onChangeText={props.handleChange('address_line_2')}
                  value={props.values.address_line_2} />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.lableOnInput}>City :</Text>
                <TextInput
                  style={styles.inputfld}
                  onChangeText={props.handleChange('city')}
                  value={props.values.city} />
              </View>
              <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.hrLineGrp}>
        <View style={styles.hrLine} />
        <Text style={styles.orTxt}>or</Text>
        <View style={styles.hrLine} />
      </View>
      <Image
        style={styles.profImage}
        source={require('../assets/images/map1.jpg')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  hrLine: {
    borderWidth: 0.6,
    margin: 20,
    width: 150,
  },
  hrLineGrp: {
    flexDirection: 'row',
  },
  orTxt: {
    marginTop: 10,
  },
});

export default AddAddress;
