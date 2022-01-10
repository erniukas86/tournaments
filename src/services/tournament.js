import { COLLECTIONS } from '../constants/collections';
import { firebaseService } from './firebase';

async function getAll () {
  const result = await firebaseService.get(COLLECTIONS.TOURNAMENTS, { orderBy: ['startDate', 'desc'] });
  return result;
}

async function getById (id) {
  const result = await firebaseService.getById(COLLECTIONS.TOURNAMENTS, id);
  return result;
}

export const tournamentService = {
  getAll,
  getById
};
