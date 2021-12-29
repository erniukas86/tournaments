import { firebaseService } from './firebase';

async function login (userName, password) {
  const result = await firebaseService.login(userName, password);
  return result;
}

export const userService = {
  login
};
