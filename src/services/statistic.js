function calculateForPlayer (results, participant, advantages) {
  const stats = {
    played: 0,
    won: 0,
    draws: 0,
    lost: 0,
    score: 0,
    difference: 0,
    against: 0,
    points: 0,
    order: 0
  };

  results.forEach(result => {
    let player = null;
    let oponent = null;

    if (result.home === participant.id) {
      player = 'home';
      oponent = 'away';
    }

    if (result.away === participant.id) {
      player = 'away';
      oponent = 'home';
    }

    const playerScore = result[`${player}Score`];
    const oponentScore = result[`${oponent}Score`];

    if (player && oponent && playerScore !== undefined && oponentScore !== undefined) {
      stats.played++;
      stats.score += playerScore;
      stats.against += oponentScore;

      if (playerScore > oponentScore) {
        stats.won++;
      }

      if (playerScore === oponentScore) {
        stats.draws++;
      }

      if (oponentScore > playerScore) {
        stats.lost++;
      }
    }
  });

  const winModifier = 1000;
  const pointForWin = 3;

  stats.points = stats.won * pointForWin + stats.draws;
  stats.difference = stats.score - stats.against;
  stats.order = stats.points * winModifier + stats.difference;

  const advantage = advantages?.find(a => a.id === participant.id);

  if (advantage) {
    stats.order += 100;
  }

  return stats;
}

export const statisticService = {
  calculateForPlayer
};
