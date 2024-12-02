import "./App.css";
export interface WeatherData {
    time: string;
    interval: number;
    temperature_2m: number;
    rain: number;
    showers: number;
    snowfall: number;
    wind_speed_10m: number;
}
declare function App(): import("react/jsx-runtime").JSX.Element;
export default App;
