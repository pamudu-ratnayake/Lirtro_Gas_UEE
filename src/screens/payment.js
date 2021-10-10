import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SegmentedControls } from 'react-native-radio-buttons'


const Payment = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState();
  const [checked, setChecked] = React.useState('first');

  const options = [
    "Visa",
    "Master",
    "Mestro"
  ];

  // function setSelectedOption(selectedOption){
  //   this.setState({
  //     selectedOption
  //   });
  // }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Total Price</Text>
            <Text style={styles.modalPrice}>LKR 2500</Text>
            <Text style={styles.modalText}>Payment Method</Text>
            <View>
              <SegmentedControls
                options={ options }
                optionStyle={{fontFamily: 'AvenirNext-Medium', fontSize:20,}}
                optionContainerStyle={{flex: 1}}
              />
            </View>
        
            <Text style={styles.textCard}>Card Number</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
            <View style={styles.row} >
              <View style={styles.colH}>
                <Text style={styles.textValid}>Valid Until</Text>
              </View>
              <View style={styles.colH}>
                <Text style={styles.textCVV}>CVV</Text>
              </View>
            </View>
            <View style={styles.row} >
              <View style={styles.col}>
                  <TextInput
                  style={styles.inputValid}
                  onChangeText={onChangeText}
                  value={text}
                />
              </View>
              <View style={styles.col}>
                  <TextInput
                  style={styles.inputCVV}
                  onChangeText={onChangeText}
                  value={text}
                />
              </View>
            </View>

            <Text style={styles.textCardName}>Name on Card</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
         
           <View style={styles.row} >
              <View style={styles.col} >

                <Pressable
                  style={[styles.buttonHide, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyleHide}>Close</Text>
                </Pressable>
              </View>
              <View style={styles.col} >
                <Pressable
              style={[styles.buttonSub, styles.buttonSubS]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyleSub}>Pay Now</Text>
            </Pressable>
            </View>
          
           </View>
         
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Payment</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#000000c0",
    opacity:50,
    borderRadius: 20,
    padding: 35,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    width:415,
  },
  buttonHide: {
    marginTop:25,
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    width:150,
  },
  buttonSub: {
    marginTop: 25,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width:150,
    marginLeft:20,
  },
  buttonOpen: {
    backgroundColor: "#2196F3",
  },
  buttonClose: {
    backgroundColor: "#000000c0",
  },
  buttonSubS: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
  },
  textStyleHide: {
    color: "#2196F3",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
  },
  textStyleSub: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    
  },
  modalText: {

    color: "white",
    marginBottom: 10,
    textAlign: "left",
    fontSize: 22,
  },
  modalPrice: {
    color: "#2196F3",
    marginBottom: 10,
    fontSize: 40,
  },
  textCard: {
 
    color: "white",
    marginBottom: 10,
    textAlign: "left",
    fontSize: 22,
  },
  textCardName: {
    marginTop:12,
    color: "white",
    marginBottom: 10,
    textAlign: "left",
    fontSize: 22,
  },
  textValid: {
    marginTop: 12,
    color: "white",
    marginBottom: 10,
    textAlign: "left",
    fontSize: 22,
  },
  textCVV: {
    color: "white",
    marginTop: 12,
    marginBottom: 10,
    textAlign: "left",
    fontSize: 22,
  },
  input: {
    marginTop: 12,
    color:"white",
    borderColor:"white",
    borderRadius:10,
    borderWidth: 1,
    width:300,
    fontSize:15,
  },
  input: {
    marginTop: 12,
    color:"white",
    borderColor:"white",
    borderRadius:10,
    borderWidth: 1,
    width:300,
    fontSize:15,
  },
  inputValid: {
    marginTop: 12,
    color:"white",
    borderColor:"white",
    borderRadius:10,
    borderWidth: 1,
    width:140,
    fontSize:15,
  },
  inputCVV: {
    marginTop: 12,
    marginLeft:15,
    color:"white",
    borderColor:"white",
    borderRadius:10,
    borderWidth: 1,
    width:140,
    fontSize:15,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  col: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  colH: {
    flexDirection: "column",
    flexWrap: "wrap",
    width:160,
  },
});

export default Payment;