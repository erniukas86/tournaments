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
      group.participants[j] = { ...group.participants[j], ...statisticService.calculateForPlayer(group.results, group.participants[j]) };
    }

    group.participants.sort((a, b) => b.order - a.order);
  }
}

function createMissingResults (group) {
  const pairedParticipants = arrayService.getUniquePairs(group.participants);
  group.results = pairedParticipants.map(([home, away]) =>
    (getResult(home, away, group.results || [])));
}

function getResult (home, away, results) {
  let result = results.find(result =>
    (result.home.id === home.id &&
      result.away.id === away.id));

  if (result) {
    return {
      home: home.id,
      homeScore: result.homeScore,
      homeName: `${home.firstName} ${home.lastName}`,
      away: away.id,
      awayScore: result.awayScore,
      awayName: `${away.firstName} ${away.lastName}`
    };
  }

  result = results.find(result =>
    (result.away.id === home.id &&
      result.home.id === away.id));

  if (result) {
    return {
      home: away.id,
      homeScore: result.awayScore,
      homeName: `${away.firstName} ${away.lastName}`,
      away: home.id,
      awayScore: result.homeScore,
      awayName: `${home.firstName} ${home.lastName}`
    };
  }

  return {
    home: home.id,
    homeName: `${home.firstName} ${home.lastName}`,
    away: away.id,
    awayName: `${away.firstName} ${away.lastName}`
  };
}

function getFinishedResults (groups) {
  const results = [];

  groups.forEach(group => {
    results.push(...group.results.filter(g => g.homeScore !== undefined));
  });

  return results;
}

function getPendingResults (groups) {
  const results = [];

  groups.forEach(group => {
    results.push(...group.results.filter(g => g.homeScore === undefined));
  });

  return results;
}

export const groupService = {
  get,
  getFinishedResults,
  getPendingResults
};
