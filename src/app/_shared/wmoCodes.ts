import clear from '../_assets/animations/clear.json';
import clearNight from '../_assets/animations/clear_night.json';
import cloudy from '../_assets/animations/cloudy.json';
import rain from '../_assets/animations/rain.json';
import rainNight from '../_assets/animations/rain_night.json';
import thunderstorm from '../_assets/animations/thunderstorm.json';
import fog from '../_assets/animations/fog.json';
import snow from '../_assets/animations/snow.json';
import partlyCloudy from '../_assets/animations/partly_cloudy.json';
import partlyCloudyNight from '../_assets/animations/partly_cloudy_night.json';

export const wmoCodes = {
    0: {description: 'Clear sky', dayAnimation: clear, nightAnimation: clearNight},
    1: {description: 'Mainly clear', dayAnimation: clear, nightAnimation: clearNight},
    2: {description: 'Partly cloudy', dayAnimation: partlyCloudy, nightAnimation: partlyCloudyNight},
    3: {description: 'Overcast', dayAnimation: cloudy, nightAnimation: cloudy},
    45: {description: 'Fog', dayAnimation: fog, nightAnimation: fog},
    48: {description: 'Rime fog', dayAnimation: fog, nightAnimation: fog},
    51: {description: 'Light drizzle', dayAnimation: rain, nightAnimation: rainNight},
    53: {description: 'Drizzle', dayAnimation: rain, nightAnimation: rainNight},
    55: {description: 'Heavy drizzle', dayAnimation: rain, nightAnimation: rainNight},
    56: {description: 'Light freezing drizzle', dayAnimation: rain, nightAnimation: rainNight},
    57: {description: 'Freezing drizzle', dayAnimation: rain, nightAnimation: rainNight},
    61: {description: 'Slight rain', dayAnimation: rain, nightAnimation: rainNight},
    63: {description: 'Rain', dayAnimation: rain, nightAnimation: rainNight},
    65: {description: 'Heavy rain', dayAnimation: rain, nightAnimation: rainNight},
    66: {description: 'Light freezing rain', dayAnimation: rain, nightAnimation: rainNight},
    67: {description: 'Freezing rain', dayAnimation: rain, nightAnimation: rainNight},
    71: {description: 'Light snow', dayAnimation: snow, nightAnimation: snow},
    73: {description: 'Snow', dayAnimation: snow, nightAnimation: snow},
    75: {description: 'Heavy snow', dayAnimation: snow, nightAnimation: snow},
    77: {description: 'Snow grains', dayAnimation: snow, nightAnimation: snow},
    80: {description: 'Light rain showers', dayAnimation: rain, nightAnimation: rainNight},
    81: {description: 'Rain showers', dayAnimation: rain, nightAnimation: rainNight},
    82: {description: 'Heavy rain showers', dayAnimation: rain, nightAnimation: rainNight},
    85: {description: 'Light snow showers', dayAnimation: snow, nightAnimation: snow},
    86: {description: 'Snow showers', dayAnimation: snow, nightAnimation: snow},
    95: {description: 'Thunderstorm', dayAnimation: thunderstorm, nightAnimation: thunderstorm},
};

export type WmoCode = keyof typeof wmoCodes;

export const getClassName = (wmoCode: number, isDay: number) => {
    const timeOfDay = isDay ? 'day' : 'night';
    return `${wmoCode}---${timeOfDay}`;
}