import React from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';
import moment from 'moment-timezone';

const FutureForecast = ({gre}) => {
    return (
        
        <View style={{flexDirection: 'row'}}>
            {   
                gre && gre.length > 0 ?

                gre.map((gre, idx) => (

                    idx !== 0 && <Forecast key={idx} item_w={gre}/>
                ))
                :
                  <Text>
                      ERROR
                  </Text>
                    
            }
        </View>
    )
}


const Forecast = ({item_w}) => {
    const img = {uri: 'http://openweathermap.org/img/wn//'+item_w.weather[0].icon+'@4x.png'}
    return(
        <View style = {style.forecastItemCont}>
            <Text style = {style.day}>{moment(item_w.dt * 1000).format('ddd')}</Text>
            <Image source={img} style = {style.image} />
            <Text style = {style.temp}>Night : {Math.trunc(item_w.temp.night)}&#176;C</Text>
            <Text style = {style.temp}>Day : {Math.trunc(item_w.temp.day)}&#176;C</Text>          
        </View>
    )
}
const style = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    },
    forecastItemCont: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00000033',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        marginLeft: 5,
        
    },
    day: {
        fontSize: 15,
        color: 'white',
        backgroundColor: '#3c3c44',
        padding: 10,
        textAlign: 'center',
        borderRadius: 50,
        fontWeight: '200',
        marginBottom: 15
    },
    temp: {
        fontSize: 16,
        color: 'white',
        fontWeight: '100',
        textAlign: 'center'
    },
})

export default FutureForecast;
