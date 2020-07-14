import React from "react";
import {StyleSheet, Text, View} from "react-native";

const API_KEY = "c1785b1e4d1c5a2e27104318dd39c414";
export default function Loading() {
    return <View style={styles.container}>
        <Text style={styles.text}>Getting weather</Text>
    </View>;
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent:"flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor:"#FDF6AA"
    },
    text : {
        color : "#2c2c2c",
        fontSize:30
    }
});