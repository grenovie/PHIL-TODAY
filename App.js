import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SplashScreen from "./screens/SplashScreen";
import newsroot from "./news/newsroot";

import MyDrawer from "./components/MyDrawer";
import guestDrawer from "./components/guestDrawer";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home1"
            component={SplashScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home2"
            component={MyDrawer}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Guest"
            component={guestDrawer}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: "#4267B2",
              },
              headerTintColor: "#D3D3D3",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
            name="News"
            component={newsroot}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
