import clear from '../_assets/animations/clear.json';
import clearNight from '../_assets/animations/clear_night.json';
import cloudy from '../_assets/animations/cloudy.json';
import cloudyNight from '../_assets/animations/cloudy_night.json';
import rain from '../_assets/animations/rain.json';
import rainNight from '../_assets/animations/rain_night.json';
import shower from '../_assets/animations/shower.json';
import showerNight from '../_assets/animations/shower_night.json';
import thunderstorm from '../_assets/animations/thunderstorm.json';
import thunderstormNight from '../_assets/animations/thunderstorm_night.json';

export const wmoCodes = {
    0: {description: 'Clear sky', dayAnimation: clear, nightAnimation: clearNight},
    1: {description: 'Mainly clear', dayAnimation: clear, nightAnimation: clearNight},
    2: {description: 'Partly cloudy', dayAnimation: cloudy, nightAnimation: cloudyNight},
    3: {description: 'Overcast', dayAnimation: cloudy, nightAnimation: cloudyNight},
    45: {description: 'Fog', dayAnimation: clear, nightAnimation: clearNight},
    48: {description: 'Rime fog', dayAnimation: clear, nightAnimation: clearNight},
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
    71: {description: 'Light snow', dayAnimation: clear, nightAnimation: clearNight},
    73: {description: 'Snow', dayAnimation: clear, nightAnimation: clearNight},
    75: {description: 'Heavy snow', dayAnimation: clear, nightAnimation: clearNight},
    77: {description: 'Snow grains', dayAnimation: clear, nightAnimation: clearNight},
    80: {description: 'Light rain showers', dayAnimation: shower, nightAnimation: showerNight},
    81: {description: 'Rain showers', dayAnimation: shower, nightAnimation: showerNight},
    82: {description: 'Heavy rain showers', dayAnimation: shower, nightAnimation: showerNight},
    85: {description: 'Light snow showers', dayAnimation: shower, nightAnimation: showerNight},
    86: {description: 'Snow showers', dayAnimation: clear, nightAnimation: clearNight},
    95: {description: 'Thunderstorm', dayAnimation: thunderstorm, nightAnimation: thunderstormNight},
};

export type WmoCode = keyof typeof wmoCodes;

export const getClassName = (wmoCode: number, isDay: number) => {
    const timeOfDay = isDay ? 'day' : 'night';
    return `${wmoCode}---${timeOfDay}`;
}