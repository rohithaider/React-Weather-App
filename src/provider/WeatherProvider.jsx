/* eslint-disable react/prop-types */
import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

const WeatherProvider = ({children})=>{
    const{weatherData,error,loading} = useWeather();
    return(
        <WeatherContext.Provider value={{weatherData,loading,error}}>
            {children}

        </WeatherContext.Provider>
    )
}

export default WeatherProvider;