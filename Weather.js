import React from "react";
import {StyleSheet, View, Text } from "react-native"
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
   Thunderstorm: {
     iconName: "weather-lightning",
     gradient: ["#373B44", "#4286f4"],
     title: "천둥번개가 칩니다.",
     subtitle: "겁먹지 마세요."
   },
   Drizzle: {
     iconName: "weather-hail",
     gradient: ["#89F7FE", "#66A6FF"],
     title: "Drizzle",
     subtitle: "Is like rain, but gay 🏳️‍🌈"
   },
   Rain: {
     iconName: "weather-rainy",
     gradient: ["#00C6FB", "#005BEA"],
     title: "비가 옵니다.",
     subtitle: "나갈 때 우산 잊지 마세요."
   },
   Snow: {
     iconName: "weather-snowy",
     gradient: ["#7DE2FC", "#B9B6E5"],
     title: "눈이 옵니다.",
     subtitle: "펑펑이요."
   },
   Atmosphere: {
     iconName: "weather-hail",
     gradient: ["#89F7FE", "#66A6FF"]
   },
   Clear: {
     iconName: "weather-sunny",
     gradient: ["#FF7300", "#FEF253"],
     title: "날씨가 좋네요.",
     subtitle: "밖에 나가 놀아요."
   },
   Clouds: {
     iconName: "weather-cloudy",
     gradient: ["#D7D2CC", "#304352"],
     title: "구름이 꼈습니다.",
     subtitle: "해나 비출 것이지."
   },
   Mist: {
     iconName: "weather-hail",
     gradient: ["#4DA0B0", "#D39D38"],
     title: "Mist!",
     subtitle: "It's like you have no glasses on."
   },
   Dust: {
     iconName: "weather-hail",
     gradient: ["#4DA0B0", "#D39D38"],
     title: "Dusty",
     subtitle: "Thanks a lot China 🖕🏻"
   },
   Haze: {
     iconName: "weather-hail"
   }
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
          colors={weatherOptions["Rain"].gradient}
          style={styles.container}>
        <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions["Rain"].iconName} size={80} color="black" />
        <Text style={styles.temp}>{temp}도</Text>
        </View>
        <View style={styles.halfContainer}>
        <Text style={styles.title}>비가 옵니다.</Text>
        <Text style={styles.subtitle}>나갈 때 우산을 챙기세요.</Text>
        </View>
        
        
        </LinearGradient>
    )

}

Weather.PropTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf(["Thunderstorm", 
    "Drizzle","Rain", "Snow","Atmosphere","Clear","Clouds", "Haze","Mist","Dust"]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex :1,
        justifyContent :"center",
        alignItems: "center"
    },
    temp : {
        fontSize: 20
    },

    halfContainer: {
        flex : 1, 
        justifyContent : "center",
        alignItems : "center"
    },

    title : {
        color: "black",
        fontSize : 50,
        fontWeight : "300",
        marginBottom : 10

    },
    subtitle : {
        color : "black",
        fontWeight : "600",
        fontSize : 24
    }

})