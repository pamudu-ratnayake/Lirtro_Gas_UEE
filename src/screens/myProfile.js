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
import Modal from 'react-native-modal';

const MyProfile = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('Home');

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const login = () => {
    navigation.navigate('Login');
  };


  return (
    <ScrollView>
      {/* <TouchableOpacity> */}
      <View >
      <ImageBackground
        style={styles.arrowIcon}
        source={require('../assets/images/down-arrow.png')}>
      <Picker
        mode={'dropdown'}
        style={{marginTop: -12}}
        
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Edit Profile" value="editProfile" />
          <Picker.Item label="Delete Profile" value="delete Profile" />
      </Picker>
        </ImageBackground>
        </View>
        {/* </TouchableOpacity> */}
              {/* <Picker
        mode={'dropdown'}
        style={{marginTop: -8}}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Colombo" value="Colombo" />
          <Picker.Item label="Ampara" value="Ampara" />
      </Picker> */}
      <View style={styles.imgView}>
        <ImageBackground
          style={styles.profImg}
          source={require('../assets/images/profile-avatar.png')}
        />
      </View>
      <View style={styles.detailArea}>
        <View style={styles.dots}>
          <Text style={styles.allText}>Name</Text>
          <Text style={styles.allText}>Tele</Text>
          <Text style={styles.allText}>Email</Text>
          <Text style={styles.allText}>Address</Text>
        </View>
        <View style={styles.dots}>
          <Text style={styles.allText}>:</Text>
          <Text style={styles.allText}>:</Text>
          <Text style={styles.allText}>:</Text>
          <Text style={styles.allText}>:</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.allText}>Pamudu Ratnayake</Text>
          <Text style={styles.allText}>0762958475</Text>
          <Text style={styles.allText}>pamudu@gmail.com</Text>
          <Text style={styles.allText}>No.34/D, Temple Road, Pannipitiya.</Text>
        </View>
      </View>
      <View style={styles.BtnView}>
        <TouchableOpacity style={styles.feedbackkbtn} onPress={toggleModal}>
          <View>
            <Text style={styles.feedbackkBtnText}>Feedback</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.feedbackkbtn} onPress={login}>
          <View>
            <Text style={styles.feedbackkBtnText}>Hot Line : 1311</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* <View style={{ flex: 1 }}> */}

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalBody}>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.feedLable}>Send Feedback</Text>
            <TextInput multiline={true} style={styles.feedbackBox}></TextInput>
          </View>

          <TouchableOpacity style={styles.feedbackkbtn} onPress={toggleModal}>
            <View>
              <Text style={styles.feedbackkBtnText}>Submit Feedback</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.feedbackkbtn} onPress={toggleModal}>
            <View>
              <Text style={styles.feedbackkBtnText}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* </View> */}
    </ScrollView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  profImg: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    marginTop: 60,
  },
  imgView: {
    flex: 1,

    alignItems: 'center',
  },
  detailArea: {
    flexDirection: 'row',
    margin: 30,
    marginTop: 60,
  },
  dots: {
    marginLeft: 20,
  },
  details: {
    marginLeft: 20,
    flex: 1,
  },
  allText: {
    fontSize: 18,
    paddingTop: 8,
  },
  feedbackkbtn: {
    backgroundColor: '#2553A8',
    height: 35,
    width: 135,
    marginLeft: 10,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 10,
  },
  feedbackkBtnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  BtnView: {
    marginBottom: 20,
    alignItems: 'center',
    marginTop: 110,
  },
  modalBody: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    margin: 30,
    borderRadius: 10,
    marginTop: 180,
    marginBottom: 180,
  },
  feedLable: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 20,
  },
  feedbackBox: {
    borderColor: 'black',
    borderWidth: 0.5,
    margin: 15,
    height: 130,
    marginTop: 30,
    marginBottom: 30,
  },
  arrowIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 30,
    top: 30,
    paddingRight:-2
  },
});
