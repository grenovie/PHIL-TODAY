import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const allImage = {
  gre: require("../assets/gre.jpg"),
};

const img = require("../assets/manila2.jpg");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          name: "Grenovie C Elumir",
          pos: "Team Leader/Developer",
          univ: "Universidad De Manila",
          img: "https://scontent.fmnl5-1.fna.fbcdn.net/v/t39.30808-6/244951323_2891256341166589_8228346106296415275_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEpNC0BqazeXe_cOgUtRwlzZi1gcp_cWf5mLWByn9xZ_mXY4WolvXXxH2upFieGMavtDEgdKSUqTqymme7lRxTo&_nc_ohc=4f_9KvJp-rUAX8JPCSt&_nc_ht=scontent.fmnl5-1.fna&oh=93fbf09ad0f9f97203d545d38acc86d0&oe=61A7F04D",
        },
        {
          name: "Zandro Z Verona",
          pos: "Assistant Leader/Developer",
          univ: "Universidad De Manila",
          img: "https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.15752-9/259971570_384710906723159_6841590252108787726_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHU5aA5pX2TiphAUgCAa1UiLGdwCNptOgYsZ3AI2m06BkHiaL2eG5-eostXVLEcRpWSAs9sVExJDbnjc58Bavq4&_nc_ohc=viRWPF2bBB0AX8ls2UW&tn=cTBBELd7p53wvlHb&_nc_ht=scontent.fmnl5-1.fna&oh=2e6f28a0f8190a06aa48fbffc46916b6&oe=61C224BA",
        },
        {
          name: "Zander Z Verona",
          pos: "Member/UI Designer",
          univ: "Universidad De Manila",
          img: "https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.15752-9/258854575_904178756923274_7456644341188510385_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGah14LOD4CdogCzz0-_96WszAqJQB7UNKzMColAHtQ0q2mxzxaiPiM93VX1VmDUHW4WckQDHsyPvsTNVZ6dEh5&_nc_ohc=YLO8lxM0SPEAX-c6Nyo&tn=cTBBELd7p53wvlHb&_nc_ht=scontent.fmnl5-1.fna&oh=33447a03b6f6456a4bc8c9667dac87b6&oe=61C54B85",
        },
        {
          name: "Cyril Joseph Bacia",
          pos: "Member/Analyst",
          univ: "Universidad De Manila",
          img: "https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.15752-9/256163305_1669841076680397_7864276297816936028_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGJoz_CMhs_mUR0SOV4htthZKhaD9P-hxhkqFoP0_6HGBla1LTdX-FgGrdgNzXx1hH1UDmpP6qkUjWrpjWA2fxa&_nc_ohc=BjXqlhz1gw0AX_S1wpV&tn=cTBBELd7p53wvlHb&_nc_ht=scontent.fmnl5-1.fna&oh=2f2fb1229d3a22b5adcb6dee5c9c530a&oe=61C1E4E6",
        },
        {
          name: "Dranreb Serrano",
          pos: "Member/Analyst",
          univ: "Universidad De Manila",
          img: "https://scontent.fmnl5-1.fna.fbcdn.net/v/t39.30808-6/259577291_4519495441505421_6428835872852336780_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEcE-DVSSfWpp9zwWdpoTQpl-4IKuaSTPGX7ggq5pJM8SyDSooxJVDYY0mqrC8g5a6u6Ygi_uksShhto9LD7M49&_nc_ohc=gMZwCg9zX7UAX8vEpK1&tn=cTBBELd7p53wvlHb&_nc_ht=scontent.fmnl5-1.fna&oh=f3878599dbcaae97065b366fb6af4ca8&oe=61A33405",
        },
        {
          name: "Robert San Pring",
          pos: "Member/Analyst/Documentation",
          univ: "Universidad De Manila",
          img: "https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.6435-9/75540082_642961419812100_4167789423125069824_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFe3OddQNa3q9GV9OemeufQxqmd5_C4c7vGqZ3n8Lhzu-c6BaEmqrwf3RwimqAYn99OzHjCBNbAORJaC5B_97qk&_nc_ohc=qTNlcixUTcQAX8j8y7D&_nc_ht=scontent.fmnl5-1.fna&oh=d554134f8ff064524f2997fceaf06163&oe=61C52474",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "#f7f7f7",
          borderRadius: 25,
          height: 410,
          width: 300,
          marginLeft: 25,
          marginRight: 25,
          alignItems: "center",
        }}
      >
        <Image source={{ uri: item.img }} style={{ ...styles.sourceImage }} />
        <TouchableOpacity
          style={{
            backgroundColor: "#dfe3ee",
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 30, padding: 5, textAlign: "center" }}>
            {item.name}
          </Text>
          <Text style={{ paddingHorizontal: 5, color: "red" }}>{item.pos}</Text>
          <Text
            style={{ paddingHorizontal: 5, paddingBottom: 5, color: "green" }}
          >
            {item.univ}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <ImageBackground source={img} style={styles.image} blurRadius={20}>
        <SafeAreaView
          style={{
            flex: 1,
            paddingTop: 100,
            paddingRight: 20,
          }}
        >
          <View
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
          >
            <Carousel
              layout={"default"}
              layoutCardOffset={19}
              ref={(ref) => (this.carousel = ref)}
              data={this.state.carouselItems}
              sliderWidth={350}
              itemWidth={300}
              activeSlideAlignment={"start"}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({ activeIndex: index })}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  sourceImage: {
    height: 250,
    width: 250,
    borderRadius: 20,
    marginTop: 25,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
