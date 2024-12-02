import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import "./App.css";
import TopMenu from "./core/TopMenu/TopMenu";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";
import axios from "axios";
import ClothingItemDisplay from "./clothing-items/ClothingItems";
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
    const [location, setLocation] = React.useState(null);
    const [weatherData, setWeatherData] = React.useState(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            }, (e) => {
                setError(e.message);
                console.log(error);
            });
        }
        else {
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
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, { enableColorScheme: true }), _jsxs(_Fragment, { children: [_jsx("div", { className: "w-full", children: _jsx(TopMenu, {}) }), _jsx("div", { className: "w-full flex  h-full border-white flex-col", children: _jsx("div", { children: weatherData ? (_jsx("div", { className: "w-full h-full", children: _jsx(ClothingItemDisplay, { weatherData: weatherData }) })) : (_jsx("div", { className: "w-full h-full justify-center items-center p-3", children: "Could Not Load Weather Info" })) }) })] })] }));
}
export default App;
