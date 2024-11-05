import Pin from "../../assets/assets/pin.svg";
import { useContext } from "react";
import { WeatherContext } from "../../context";
import { getFormatDate } from "../../utils/date-util";
//importing icons
import CloudIcon from "../../assets/assets/cloud.svg";
import HazeIcon from "../../assets/assets/haze.svg";
import SnowIcon from "../../assets/assets/icons/snow.svg";
import SunnyIcon from "../../assets/assets/icons/sunny.svg";
import RainyIcon from "../../assets/assets/rainy.svg";
import ThunderIcon from "../../assets/assets/thunder.svg";
export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext); // taking out the weather data value from the context
  const { climate, location, temperature, time } = weatherData;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainyIcon;
      case "Clouds":
        return CloudIcon;
      case "Clear":
        return SunnyIcon;
      case "Snow":
        return SnowIcon;
      case "Thunder":
        return ThunderIcon;
      case "Fog":
        return HazeIcon;
      case "Haze":
        return HazeIcon;
      case "Mist":
        return HazeIcon;
	default:
		return SunnyIcon;
    }
  }
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)}alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={Pin} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormatDate(time, "time", false)}-
        {getFormatDate(time, "date", false)}
      </p>
    </div>
  );
}
