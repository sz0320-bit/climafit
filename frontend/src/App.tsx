import React from "react";
import "./App.css";
import TopMenu from "./core/TopMenu/TopMenu";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";
import axios from "axios";
import ClothingItemDisplay from "./clothing-items/ClothingItems";

interface Location {
  latitude: number;
  longitude: number;
}

export interface WeatherData {
  time: string; // ISO 8601 formatted date string
  interval: number; // Interval in seconds (900 here represents 15 minutes)
  temperature_2m: number; // Temperature in degrees Celsius
  rain: number; // Rain volume in mm
  showers: number; // Showers volume in mm
  snowfall: number; // Snowfall volume in mm
  wind_speed_10m: number; // Wind speed in meters per second at 10 meters height
}

// Create a custom theme
const theme = createTheme({
  palette: {
    mode: "dark", // This enables the dark theme
    primary: {
      main: "#3ecf8e", // Your custom green color
    },
    background: {
      default: grey[900], // Main background color (gray)
      paper: grey[800], // Optional: paper background if you want different for cards, etc.
    },
    text: {
      primary: "#ffffff", // White text
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Customize your font here
  },
});

function App() {
  const [location, setLocation] = React.useState<null | Location>(null);
  const [weatherData, setWeatherData] = React.useState<null | WeatherData>(
    null
  );
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (e) => {
          setError(e.message);
          console.log(error);
          
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  React.useEffect(() => {
    if (location) {
      axios({
        method: "get",
        url: `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,is_day,rain,showers,snowfall,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=ms`,
        responseType: "stream",
      })
        .then((res) => {
          console.log(JSON.parse(res.data));
          setWeatherData(JSON.parse(res.data).current);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <>
        <div className="w-full">
          <TopMenu></TopMenu>
        </div>

        <div className="w-full flex  h-full border-white flex-col">
          <div>
            {weatherData ? (
              <div className="w-full h-full">
                <ClothingItemDisplay
                  weatherData={weatherData}
                ></ClothingItemDisplay>
              </div>
            ) : (
              <div className="w-full h-full justify-center items-center p-3">{"Could Not Load Weather Info"}</div>
            )}
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
