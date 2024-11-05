import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherProvider } from "./provider";

export default function App(){
    return (
      <WeatherProvider>
      <div className="grid place-items-center h-screen space-y-20">
      <Header/>
      <main>
        <section>
          <WeatherBoard/>
        </section>
      </main>
      </div>
      </WeatherProvider>
        
    );
}