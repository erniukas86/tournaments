import { DEFAULT_LOCALE } from './config';

const LOCALE_KEY = 'locale';

function get () {
  return localStorage.getItem(LOCALE_KEY) || DEFAULT_LOCALE;
}

function set (locale) {
  return localStorage.setItem(LOCALE_KEY, locale);
}

export const localeService = {
  get,
  set
};
