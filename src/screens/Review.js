import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import RatingComponet from "./Rating";

const Review = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState();
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
            <Text style={styles.modalText}>How was your Experienc</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
           <RatingComponet/>
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
              <Text style={styles.textStyleSub}>Submit</Text>
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
        <Text style={styles.textStyle}>Review</Text>
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
    alignItems: "center",
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
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    width:150,
  },
  buttonSub: {
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
    textAlign: "center",
    fontSize: 22,
  },
  input: {
    height: 40,
    margin: 12,
    color:"white",
    borderColor:"white",
    borderRadius:10,
    borderWidth: 1,
    padding: 10,
    height:50,
    width:300,
    fontSize:20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  col: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
});

export default Review;