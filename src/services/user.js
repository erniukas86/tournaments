import { signInWithEmailAndPassword, getAuth, signInWithCustomToken, signOut } from 'firebase/auth';
import { LOCAL_STORAGE_KEYS } from '../constants/localStorageKeys';
import { persistUserService } from './localStorage/user';

async function login (userName, password) {
  const auth = getAuth();
  const result = await signInWithEmailAndPassword(auth, userName, password);
  const { user } = result;
  persistUserService.set(user.accessToken, user.email);
  return {
    accessToken: user.accessToken,
    email: user.email
  };
}

async function loginWithToken () {
  const auth = getAuth();
  const result = await signInWithCustomToken(auth, localStorage.getItem(LOCAL_STORAGE_KEYS.accessToken));
  const { user } = result;
  persistUserService.set(user.accessToken, user.email);
  return {
    accessToken: user.accessToken,
    email: user.email
  };
}

async function logout () {
  const auth = getAuth();
  await signOut(auth);
  persistUserService.clear();
}

function isLoggedIn () {
  const user = persistUserService.get();

  if (user && user.accessToken) {
    return true;
  }

  return false;
}

export const userService = {
  login,
  loginWithToken,
  isLoggedIn,
  logout
};
