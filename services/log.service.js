import chalk from 'chalk';
import dedent from 'dedent-js';

const {
  bgCyan, bgGreen, bgRed, bgMagenta,
} = chalk;

export const printError = (error) => {
  console.log(`${bgRed(' ERROR ')} ${error}`);
};

export const printSuccess = (message) => {
  console.log(`${bgGreen(' SUCCESS ')} ${message}`);
};

export const printWeather = (message) => {
  console.log(`${bgMagenta(message)}`);
};

export const printHelp = () => {
  console.log(dedent(`
        ${bgCyan(' HELP ')}
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена
    `));
};
