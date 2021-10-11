import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const PastOrder = ({navigation}) => {
  const [pastOrder, setPastOrder] = useState(true);
  const [currentOrder, setCurrentOrder] = useState();

  const showPastOrders = () => {
    setPastOrder(true);
    setCurrentOrder(false);
  }

  const showCurrentOrders = () => {
    setCurrentOrder(true);
    setPastOrder(false);
  }

  const pressHandler = () => {
    navigation.navigate('Payment');
  };

  return (
    <View style={styles.container} >
      <View style={styles.row} >
        <View>
          <Text style={styles.colL} > Date </Text>
        </View>
        <View>
          <Text style={styles.colR} > 01-08-2021 </Text>
        </View>
      </View>
      <View style={styles.row} >
        <View>
          <Text style={styles.colL} > Order ID </Text>
        </View>
        <View>
          <Text style={styles.colR} > O10001 </Text>
        </View>
      </View>
      <View style={styles.row} >
        <View>
          <Text style={styles.colL} > Dealer </Text>
        </View>
        <View>
          <Text style={styles.colR} > Malith Madusankha </Text>
        </View>
      </View>
      <View style={styles.row} >
        <View>
          <Text style={styles.colL} > Total </Text>
        </View>
        <View>
          <Text style={styles.colR} > LKR 2500 </Text>
        </View>
      </View>
      <View style={styles.row} >
        <View>
          <Text style={styles.colL} > Address </Text>
        </View>
        <View>
          <Text style={styles.colR} numberOfLines={3} >44/2 A , Kandy Road, Kadawatha. </Text>
        </View>
      </View>
      <View style={styles.space} >
         <View style={styles.row} >
          <View>
            <Text style={{
              flexDirection: "column",
              flexWrap: "wrap",
              fontSize: 22,
              width: 150,
              marginTop:12,
              color:"blue"
            }} > Name </Text>
          </View>
          <View>
            <Text style={{
              flexDirection: "column",
              flexWrap: "wrap",
              fontSize: 22,
              width: 100,
              marginTop:12,
              color:"blue"
            }} numberOfLines={3} > Qty </Text>
          </View>
          <View>
            <Text style={{
              flexDirection: "column",
              flexWrap: "wrap",
              fontSize: 22,
              width: 100,
              marginTop:12,
              color:"blue"
            }} numberOfLines={3} > Price </Text>
          </View>
        </View>
        <View style={styles.row} >
          <View>
            <Text style={{
              flexDirection: "column",
              flexWrap: "wrap",
              fontSize: 20,
              width: 150,
              marginTop:12,
             
            }} > Hose </Text>
          </View>
          <View>
            <Text style={{
              flexDirection: "column",
              flexWrap: "wrap",
              fontSize: 20,
              width: 100,
              marginTop:12,
             
            }} numberOfLines={3} > 2 </Text>
          </View>
          <View>
            <Text style={{
              flexDirection: "column",
              flexWrap: "wrap",
              fontSize: 20,
              width: 100,
              marginTop:12,
             
            }} numberOfLines={3} > 500 </Text>
          </View>
        </View>
        <View style={styles.row} >
          <View>
            <Text style={{
              flexDirection: "column",
              flexWrap: "wrap",
              fontSize: 20,
              width: 150,
              marginTop:12,
             
            }} > Cylinder </Text>
          </View>
          <View>
            <Text style={{
              flexDirection: "column",
              flexWrap: "wrap",
              fontSize: 20,
              width: 100,
              marginTop:12,
             
            }} numberOfLines={3} > 1 </Text>
          </View>
          <View>
            <Text style={{
              flexDirection: "column",
              flexWrap: "wrap",
              fontSize: 20,
              width: 100,
              marginTop:12,
             
            }} numberOfLines={3} > 2000 </Text>
          </View>
        </View>
        <View>

        </View>
      </View>
      
      
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
 
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  space:{
    marginTop:40,
  },
  col: {
    flexDirection: "column",
    flexWrap: "wrap",
    fontSize: 20,
    width: 100,
    marginTop:12,
  },
  colL: {
    flexDirection: "column",
    flexWrap: "wrap",
    fontSize: 20,
    width: 150,
    marginTop:12,
  },
  colR: {
    flexDirection: "column",
    flexWrap: "wrap",
    fontSize: 20,
    width: 250,
    marginTop:12,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "steelblue",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    height: 50,
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    textAlign: 'center',
    marginTop:3,
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },

});

export default PastOrder;
