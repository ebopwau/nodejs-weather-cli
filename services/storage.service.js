import { homedir } from 'os';
import {
  join, basename, extname, relative, dirname, isAbsolute, resolve, sep,
} from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), '/weather-data.json');

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (e) {
    return false;
  }
};

export const KEYS = {
  token: 'token',
  city: 'city',
};

export const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  }

  return undefined;
};

export const saveKeyValue = async (key, value) => {
  let data = {};

  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  }

  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};
