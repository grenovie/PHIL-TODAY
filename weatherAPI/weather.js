import React,{useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Alert} from 'react-native';

import DateTime from "../components/DateTime";
import Scrollforecast from "../components/Scrollforecast";
const img = require('../assets/cat.jpg')
import DailyAlert from "../components/DailyAlert";

const API_key="37b2f807d2303442b9399df0aa9883ea";




const weather = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
  
    useEffect(() => {
      fetch('https://api.openweathermap.org/data/2.5/onecall?lat=14.599512&lon=120.984222&exclude=hourly,minutely&units=metric&appid=37b2f807d2303442b9399df0aa9883ea')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
    
    return(
        <View style={styles.container}>           
            {isLoading ? <Text>Loading...</Text> :
            (
            <ImageBackground source={img} style={styles.image} >

            <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon} />

            <DailyAlert scroll={data.current} desc={data.current}/>

            <Scrollforecast night={data.daily[0]} icon={data.daily[0]} day={data.daily[0]} light={data.daily[0]} 
            dataone={data.daily} /> 
            </ImageBackground>
            )
            }
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image:{
      flex:1, 
      resizeMode:"cover", 
      justifyContent:"center"
    }
  })

export default weather;