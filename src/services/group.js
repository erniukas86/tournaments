import { COLLECTIONS } from '../constants/collections';
import { arrayService } from './array';
import { firebaseService } from './firebase';
import { participantService } from './participant';
import { statisticService } from './statistic';
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

  formGroups(result);

  return result;
}

export function formGroups (groups) {
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    createMissingResults(group);

    for (let j = 0; j < group.participants.length; j++) {
      const participant = group.participants[j];
      participant.stats = statisticService.calculateForPlayer(group.results, participant);
    }
  }
}

function createMissingResults (group) {
  const pairedParticipants = arrayService.getUniquePairs(group.participants);

  // const results = [...group.results];

  group.results = pairedParticipants.map(([home, away]) => ({
    home: home.id,
    homeName: `${home.firstName} ${home.lastName}`,
    away: away.id,
    awayName: `${away.firstName} ${away.lastName}`
  }));
}

export const groupService = {
  get
};
