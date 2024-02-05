import { identity, toInteger, toNumber } from 'lodash/fp';

export const getValue = <T>(
  key: string,
  fallbackValue: T,
  format: (value: string) => T,
  envVariables = process.env
): T => {
  const value = envVariables[key];

  return value === undefined || value === '' ? fallbackValue : format(value);
};

export const toBoolean = (value: string) =>
  value === 'true' || value === '1' || value === 'on' || false;

export const getString = (key: string, fallbackValue?: string) =>
  getValue(key, fallbackValue, identity);

export const getBoolean = (key: string, fallbackValue?: boolean) =>
  getValue(key, fallbackValue, toBoolean);

export const getInteger = (key: string, fallbackValue?: number) =>
  getValue(key, fallbackValue, toInteger);

export const getNumber = (key: string, fallbackValue?: number) =>
  getValue(key, fallbackValue, toNumber);

export const getStringList = (
  key: string,
  fallbackValue?: string[],
  seperator = ','
) => getValue(key, fallbackValue, (value) => value.split(seperator));

export const getPrefix = (key: string) => `APP_${key}`;
