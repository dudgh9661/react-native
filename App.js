import { StatusBar } from 'expo-status-bar'; 
import {Alert} from "react-native";
import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "c1785b1e4d1c5a2e27104318dd39c414";


export default class extends React.Component {
  state = {
    isLoading : true
  };

  getweather = async(latitude, longitude) => {
    const {data : {main : {temp},
            weather
   } } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({ isLoading : false, temp, condition : weather[0].main });
  };

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords : { latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getweather(latitude, longitude);
      
    } catch(error){
      Alert.alert("Can`t find you","So sad");
    }
    
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition }= this.state;
     return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}

 