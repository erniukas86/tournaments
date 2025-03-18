import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import VersusCard from '../../components/dataDisplay/VersusCard';
import styles from './index.module.css';
import SteppedLineTo from './SteppedLineTo';

function Bracket2025 () {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    // TODO: REMOVE THIS HARDCODED STUFF WITH PROPER LOGIC
    <>
      <Box marginBottom={1}>
        <Box>
          <Tabs value={tabIndex} onChange={handleChange}>
            <Tab label="Main" />
            <Tab label="3rd Place" />
            <Tab label="5th Place" />
            <Tab label="7th Place" />
          </Tabs>
        </Box>
      </Box>
      {tabIndex === 0 && <>
        <div className={styles.row}>
          <div className={styles.column}>
            <VersusCard numberOfGame={1} currentResult={{ homeName: 'Edvinas Velicka (C3)', homeScore: undefined, awayName: 'B2', awayScore: undefined }}></VersusCard>
            <VersusCard numberOfGame={2} currentResult={{ homeName: 'Laimonas Mikelionis (C2)', homeScore: undefined, awayName: 'B3', awayScore: undefined }}></VersusCard>
            <VersusCard numberOfGame={3} currentResult={{ homeName: 'Juste Gudaite (A4)', homeScore: undefined, awayName: 'Klaidas Pilkis (D1)', awayScore: undefined }}></VersusCard>
            <VersusCard numberOfGame={4} currentResult={{ homeName: 'Ernestas Burokas (C1)', homeScore: undefined, awayName: 'B4', awayScore: undefined }}></VersusCard>
            <VersusCard numberOfGame={5} currentResult={{ homeName: 'Karolis Vaitele (A3)', homeScore: undefined, awayName: 'Mindaugas Naravas (D2)', awayScore: undefined }}></VersusCard>
            <VersusCard numberOfGame={6} currentResult={{ homeName: 'Tomas Rentelis (A2)', homeScore: undefined, awayName: 'Raimonda Preimonaite (D3)', awayScore: undefined }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={7} currentResult={{ homeName: 'Dmytro Ivanchenko (A1)', homeScore: undefined, awayName: 'Winner of game #1', awayScore: undefined }}></VersusCard>
            <VersusCard numberOfGame={8} currentResult={{ homeName: 'Winner of game #2', homeScore: undefined, awayName: 'Winner of game #3', awayScore: undefined }}></VersusCard>
            <VersusCard numberOfGame={9} currentResult={{ homeName: 'Winner of game #4', homeScore: undefined, awayName: 'Winner of game #5', awayScore: undefined }}></VersusCard>
            <VersusCard numberOfGame={10} currentResult={{ homeName: 'Winner of game #6', homeScore: undefined, awayName: 'B1', awayScore: undefined }}></VersusCard>
          </div>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={11} currentResult={{ homeName: 'Winner of game #7', homeScore: undefined, awayName: 'Winner of game #8', awayScore: undefined }}></VersusCard>
            <VersusCard numberOfGame={12} currentResult={{ homeName: 'Winner of game #9', homeScore: undefined, awayName: 'Winner of game #10', awayScore: undefined }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={13} currentResult={{ homeName: 'Winner of game #11', homeScore: undefined, awayName: 'Winner of game #12', awayScore: undefined }}></VersusCard>
          </div>
        </div>
        <SteppedLineTo from="game2" to="game8" />
        <SteppedLineTo from="game3" to="game8" />
        <SteppedLineTo from="game4" to="game9" />
        <SteppedLineTo from="game5" to="game9" />

        <SteppedLineTo from="game7" to="game11" />
        <SteppedLineTo from="game8" to="game11" />
        <SteppedLineTo from="game9" to="game12" />
        <SteppedLineTo from="game10" to="game12" />

        <SteppedLineTo from="game11" to="game13" />
        <SteppedLineTo from="game12" to="game13" />
      </>}
      {tabIndex === 1 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={14} currentResult={{ homeName: 'Loser of game #11', homeScore: undefined, awayName: 'Loser of game #12', awayScore: undefined }}></VersusCard>
        </div>
      </div>}
      {tabIndex === 2 && <>
        <div className={styles.row}>
          <div className={styles.column} style={{ gap: '200px' }}>
            <VersusCard numberOfGame={15} currentResult={{ homeName: 'Loser of game #7', homeScore: undefined, awayName: 'Loser of game #8', awayScore: undefined }}></VersusCard>
            <VersusCard numberOfGame={16} currentResult={{ homeName: 'Loser of game #9', homeScore: undefined, awayName: 'Loser of game #10', awayScore: undefined }}></VersusCard>
          </div>
          <div className={styles.column}>
            <VersusCard numberOfGame={17} currentResult={{ homeName: 'Loser of game #15', homeScore: undefined, awayName: 'Loser of game #16', awayScore: undefined }}></VersusCard>
          </div>
        </div>
        <SteppedLineTo from="game15" to="game17" />
        <SteppedLineTo from="game16" to="game17" />
      </>}
      {tabIndex === 3 && <div className={styles.row}>
        <div className={styles.column}>
          <VersusCard numberOfGame={18} currentResult={{ homeName: 'Loser of game #15', homeScore: undefined, awayName: 'Loser of game #16', awayScore: undefined }}></VersusCard>
        </div>
      </div>}
    </>
  );
}

export default Bracket2025;
