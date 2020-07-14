import { StatusBar } from 'expo-status-bar'; 
import {Alert} from "react-native";
import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "c1785b1e4d1c5a2e27104318dd39c414";


export default class extends React.Component {
  state = {
    isLoading : true
  };

  getweather = async(latitude, longitude) => {
    const {data} = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data);
  }
  
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords : { latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getweather(latitude, longitude);
      this.setState({ isLoading : false });
    } catch(error){
      Alert.alert("Can`t find you","So sad");
    }
    
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading }= this.state;
     return isLoading ? <Loading /> : null;
  }
}

 