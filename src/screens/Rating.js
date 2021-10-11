import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

import { Rating, AirbnbRating } from 'react-native-ratings';

const WATER_IMAGE = require('../assets/images/star.png');

const RatingComponet = ()=>{
  
return(
  <View>
    <AirbnbRating />
  </View>
);
}

export default RatingComponet;