/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from "react";
const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  // creating this loading for making it true when api is calling
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  //state for maintaining error
  const [error, setError] = useState(null);

  //main function for api calling

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data",
      });

      //fetch call
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      //if no proper response comes then throw error
      if (!response.ok) {
        //response.ok gets from the fetch call
        const errorMessage = `Fetching weather data failed:${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json(); //getting the data out from the fetch promise

      //mapped weather data by specific selection with optional chaining
      const updatedWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude, //longitude and latitude are already coming from the fetchWeatherData's Parameter
      };

      //setting the weather data with the updateWeatherData
      setWeatherData(updatedWeatherData);

    } catch (err) {
      setError(err);
    } finally {
      //calling in the finally because it is guaranteed to be executed after try or catch block
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  //running the useEffect for only one time
  useEffect(()=>{
    setLoading({
        loading:true,
        message:"Finding location....."
    });

    navigator.geolocation.getCurrentPosition(function(position){
        fetchWeatherData(position.coords.latitude,position.coords.longitude)
    })

  },[]);

  return{
    weatherData,error,loading
  }

};

export default useWeather;
