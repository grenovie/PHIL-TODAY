import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";

const img = require("../assets/cat.jpg");

const windowWidth = Dimensions.get("window").width;
const SingleNews = ({ item, index }) => {
  const windowHeight = Dimensions.get("window").height;

  return (
    <View
      style={{
        height: "90%",
        width: windowWidth,
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{
          uri:
            item.urlToImage != null
              ? item.urlToImage
              : "https://ph-test-11.slatic.net/p/7c10e1d3c24cf9d2bfd0641fc10cbfe3.jpg",
        }}
        style={{ height: "55%", resizeMode: "cover", width: windowWidth }}
      />
      <View style={{ ...styles.description, backgroundColor: "#282c35" }}>
        <View>
          <Text style={{ ...styles.title, color: "white" }} numberOfLines={3}>
            {item.title}
          </Text>
        </View>
        <Text style={{ ...styles.content, color: "white" }} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={{ color: "white" }}>
          Short by: <Text>{item.author ?? " unknown"}</Text>
        </Text>
        <ImageBackground blurRadius={30} style={styles.footer} source={img}>
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            {/* <Text style={{ fontSize: 15, color: "white" }}>
              '{item?.content?.slice(0, 45)}...'
            </Text> */}
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: "white",
                alignSelf: "center",
              }}
            >
              Read More
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  content: {
    fontSize: 13,
    paddingBottom: 10,
  },
  footer: {
    height: 50,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  description: {
    padding: 15,
    flex: 1,
  },
});

export default SingleNews;
