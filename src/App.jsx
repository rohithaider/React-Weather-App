import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherProvider,FavoriteProvider, LocationProvider} from "./provider";

export default function App(){
    return (
      //making available the data to the all the components.
      <WeatherProvider>
        <FavoriteProvider>
          <LocationProvider>
          
      <div className="grid place-items-center h-screen space-y-20">
      <Header/>
      <main>
        <section>
          <WeatherBoard/>
        </section>
      </main>
      </div>
      </LocationProvider>
      </FavoriteProvider>
      </WeatherProvider>
        
    );
}