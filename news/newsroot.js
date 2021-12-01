import React, { useContext } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Context, { NewsContext } from "../API/Contex";
import InshortTabs from "../components/InshortTabs";

function NewsBalita() {
  const { darktheme } = useContext(NewsContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darktheme ? "#282c35" : "white",
      }}
    >
      <InshortTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default () => {
  return (
    <Context>
      <NewsBalita />
    </Context>
  );
};
