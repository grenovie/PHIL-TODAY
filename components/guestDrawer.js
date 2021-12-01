import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import news from "../home_page/news";
import weather from "../weatherAPI/weather";
import newsroot from "../news/newsroot";
import AboutScreen from "../screens/AboutScreen";
import ProfileScreen from "../screens/ProfileScreen";
import GuestScreen from "../screens/GuestScreen";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
  Entypo,
} from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

const guestDrawer = () => {
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
        name="Sign Up"
        component={GuestScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Entypo name="login" size={22} color="#4267B2" />
          ),
          drawerLabel: "Sign Up",
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

export default guestDrawer;
