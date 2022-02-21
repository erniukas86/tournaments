const knownBrackets = [2, 4, 8, 16, 32, 64];

const exampleTeams = ['Pirma', 'Antra', 'Trecia', 'Ketvirta', 'Penkta', 'Sesta', 'Septinta', 'Astunta', 'Devinta', 'Desimta', 'New York Rangers', 'Philadelphia Flyers', 'New Jersey Devils', 'New York Islanders', 'New York Rangers', 'Philadelphia Flyers', 'New Jersey Devils', 'New York Islanders', 'New York Rangers', 'Philadelphia Flyers', 'New Jersey Devils', 'New York Islanders', 'New York Rangers', 'Philadelphia Flyers', 'New Jersey Devils', 'New York Islanders', 'New York Rangers', 'Philadelphia Flyers', 'New Jersey Devils', 'New York Islanders', 'New York Rangers', 'Philadelphia Flyers', 'New Jersey Devils', 'New York Islanders', 'New York Rangers', 'Philadelphia Flyers', 'New Jersey Devils', 'New York Islanders', 'New York Rangers', 'Philadelphia Flyers', 'Pittsburgh Penguins', 'Boston Bruins', 'Buffalo Sabres', 'Montreal Canadiens', 'Ottawa Senators', 'Toronto Maple Leafs', 'Carolina Hurricanes', 'Florida Panthers', 'Tampa Bay Lightning', 'Washington Capitals', 'Winnipeg Jets', 'Chicago Blackhawks', 'Columbus Blue Jackets', 'Detroit Red Wings', 'Nashville Predators', 'St. Louis Blues', 'Calgary Flames', 'Colorado Avalanche', 'Edmonton Oilers', 'Minnesota Wild', 'Vancouver Canucks', 'Anaheim Ducks', 'Dallas Stars', 'Los Angeles Kings', 'Phoenix Coyotes', 'San Jose Sharks', 'Montreal Wanderers', 'Quebec Nordiques', 'Hartford Whalers'];

function getBracket (base) {
  const closest = knownBrackets.find(b => b => base);
  let byes = closest - base;

  if (byes > 0) {
    base = closest;
  }

  const brackets = [];
  let round = 1;
  let baseT = base / 2;
  let baseC = base / 2;
  let teamMark = 0;
  let nextInc = base / 2;

  for (let i = 1; i <= base - 1; i++) {
    let baseR = i / baseT;
    let isBye = false;

    if (byes > 0 && (i % 2 !== 0 || byes >= baseT - i)) {
      isBye = true;
      byes--;
    }

    const last = brackets.filter(b => b.nextGame === i).map(b => ({ game: b.bracketNo, teams: b.teamnames }));

    brackets.push({
      lastGames: round === 1 ? null : [last[0].game, last[1].game],
      nextGame: nextInc + i > base - 1 ? null : nextInc + i,
      teamnames:
          round === 1
            ? [exampleTeams[teamMark], exampleTeams[teamMark + 1]]
            : [last[0].teams[Math.random(1)], last[1].teams[Math.random(1)]],
      bracketNo: i,
      roundNo: round,
      bye: isBye
    });

    teamMark += 2;

    if (i % 2 !== 0) nextInc--;

    while (baseR >= 1) {
      round++;
      baseC /= 2;
      baseT = baseT + baseC;
      baseR = i / baseT;
    }
  }

  return brackets;
}

export const bracketService = {
  getBracket
};
