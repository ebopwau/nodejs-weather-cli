import axios from 'axios';
import { getKeyValue, KEYS } from './storage.service.js';

export const getWeather = async (city) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather';
  const token = await getKeyValue(KEYS.token);

  if (!token) {
    throw new Error('No Token was found! Set it using the command -t [API_KEY]');
  }

  const { data } = await axios.get(url, {
    params: {
      q: city,
      appid: token,
      lang: 'en',
      units: 'metric',
    },
  });

  return data;
};
