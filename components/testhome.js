import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
  Entypo,
} from "@expo/vector-icons";

const img = require("../assets/manila2.jpg");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const HomeScreen = ({ navigation }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? "PM" : "AM";

      setTime(
        (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          " " +
          ampm
      );

      setDate(days[day] + ", " + date + " " + months[month]);
    }, 1000);
  }, []);

  return (
    <ImageBackground source={img} style={style.image} blurRadius={1}>
      <SafeAreaView style={style.container}>
        <View>
          <View style={style.heading}>
            <Image
              style={style.tinyLogo}
              source={require("../assets/myLogo.png")}
            />
            <Text style={style.textHeading1}>PHIL{"\n"}TODAY</Text>
          </View>
          <View style={style.homeInfo}>
            <Entypo
              style={style.homeIcons}
              name="calendar"
              size={35}
              color="white"
            />
            <Text style={style.subheading}>{date}</Text>
          </View>
          <Text style={style.subheading2}>
            APP UPDATES: {"\n"}
            {"\n"}[1] Downloadable app {"\n"} from Playstore Soon.
            {"\n"}[2] Few bugs fixed.
            {"\n"}[3] More features to {"\n"} be added soon.
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: "space-between",
    padding: 10,
  },
  tinyLogo: {
    margin: 10,
    width: 130,
    height: 130,
    tintColor: "white",
  },
  homeInfo: {
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 5,
    flexDirection: "row",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "center",
  },
  homeIcons: {
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#18181b50",
  },
  textHeading1: {
    margin: 10,
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
    textAlignVertical: "center",
    textAlign: "center",
  },
  heading: {
    marginTop: 30,
    flexDirection: "row",
    backgroundColor: "#18181b50",
    borderRadius: 10,
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 2,
  },
  subheading: {
    padding: 5,
    marginVertical: 10,
    fontSize: 20,
    color: "white",
    fontWeight: "300",
    backgroundColor: "#18181b50",
    alignSelf: "center",
    borderRadius: 5,
  },
  subheading2: {
    fontSize: 20,
    color: "white",
    marginVertical: 10,
    justifyContent: "center",
    padding: 10,
    paddingHorizontal: 50,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#18181b50",
    alignSelf: "center",
    textAlign: "center",
  },
  rightAlign: {
    textAlign: "right",
    marginTop: 20,
  },
  timezone: {
    fontSize: 20,
    color: "white",
  },
  longlat: {
    fontSize: 16,
    color: "white",
    fontWeight: "700",
  },
  itemsContainer: {
    backgroundColor: "#18181b50",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  itemWeather: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemsContainerTitle: {
    fontSize: 14,
    color: "white",
    fontWeight: "100",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  newsheadline: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  heading1: {
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#18181b50",
    borderRadius: 10,
    alignSelf: "center",
    borderColor: "#18181b90",
    borderWidth: 2,
    padding: 20,
  },
});

export default HomeScreen;
