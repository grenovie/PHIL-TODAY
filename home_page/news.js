import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Alert,
  SafeAreaView,
} from "react-native";

const img = require("../assets/manila2.jpg");
import Homepage from "../components/Homepage";

const firsthome = () => {
  return (
    <View style={styles.container}>
      {/* <StatusBar hidden={true} /> */}
      <ImageBackground source={img} style={styles.image}>
        <Homepage />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default firsthome;
