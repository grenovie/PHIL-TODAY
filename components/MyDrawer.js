import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import news from "../home_page/news";
import weather from "../weatherAPI/weather";
import newsroot from "../news/newsroot";
import AboutScreen from "../screens/AboutScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStatusBarHeight: 15,
      }}
      options={{ headerShown: false }}
      drawerStyle={{
        backgroundColor: "#c6cbef",
      }}
    >
      <Drawer.Screen
        name="PHIL-Today"
        component={news}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ focused }) => (
            <AntDesign name="home" size={24} color="#4267B2" />
          ),
          headerStyle: {
            backgroundColor: "#4267B2",
          },
          headerTintColor: "#D3D3D3",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="News"
        component={newsroot}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome name="newspaper-o" size={20} color="#4267B2" />
          ),
          headerStyle: {
            backgroundColor: "#4267B2",
          },
          headerTintColor: "#D3D3D3",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Weather"
        component={weather}
        options={{
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="weather-cloudy"
              size={24}
              color="#4267B2"
            />
          ),
          headerStyle: {
            backgroundColor: "#4267B2",
          },
          headerTintColor: "#D3D3D3",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Feather name="settings" size={24} color="#4267B2" />
          ),
          drawerLabel: "Settings",
          headerStyle: {
            backgroundColor: "#4267B2",
          },
          headerTintColor: "#D3D3D3",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={AboutScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome name="group" size={21} color="#4267B2" />
          ),
          headerStyle: {
            backgroundColor: "#4267B2",
          },
          headerTintColor: "#D3D3D3",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
