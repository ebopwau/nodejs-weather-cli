#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getKeyValue, KEYS, saveKeyValue } from './services/storage.service.js';
import {
  printError, printHelp, printSuccess, printWeather,
} from './services/log.service.js';
import { getWeather } from './services/api.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('No token!');
    return;
  }

  try {
    await saveKeyValue(KEYS.token, token);
    printSuccess('Token saved succesfully!');
  } catch (e) {
    printError(`Error while saving token! ${e}`);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError('No city!');
    return;
  }

  try {
    await saveKeyValue(KEYS.city, city);
    printSuccess('City saved succesfully!');
  } catch (e) {
    printError(`Error while saving city! ${e}`);
  }
};

const getForecast = async (city) => {
  const c = city || await getKeyValue('city');

  if (!c) {
    printError('No city found!');
    return;
  }

  try {
    const { name, weather: [{ description }], main: { temp } } = await getWeather(c);
    printWeather(`Weather in ${name}: Temperature is ${Math.round(temp)} degrees, ${description}.`);
  } catch (e) {
    printError(`Something went wrong! ${e}`);
  }
};

const initCLI = async () => {
  const { CITY } = process.env;
  const { h, s, t } = getArgs(process.argv);

  if (h) {
    printHelp();
    return;
  }

  if (s) {
    await saveCity(s);
  }

  if (t) {
    await saveToken(t);
  }

  getForecast(CITY);
};

initCLI();
