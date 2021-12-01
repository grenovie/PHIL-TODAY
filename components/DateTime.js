import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment-timezone'


const Items = ({title, value, unit}) => {
    return(
        <View style = {style.itemWeather}>
            <Text style = {style.itemsContainerTitle}>{title}</Text>
            <Text style = {style.itemsContainerTitle}>{value}{unit}</Text>
        </View>
    )
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DateTime = ({current,lat,lon,timezone}) => {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

        useEffect (() => {
            setInterval(() => {
                const time = new Date();
                const month = time.getMonth();
                const date = time.getDate();
                const day = time.getDay();
                const hour = time.getHours();
                const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
                const minutes = time.getMinutes();
                const ampm = hour >=12 ? 'PM' : 'AM'
            
                setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) 
                        + ':' + (minutes < 10? '0'+minutes: minutes)
                        + ' ' + ampm) 
                                    
                setDate(days[day] + ', ' + date+ ' ' + months[month])
            
            }, 1000);
        }, [])
    return (
        <View style = {style.container}>
            <View> 
                <View>
                    <Text style = {style.heading}>{time}</Text>
                </View>
                <View>
                    <Text style = {style.subheading}>{date}</Text>
                </View>
                <View style = {style.itemsContainer}>
                    <Items title='Humidity'  value={current? current.humidity : ""} unit="%" />
                    <Items title='Pressure' value={current? current.pressure : ""} unit="hPA" />
                    <Items title='WindSpeed' value={current? current.wind_speed : ""} unit='KM/s' />
                    <Items title='Sunrise' value={current? moment.tz(current.sunrise * 1000, timezone ).format('HH:mm'): ""} unit="am" />
                    <Items title='Sunset' value={current? moment.tz(current.sunset * 1000, timezone ).format('HH:mm') : ""} unit="pm" />
                </View>
            </View>
            <View style = {style.rightAlign}>
                <Text style = {style.timezone}>{timezone}</Text>
                <Text style = {style.longlat}>{lat} / {lon}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection:  'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    heading: {
        fontSize: 45,
        color: 'white',
        fontWeight: '100'
    },
    subheading:{
        fontSize: 25,
        color: 'white',
        fontWeight: '100'
    },
    rightAlign: {
        textAlign: 'right',
        marginTop: 20
    },
    timezone: {
        fontSize: 20,
        color: 'white'
    },
    longlat: {
        fontSize: 16,
        color: 'white',
        fontWeight: '700'
    },
    itemsContainer: {
        backgroundColor: '#18181b50',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    itemWeather: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemsContainerTitle: {
        fontSize: 14,
        color: 'white',
        fontWeight: '100'
    }
    
})

export default DateTime;
