import { safeLoad, safeDump } from 'js-yaml';

export function setStorage(key, value, format = true) {
  window.localStorage.setItem(key, format || typeof value != 'string' ? safeDump(value) : value);
}

export function getStorage(key, format = true) {
  const value = window.localStorage.getItem(key);
  return format && value ? safeLoad(value) : value;
}
