import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { auth } from "../firebase";

const img = require("../assets/manila2.jpg");

const GuestScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    navigation.replace("Login");
  };

  return (
    <ImageBackground source={img} style={styles.image} blurRadius={20}>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/myLogo.png")}
        />
        <Text style={styles.bText}>WELCOME! Guest</Text>
        <Text style={styles.subheading2}>
          Note: {"\n"}
          {"\n"}Sign Up Now for more
          {"\n"}app features!
        </Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up Now!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default GuestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  bText: {
    color: "white",
    marginBottom: 20,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    tintColor: "white",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  subheading2: {
    fontSize: 20,
    color: "white",
    marginVertical: 10,
    justifyContent: "center",
    padding: 10,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#18181b50",
    alignSelf: "center",
    textAlign: "center",
  },
});
