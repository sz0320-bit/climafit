import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, TextField, MenuItem, OutlinedInput, Select, FormControl, InputLabel, } from "@mui/material";
// Clothing items data
const clothingItems = [
    {
        id: 1,
        name: "Adidas Track Pants",
        brand: "Adidas",
        type: "bottom",
        minTemp: 40,
        maxTemp: 70,
        color: "Black",
        suitableWeather: ["cool", "cloudy"],
        imageLink: "https://example.com/adidas-track-pants.jpg",
    },
    {
        id: 2,
        name: "Nike Dri-FIT Shirt",
        brand: "Nike",
        type: "top",
        minTemp: 60,
        maxTemp: 100,
        color: "White",
        suitableWeather: ["warm", "hot"],
        imageLink: "https://example.com/nike-dri-fit-shirt.jpg",
    },
    {
        id: 3,
        name: "Carhartt Jacket",
        brand: "Carhartt",
        type: "top",
        minTemp: 20,
        maxTemp: 50,
        color: "Brown",
        suitableWeather: ["cold", "snow"],
        imageLink: "https://example.com/carhartt-jacket.jpg",
    },
    {
        id: 4,
        name: "Timberland Boots",
        brand: "Timberland",
        type: "shoes",
        minTemp: 10,
        maxTemp: 60,
        color: "Tan",
        suitableWeather: ["cold", "snow", "rain"],
        imageLink: "https://example.com/timberland-boots.jpg",
    },
    {
        id: 5,
        name: "Under Armour Cap",
        brand: "Under Armour",
        type: "hat",
        minTemp: 50,
        maxTemp: 100,
        color: "Blue",
        suitableWeather: ["warm"],
        imageLink: "https://example.com/under-armour-cap.jpg",
    },
    {
        id: 6,
        name: "Levi's 501 Jeans",
        brand: "Levi's",
        type: "bottom",
        minTemp: 40,
        maxTemp: 80,
        color: "Blue",
        suitableWeather: ["cool", "cloudy", "warm"],
        imageLink: "https://example.com/levis-501-jeans.jpg",
    },
    {
        id: 7,
        name: "North Face Down Jacket",
        brand: "The North Face",
        type: "top",
        minTemp: -10,
        maxTemp: 40,
        color: "Black",
        suitableWeather: ["cold", "snow"],
        imageLink: "https://example.com/north-face-down-jacket.jpg",
    },
    {
        id: 8,
        name: "Columbia Waterproof Pants",
        brand: "Columbia",
        type: "bottom",
        minTemp: 30,
        maxTemp: 60,
        color: "Gray",
        suitableWeather: ["rain", "cold"],
        imageLink: "https://example.com/columbia-waterproof-pants.jpg",
    },
    {
        id: 9,
        name: "Patagonia Nano Puff Jacket",
        brand: "Patagonia",
        type: "top",
        minTemp: 30,
        maxTemp: 50,
        color: "Green",
        suitableWeather: ["cold", "windy"],
        imageLink: "https://example.com/patagonia-nano-puff.jpg",
    },
    {
        id: 10,
        name: "Ray-Ban Aviator Sunglasses",
        brand: "Ray-Ban",
        type: "accessory",
        minTemp: 50,
        maxTemp: 100,
        color: "Gold",
        suitableWeather: ["sunny"],
        imageLink: "https://example.com/ray-ban-aviator.jpg",
    },
    {
        id: 11,
        name: "Hanes Thermal Shirt",
        brand: "Hanes",
        type: "top",
        minTemp: 20,
        maxTemp: 40,
        color: "White",
        suitableWeather: ["cold"],
        imageLink: "https://example.com/hanes-thermal-shirt.jpg",
    },
    {
        id: 12,
        name: "Sorel Snow Boots",
        brand: "Sorel",
        type: "shoes",
        minTemp: -10,
        maxTemp: 30,
        color: "Brown",
        suitableWeather: ["snow", "cold"],
        imageLink: "https://example.com/sorel-snow-boots.jpg",
    },
    {
        id: 13,
        name: "Converse Chuck Taylor Sneakers",
        brand: "Converse",
        type: "shoes",
        minTemp: 60,
        maxTemp: 100,
        color: "White",
        suitableWeather: ["warm", "hot"],
        imageLink: "https://example.com/converse-chuck-taylor.jpg",
    },
    {
        id: 14,
        name: "Puma Athletic Shorts",
        brand: "Puma",
        type: "bottom",
        minTemp: 70,
        maxTemp: 100,
        color: "Black",
        suitableWeather: ["hot"],
        imageLink: "https://example.com/puma-athletic-shorts.jpg",
    },
    {
        id: 15,
        name: "H&M Linen Shirt",
        brand: "H&M",
        type: "top",
        minTemp: 70,
        maxTemp: 100,
        color: "Beige",
        suitableWeather: ["warm", "hot"],
        imageLink: "https://example.com/hm-linen-shirt.jpg",
    },
    {
        id: 16,
        name: "Gucci Scarf",
        brand: "Gucci",
        type: "accessory",
        minTemp: 20,
        maxTemp: 50,
        color: "Red",
        suitableWeather: ["cold", "windy"],
        imageLink: "https://example.com/gucci-scarf.jpg",
    },
    {
        id: 17,
        name: "Gap Windbreaker",
        brand: "Gap",
        type: "top",
        minTemp: 50,
        maxTemp: 70,
        color: "Blue",
        suitableWeather: ["cool", "windy"],
        imageLink: "https://example.com/gap-windbreaker.jpg",
    },
    {
        id: 18,
        name: "Nike Zoom Running Shoes",
        brand: "Nike",
        type: "shoes",
        minTemp: 60,
        maxTemp: 100,
        color: "Black",
        suitableWeather: ["warm", "hot"],
        imageLink: "https://example.com/nike-zoom-running-shoes.jpg",
    },
    {
        id: 19,
        name: "Adidas Hoodie",
        brand: "Adidas",
        type: "top",
        minTemp: 40,
        maxTemp: 60,
        color: "Gray",
        suitableWeather: ["cool", "cloudy"],
        imageLink: "https://example.com/adidas-hoodie.jpg",
    },
    {
        id: 20,
        name: "Uniqlo Heattech Leggings",
        brand: "Uniqlo",
        type: "bottom",
        minTemp: 20,
        maxTemp: 50,
        color: "Black",
        suitableWeather: ["cold"],
        imageLink: "https://example.com/uniqlo-heattech-leggings.jpg",
    },
    {
        id: 21,
        name: "Zara Lightweight Blazer",
        brand: "Zara",
        type: "top",
        minTemp: 60,
        maxTemp: 80,
        color: "Navy",
        suitableWeather: ["warm", "cloudy"],
        imageLink: "https://example.com/zara-lightweight-blazer.jpg",
    },
    {
        id: 22,
        name: "Champion Sweatpants",
        brand: "Champion",
        type: "bottom",
        minTemp: 40,
        maxTemp: 70,
        color: "Gray",
        suitableWeather: ["cool", "cloudy"],
        imageLink: "https://example.com/champion-sweatpants.jpg",
    },
    {
        id: 23,
        name: "Vans Slip-On Shoes",
        brand: "Vans",
        type: "shoes",
        minTemp: 60,
        maxTemp: 100,
        color: "Black",
        suitableWeather: ["warm", "hot"],
        imageLink: "https://example.com/vans-slip-on.jpg",
    },
    {
        id: 24,
        name: "Herschel Backpack",
        brand: "Herschel",
        type: "accessory",
        minTemp: 50,
        maxTemp: 100,
        color: "Black",
        suitableWeather: ["sunny", "warm"],
        imageLink: "https://example.com/herschel-backpack.jpg",
    },
];
const determineWeatherCondition = (temperature, isDay, rain, snowfall) => {
    if (rain > 0)
        return "rain";
    if (snowfall > 0)
        return "snow";
    if (temperature < 40)
        return "cold";
    if (temperature >= 40 && temperature < 60)
        return "cool";
    if (temperature >= 60 && temperature < 80)
        return isDay ? "warm" : "cool"; // Warm if daytime
    if (temperature >= 80)
        return "hot";
    return "unknown"; // Fallback in case of unhandled scenarios
};
const filterClothingItems = (data, temperature, isDay, rain, snowfall, typeFilter, colorPreference) => {
    // Determine the weather condition dynamically
    const weatherCondition = determineWeatherCondition(temperature, isDay, rain, snowfall);
    // Filter clothing items based on the determined weather condition
    return data.filter((item) => {
        const matchesTemp = temperature >= item.minTemp && temperature <= item.maxTemp;
        const matchesWeather = item.suitableWeather.includes(weatherCondition);
        // Type and color matches are optional (default to true if not specified)
        const matchesType = !typeFilter || typeFilter === "All" || item.type === typeFilter;
        //@ts-ignore
        const matchesColor = colorPreference.length ? colorPreference
            .map((color) => color.toLowerCase())
            .includes(item.color.toLowerCase())
            : true;
        console.log(matchesColor, colorPreference);
        // Only return items if they match temperature and weather (type and color are optional)
        return matchesTemp && matchesWeather && matchesType && matchesColor;
    });
};
// React Component
const ClothingItemDisplay = (properties) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://climafit-mr1x.vercel.app/clothing-items');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    const [weatherData] = useState(properties.weatherData);
    const [temperature, setTemperature] = useState(weatherData?.temperature_2m ?? 40);
    const [weatherType, setWeatherType] = useState("cold");
    const [typeFilter, setTypeFilter] = useState("All");
    const [colorPreference, setColorPreference] = useState([]);
    const filteredItems = filterClothingItems(data, temperature, parseInt(weatherData?.time), weatherData?.rain, weatherData?.snowfall, typeFilter, colorPreference);
    const availableColors = [
        "Black",
        "Brown",
        "Blue",
        "Red",
        "White",
        "Yellow",
        "Green",
        "Tan",
    ]; // Available options
    useEffect(() => {
        const weatherCondition = determineWeatherCondition(temperature, parseInt(weatherData?.time), weatherData?.rain, weatherData?.snowfall);
        console.log(weatherCondition);
        setWeatherType(weatherCondition);
        console.log(filteredItems, weatherData);
    });
    useEffect(() => {
        if (colorPreference.length === 1 && colorPreference[0] === "") {
            setColorPreference([]);
        }
    }, [colorPreference]);
    const handleChange = (event) => {
        const { target: { value }, } = event;
        setColorPreference(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value);
    };
    return (_jsxs("div", { className: "ClothingItemDisplay", style: { padding: "20px" }, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Filter Clothing Items" }), _jsxs(Grid, { container: true, spacing: 2, style: { marginBottom: "20px" }, children: [_jsx(Grid, { item: true, xs: 12, sm: 3, children: _jsx(TextField, { label: "Temperature (\u00B0F)", type: "number", fullWidth: true, value: temperature, onChange: (e) => setTemperature(Number(e.target.value)) }) }), _jsx(Grid, { item: true, xs: 12, sm: 3, children: _jsxs(TextField, { select: true, label: "Weather Type", fullWidth: true, value: weatherType, onChange: (e) => setWeatherType(e.target.value), children: [_jsx(MenuItem, { value: "cold", children: "Cold" }), _jsx(MenuItem, { value: "cool", children: "Cool" }), _jsx(MenuItem, { value: "hot", children: "Hot" }), _jsx(MenuItem, { value: "rain", children: "Rain" }), _jsx(MenuItem, { value: "snow", children: "Snow" }), _jsx(MenuItem, { value: "warm", children: "Warm" })] }) }), _jsx(Grid, { item: true, xs: 12, sm: 3, children: _jsxs(TextField, { select: true, label: "Type", fullWidth: true, value: typeFilter || "", onChange: (e) => setTypeFilter(e.target.value || undefined), children: [_jsx(MenuItem, { value: "All", children: "All" }), _jsx(MenuItem, { value: "hat", children: "Hat" }), _jsx(MenuItem, { value: "top", children: "Top" }), _jsx(MenuItem, { value: "bottom", children: "Bottom" }), _jsx(MenuItem, { value: "shoes", children: "Shoes" }), _jsx(MenuItem, { value: "accessory", children: "Accessory" })] }) }), _jsx(Grid, { item: true, xs: 12, sm: 3, children: _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { id: "demo-multiple-name-label", children: "Color Preference" }), _jsx(Select, { labelId: "demo-multiple-name-label", id: "demo-multiple-name", multiple: true, 
                                    //@ts-expect-error random value error.
                                    value: colorPreference, fullWidth: true, onChange: handleChange, input: _jsx(OutlinedInput, { label: "Color Preference" }), children: availableColors.map((name) => (_jsx(MenuItem, { value: name, children: name }, name))) })] }) })] }), _jsx(Grid, { container: true, spacing: 4, children: filteredItems.map((item) => (_jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, children: _jsx(Card, { children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", children: item.name }), _jsxs(Typography, { variant: "body2", color: "textSecondary", children: ["Brand: ", item.brand] }), _jsxs(Typography, { variant: "body2", color: "textSecondary", children: ["Type: ", item.type] }), _jsxs(Typography, { variant: "body2", color: "textSecondary", children: ["Color: ", item.color] }), _jsxs(Typography, { variant: "body2", color: "textSecondary", children: ["Temp Range: ", item.minTemp, "\u00B0F - ", item.maxTemp, "\u00B0F"] }), _jsxs(Typography, { variant: "body2", color: "textSecondary", children: ["Weather: ", item.suitableWeather.join(", ")] })] }) }) }, item.id))) })] }));
};
export default ClothingItemDisplay;
