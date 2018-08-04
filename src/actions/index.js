import axios from 'axios';

const API_KEY = '2c494270aa5d7ffd9ca24f2bdb5c4ba7';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}`;
  const request = axios.get(url);

  console.log('request ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
