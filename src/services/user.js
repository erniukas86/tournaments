import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

async function getEmail () {
  const auth = getAuth();
  const result = await signInWithEmailAndPassword(auth, 'erniukas86@gmail.com', 'Ly2gS3UaYzRFz5x');
  return result.user.email;
}

export const userService = {
  getEmail
};
