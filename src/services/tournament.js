import { COLLECTIONS } from '../constants/collections';
import { firebaseService } from './firebase';

async function getAll () {
  const result = await firebaseService.get(COLLECTIONS.TOURNAMENTS, { orderBy: ['startDate', 'desc'] });
  return result;
}

export const tournamentService = {
  getAll
};
