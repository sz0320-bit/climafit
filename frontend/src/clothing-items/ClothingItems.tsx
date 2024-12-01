import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";
import { WeatherData } from "../App";

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


interface InputParam {
  weatherData: WeatherData;
}

const determineWeatherCondition = (
  temperature: number,
  isDay: number,
  rain: number,
  snowfall: number
) => {
  if (rain > 0) return "rain";
  if (snowfall > 0) return "snow";
  if (temperature < 40) return "cold";
  if (temperature >= 40 && temperature < 60) return "cool";
  if (temperature >= 60 && temperature < 80) return isDay ? "warm" : "cool"; // Warm if daytime
  if (temperature >= 80) return "hot";
  return "unknown"; // Fallback in case of unhandled scenarios
};

const filterClothingItems = (
  temperature: number,
  isDay: number,
  rain: number,
  snowfall: number,
  typeFilter?: string,
  colorPreference?: string[]
) => {
  // Determine the weather condition dynamically
  const weatherCondition = determineWeatherCondition(
    temperature,
    isDay,
    rain,
    snowfall
  );

  // Filter clothing items based on the determined weather condition
  return clothingItems.filter((item) => {
    const matchesTemp =
      temperature >= item.minTemp && temperature <= item.maxTemp;
    const matchesWeather = item.suitableWeather.includes(weatherCondition);

    // Type and color matches are optional (default to true if not specified)
    const matchesType =
      !typeFilter || typeFilter === "All" || item.type === typeFilter;
    const matchesColor = colorPreference.length
      ? colorPreference
          .map((color) => color.toLowerCase())
          .includes(item.color.toLowerCase())
      : true;
    console.log(matchesColor, colorPreference);

    // Only return items if they match temperature and weather (type and color are optional)
    return matchesTemp && matchesWeather && matchesType && matchesColor;
  });
};

// React Component
const ClothingItemDisplay: React.FC<InputParam> = (properties: InputParam) => {
  const [weatherData] = useState<WeatherData>(properties.weatherData);
  const [temperature, setTemperature] = useState<number>(
    weatherData?.temperature_2m ?? 40
  );
  const [weatherType, setWeatherType] = useState<string>("cold");
  const [typeFilter, setTypeFilter] = useState<string | undefined>("All");
  const [colorPreference, setColorPreference] = useState<string[]>([]);

  const filteredItems = filterClothingItems(
    temperature,
    parseInt(weatherData?.time),
    weatherData?.rain,
    weatherData?.snowfall,
    typeFilter,
    colorPreference
  );
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
    const weatherCondition = determineWeatherCondition(
      temperature,
      parseInt(weatherData?.time),
      weatherData?.rain,
      weatherData?.snowfall
    );

    console.log(weatherCondition);

    setWeatherType(weatherCondition);

    console.log(filteredItems, weatherData);
  });

  useEffect(() => {
    if (colorPreference.length === 1 && colorPreference[0] === "") {
      setColorPreference([]);
    }
  }, [colorPreference]);

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setColorPreference(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="ClothingItemDisplay" style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Filter Clothing Items
      </Typography>
      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Temperature (°F)"
            type="number"
            fullWidth
            value={temperature}
            onChange={(e) => setTemperature(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            select
            label="Weather Type"
            fullWidth
            value={weatherType}
            onChange={(e) => setWeatherType(e.target.value)}
          >
            <MenuItem value="cold">Cold</MenuItem>
            <MenuItem value="cool">Cool</MenuItem>
            <MenuItem value="hot">Hot</MenuItem>
            <MenuItem value="rain">Rain</MenuItem>
            <MenuItem value="snow">Snow</MenuItem>
            <MenuItem value="warm">Warm</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            select
            label="Type"
            fullWidth
            value={typeFilter || ""}
            onChange={(e) => setTypeFilter(e.target.value || undefined)}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="hat">Hat</MenuItem>
            <MenuItem value="top">Top</MenuItem>
            <MenuItem value="bottom">Bottom</MenuItem>
            <MenuItem value="shoes">Shoes</MenuItem>
            <MenuItem value="accessory">Accessory</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-name-label">Color Preference</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              //@ts-expect-error random value error.
              value={colorPreference}
              fullWidth
              onChange={handleChange}
              input={<OutlinedInput label="Color Preference" />}
              >
              {availableColors.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {filteredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              {/* <CardMedia
                component="img"
                height="140"
                image={item.imageLink}
                alt={item.name}
              /> */}
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Brand: {item.brand}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Type: {item.type}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Color: {item.color}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Temp Range: {item.minTemp}°F - {item.maxTemp}°F
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Weather: {item.suitableWeather.join(", ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ClothingItemDisplay;
