import React from 'react'
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import moment from 'moment-timezone';
import FutureForecast from './FutureForecast';
 

const Scrollforecast = ({night, icon, day, light, dataone}) => {
    return (
        <ScrollView horizontal = {true} style = {style.scrollView}>
            <Currenttemperatureel gabi={night} logo={icon} araw={day} sinag={light}/>
            <FutureForecast gre={dataone}/>
        </ScrollView>
    ) 
}

const Currenttemperatureel = ({gabi, logo, araw, sinag}) => {

        const img = {uri: 'http://openweathermap.org/img/wn/'+ logo.weather[0].icon +'@4x.png'}
         return(
            <View style = {style.currentTempCont}>
                <Image source={img} style = {style.img}/>
                <View style = {style.otherTempCont}>
                    <Text style = {style.day}>{moment(araw.dt *1000).format('dddd')}</Text>
                    <Text style = {style.temp}>Night : {Math.trunc(gabi.temp.night)}&#176;C</Text>           
                    <Text style = {style.temp}>Day : {Math.trunc(sinag.temp.day)}&#176;C</Text>                                      
                </View>
            </View>
    )
    }

const style = StyleSheet.create({
    img: {
        width: 150,
        height: 150
    },
    scrollView: {
        flex: 0.4,
        backgroundColor: '#18181bcc',
        paddingTop: 10,
        paddingLeft: 10,
        padding: 10
    },
    currentTempCont: {
        flexDirection: 'row',
        backgroundColor: '#00000033',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1
    },
    day: {
        fontSize: 20,
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
    otherTempCont: {
        paddingRight: 40
    }
    
})
export default Scrollforecast;
