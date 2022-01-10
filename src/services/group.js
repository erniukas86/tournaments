import { COLLECTIONS } from '../constants/collections';
import { firebaseService } from './firebase';
import { participantService } from './participant';
import { tournamentService } from './tournament';

async function get (tournamentId) {
  const result = await firebaseService.getByReference(
    COLLECTIONS.GROUPS,
    COLLECTIONS.TOURNAMENTS,
    { name: 'tournament', value: tournamentId }
  );

  const tournament = await tournamentService.getById(result[0].tournament.id);

  for (let index = 0; index < result.length; index++) {
    result[index].participants = await participantService.getByIds(result[index].participants.map(p => p.id));
    result[index].tournament = tournament;
  }

  return result;
}

export const groupService = {
  get
};
