import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./testhome";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function Homepage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home Page" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: "space-between",
    padding: 10,
  },
  heading: {
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#18181b50",
    borderRadius: 10,
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 2,
  },
  subheading: {
    fontSize: 20,
    color: "white",
    fontWeight: "300",
    backgroundColor: "#18181b50",
    alignSelf: "center",
    borderRadius: 5,
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
});

export default Homepage;
