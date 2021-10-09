import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Orders = () => {
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

  return (
    <View style={styles.container} >
      <View style={styles.row} >
        <TouchableOpacity style={styles.button} 
        onPress={showPastOrders}
         >
          <Text style={styles.buttonLabel} >
       PAST ORDERS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
            onPress={showCurrentOrders} >
          <Text style={styles.buttonLabel} >
       CURRENT ORDERS
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{margin:10}} > 
      { pastOrder && 
       <View style={styles.row} >
          <Text >
            Past Orders.....
          </Text>
        </View>
      }
      {
        currentOrder && 
        <View style={styles.row}>
          <Text>
            Current Orders.....
          </Text>
        </View>

      }
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

export default Orders;
