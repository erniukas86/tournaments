import { LOCAL_STORAGE_KEYS } from '../../constants/localStorageKeys';
import { DEFAULT_LOCALE } from '../config';

function get () {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.LOCALE) || DEFAULT_LOCALE;
}

function set (locale) {
  return localStorage.setItem(LOCAL_STORAGE_KEYS.LOCALE, locale);
}

export const persistLocaleService = {
  get,
  set
};
