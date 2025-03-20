import { arrayUnion, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
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
    { name: 'tournament', value: tournamentId },
    { orderBy: ['name', 'asc'] }
  );

  const tournament = await tournamentService.getById(result[0].tournament.id);

  for (let index = 0; index < result.length; index++) {
    result[index].participants = await participantService.getByIds(result[index].participants.map(p => p.id));

    if (result[index].advantages) {
      result[index].advantages = await participantService.getByIds(result[index].advantages?.map(p => p.id));
    }

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
      group.participants[j] = { ...group.participants[j], ...statisticService.calculateForPlayer(group.results, group.participants[j], group.advantages) };
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
      isHomeDQ: result.isHomeDQ,
      away: away.id,
      awayScore: result.awayScore,
      awayName: `${away.firstName} ${away.lastName}`,
      isAwayDQ: result.isAwayDQ
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
      isHomeDQ: result.isAwayDQ,
      away: home.id,
      awayScore: result.homeScore,
      awayName: `${home.firstName} ${home.lastName}`,
      isAwayDQ: result.isHomeDQ
    };
  }

  return {
    home: home.id,
    homeName: `${home.firstName} ${home.lastName}`,
    away: away.id,
    awayName: `${away.firstName} ${away.lastName}`
  };
}

function getFinishedResults (groups, search) {
  const results = [];

  groups.forEach(group => {
    results.push(...group.results.filter(g => g.homeScore !== undefined && contains(g, search)));
  });

  return results;
}

function getPendingResults (groups, search) {
  const results = [];

  groups.forEach(group => {
    results.push(...group.results
      .filter(r => r.homeScore === undefined && contains(r, search))
      .map(r => (({ ...r, groupId: group.id }))));
  });

  return results;
}

function contains (item, text) {
  if (!text) return true;

  if (item.awayName.toLowerCase().includes(text.toLowerCase()) || item.homeName.toLowerCase().includes(text.toLowerCase())) {
    return true;
  }
  return false;
}

async function saveResult (result) {
  const database = getFirestore();

  const resultToUpdate = {
    home: doc(collection(database, COLLECTIONS.PARTICIPANTS), result.home),
    away: doc(collection(database, COLLECTIONS.PARTICIPANTS), result.away),
    homeScore: parseInt(result.homeScore),
    awayScore: parseInt(result.awayScore)
  };

  const reference = doc(collection(database, COLLECTIONS.GROUPS), result.groupId);
  await updateDoc(reference, { results: arrayUnion(resultToUpdate) });
}

export const groupService = {
  get,
  getFinishedResults,
  getPendingResults,
  saveResult
};
