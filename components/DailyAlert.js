import React from 'react'
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import AutoScrolling from 'react-native-auto-scrolling';


const running = ({scroll, desc}) => {
  return(
    <View >
      <View>
        <View style={styles.container}>
        <AutoScrolling >
        <Text
          style={styles.text}
        >'Feels Like: {scroll.feels_like}&#176;C
        '                           'Outside Today: {desc.weather[0].description}'
        </Text>
      </AutoScrolling>
        </View>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#18181b99',
    
  },
  text: {
      color: 'white',
      fontSize: 15
  }

})

export default running;
