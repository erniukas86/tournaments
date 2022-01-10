import { COLLECTIONS } from '../constants/collections';
import { firebaseService } from './firebase';

async function getByIds (ids) {
  const result = await firebaseService.get(COLLECTIONS.PARTICIPANTS);
  return result.filter(r => ids.includes(r.id));
}

export const participantService = {
  getByIds
};
