import { LOCAL_STORAGE_KEYS } from '../../constants/localStorageKeys';

function set (accessToken, email) {
  localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
  localStorage.setItem(LOCAL_STORAGE_KEYS.EMAIL, email);
}

function get () {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

  if (accessToken) {
    return {
      accessToken,
      email: localStorage.getItem(LOCAL_STORAGE_KEYS.EMAIL)
    };
  }
}

function clear () {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(LOCAL_STORAGE_KEYS.EMAIL);
}

export const persistUserService = {
  get,
  set,
  clear
};
